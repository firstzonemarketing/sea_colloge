import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { HomePage } from './pages/Home/HomePage';
import { AcademicsOverviewPage } from './pages/Academics/AcademicsOverviewPage';
import { AcademicCategoryPage } from './pages/Academics/AcademicCategoryPage';
import { ProgrammeDetailPage } from './pages/Academics/ProgrammeDetailPage';
import { InstitutionsDirectoryPage } from './pages/Institutions/InstitutionsDirectoryPage';
import { InstitutionDetailPage } from './pages/Institutions/InstitutionDetailPage';
import { AdmissionsPage } from './pages/Admissions/AdmissionsRoutes';
import {
  CampusGalleryPage,
  CampusLifeDetailPage,
  CampusLifeOverviewPage,
} from './pages/CampusLife/CampusLifeRoutes';
import { PlacementsPage } from './pages/Placements/PlacementsRoutes';
import { AboutPage } from './pages/About/AboutRoutes';
import { BlogDetailPage, BlogListingPage } from './pages/Blog/BlogRoutes';
import { NotFoundPage, PrivacyPolicyPage } from './pages/UtilityPages';

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        {/* Homepage */}
        <Route path="/" element={<HomePage />} />

        {/* Academics Overview & All 16 Required Academic Routes */}
        <Route path="/academics" element={<AcademicsOverviewPage />} />
        <Route path="/academics/ug/be" element={<AcademicCategoryPage />} />
        <Route path="/academics/ug/degree" element={<AcademicCategoryPage />} />
        <Route path="/academics/ug/law" element={<AcademicCategoryPage />} />
        <Route path="/academics/ug/nursing" element={<AcademicCategoryPage />} />
        <Route path="/academics/pg/mtech" element={<AcademicCategoryPage />} />
        <Route path="/academics/pg/mba-vtu" element={<AcademicCategoryPage />} />
        <Route path="/academics/pg/mba-bu" element={<AcademicCategoryPage />} />
        <Route path="/academics/pg/mcom" element={<AcademicCategoryPage />} />
        <Route path="/academics/pg/msc-nursing" element={<AcademicCategoryPage />} />
        <Route path="/academics/pg/master-of-arts" element={<AcademicCategoryPage />} />
        <Route path="/academics/pg/msc-cs" element={<AcademicCategoryPage />} />
        <Route path="/academics/research-center" element={<AcademicCategoryPage />} />
        <Route path="/academics/pre-university" element={<AcademicCategoryPage />} />
        <Route path="/academics/mttm" element={<AcademicCategoryPage />} />
        <Route path="/academics/bsc-clinical-nutrition" element={<AcademicCategoryPage />} />
        <Route path="/academics/hospital-administration" element={<AcademicCategoryPage />} />

        {/* Individual Programme Explorer Routes */}
        <Route path="/programmes/:slug" element={<ProgrammeDetailPage />} />

        {/* Institutions Directory & All 12 Constituent Institution Routes */}
        <Route path="/institutions" element={<InstitutionsDirectoryPage />} />
        <Route path="/institutions/:slug" element={<InstitutionDetailPage />} />

        {/* Admissions Overview & All 8 Admissions Sub-Routes */}
        <Route path="/admissions" element={<AdmissionsPage />} />
        <Route path="/admissions/apply" element={<AdmissionsPage />} />
        <Route path="/admissions/procedure" element={<AdmissionsPage />} />
        <Route path="/admissions/eligibility" element={<AdmissionsPage />} />
        <Route path="/admissions/fees-financial-aid" element={<AdmissionsPage />} />
        <Route path="/admissions/international" element={<AdmissionsPage />} />
        <Route path="/admissions/nri" element={<AdmissionsPage />} />
        <Route path="/admissions/prospectus" element={<AdmissionsPage />} />
        <Route path="/admissions/enquiry" element={<AdmissionsPage />} />

        {/* Campus Life Overview, Gallery & All 7 Facility Detail Routes */}
        <Route path="/campus-life" element={<CampusLifeOverviewPage />} />
        <Route path="/campus-life/gallery" element={<CampusGalleryPage />} />
        <Route path="/campus-life/infrastructure" element={<CampusLifeDetailPage />} />
        <Route path="/campus-life/digital-infrastructure" element={<CampusLifeDetailPage />} />
        <Route path="/campus-life/hostels" element={<CampusLifeDetailPage />} />
        <Route path="/campus-life/sports" element={<CampusLifeDetailPage />} />
        <Route path="/campus-life/library" element={<CampusLifeDetailPage />} />
        <Route path="/campus-life/clubs-culture" element={<CampusLifeDetailPage />} />
        <Route path="/campus-life/student-support" element={<CampusLifeDetailPage />} />

        {/* Placements Section & Sub-Routes */}
        <Route path="/placements" element={<PlacementsPage />} />
        <Route path="/placements/training" element={<PlacementsPage />} />
        <Route path="/placements/recruiters" element={<PlacementsPage />} />
        <Route path="/placements/achievements" element={<PlacementsPage />} />

        {/* About Section & Sub-Routes */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/about/trust" element={<AboutPage />} />
        <Route path="/about/vision-mission" element={<AboutPage />} />
        <Route path="/about/leadership" element={<AboutPage />} />
        <Route path="/about/contact" element={<AboutPage />} />

        {/* News & Events / Blog Routes */}
        <Route path="/blog" element={<BlogListingPage />} />
        <Route path="/blog/gallery" element={<CampusGalleryPage />} />
        <Route path="/blog/news" element={<BlogListingPage />} />
        <Route path="/blog/events" element={<BlogListingPage />} />
        <Route path="/blog/events/upcoming" element={<BlogListingPage />} />
        <Route path="/blog/events/:slug" element={<BlogDetailPage />} />
        <Route path="/blog/:slug" element={<BlogDetailPage />} />

        {/* Legal & Utility */}
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/privacy" element={<PrivacyPolicyPage />} />

        {/* 404 Catch-All */}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
