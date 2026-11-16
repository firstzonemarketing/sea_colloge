import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught application error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-surface p-6 text-center">
          <div className="max-w-md bg-white rounded-lg border border-slate-200 p-8 shadow">
            <h1 className="text-xl font-extrabold text-navy">
              Something went wrong
            </h1>
            <p className="mt-2 text-sm text-ink-muted">
              An unexpected error occurred while rendering this view. Please return to the homepage.
            </p>
            <a href="/" className="mt-5 btn-primary inline-flex">
              Reload Homepage
            </a>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
