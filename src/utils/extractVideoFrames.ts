let extractionPromise: Promise<boolean> | null = null;

export function ensureCampusFramesExtracted(): Promise<boolean> {
  if (typeof window === 'undefined' || !import.meta.env.DEV) {
    return Promise.resolve(false);
  }
  if (extractionPromise) {
    return extractionPromise;
  }

  extractionPromise = (async () => {
    try {
      const statusRes = await fetch('/__frames-status');
      if (!statusRes.ok) return false;
      const statusJson = await statusRes.json();
      if (statusJson.extracted) return true;

      const video = document.createElement('video');
      video.muted = true;
      video.playsInline = true;
      video.preload = 'auto';
      video.src = '/assets/sea-campus-tour.mp4';

      await new Promise<void>((resolve, reject) => {
        if (video.readyState >= 1) {
          resolve();
          return;
        }
        video.addEventListener('loadedmetadata', () => resolve(), { once: true });
        video.addEventListener('error', () => reject(new Error('Video load error')), { once: true });
        video.load();
      });

      const duration = video.duration || 60;
      const vw = video.videoWidth || 1280;
      const vh = video.videoHeight || 720;

      // Crop top/bottom 12% letterbox bars so every photo is full-bleed 16:9
      const cropY = Math.round(vh * 0.12);
      const cropH = Math.round(vh * 0.76);

      const canvas = document.createElement('canvas');
      canvas.width = vw;
      canvas.height = Math.round((vw * 9) / 16);
      const ctx = canvas.getContext('2d');
      if (!ctx) return false;

      // Extract 12 primary frames (campus-photo-1..12)
      const start12 = Math.min(2.5, duration * 0.05);
      const end12 = duration * 0.92;
      const step12 = (end12 - start12) / 11;

      for (let i = 1; i <= 12; i++) {
        const targetTime = start12 + (i - 1) * step12;
        await new Promise<void>((resolve) => {
          const onSeeked = () => {
            video.removeEventListener('seeked', onSeeked);
            resolve();
          };
          video.addEventListener('seeked', onSeeked);
          video.currentTime = targetTime;
        });

        ctx.drawImage(video, 0, cropY, vw, cropH, 0, 0, canvas.width, canvas.height);
        const dataUrl = canvas.toDataURL('image/jpeg', 0.92);

        await fetch('/__save-frame', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            filename: `campus-photo-${i}.jpg`,
            dataUrl,
          }),
        });
      }

      // Extract 24 department/facility frames across the video (dept-1..24)
      const start24 = Math.min(4.0, duration * 0.07);
      const end24 = duration * 0.96;
      const step24 = (end24 - start24) / 23;

      for (let j = 1; j <= 24; j++) {
        const targetTime = start24 + (j - 1) * step24;
        await new Promise<void>((resolve) => {
          const onSeeked = () => {
            video.removeEventListener('seeked', onSeeked);
            resolve();
          };
          video.addEventListener('seeked', onSeeked);
          video.currentTime = targetTime;
        });

        ctx.drawImage(video, 0, cropY, vw, cropH, 0, 0, canvas.width, canvas.height);
        const dataUrl = canvas.toDataURL('image/jpeg', 0.92);

        await fetch('/__save-frame', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            filename: `dept-${j}.jpg`,
            dataUrl,
          }),
        });
      }

      return true;
    } catch {
      return false;
    }
  })();

  return extractionPromise;
}
