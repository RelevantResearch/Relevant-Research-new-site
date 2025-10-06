"use client";

import React, { Component, ReactNode } from "react";
import { AlertTriangle, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Props for the ErrorBoundary component
 */
interface ErrorBoundaryProps {
  readonly children: ReactNode;
  readonly fallback?: React.ComponentType<ErrorFallbackProps>;
  readonly onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
}

/**
 * Props for the error fallback component
 */
interface ErrorFallbackProps {
  readonly error: Error;
  readonly resetError: () => void;
}

/**
 * State for the ErrorBoundary component
 */
interface ErrorBoundaryState {
  readonly hasError: boolean;
  readonly error: Error | null;
}

/**
 * Default error fallback component
 */
function DefaultErrorFallback({ error, resetError }: ErrorFallbackProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] p-8 text-center">
      <div className="rounded-full bg-red-100 p-4 mb-6 dark:bg-red-900/20">
        <AlertTriangle className="h-8 w-8 text-red-600 dark:text-red-400" />
      </div>

      <h2 className="text-2xl font-bold text-foreground mb-4">
        Something went wrong
      </h2>

      <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
        We encountered an unexpected error while loading the team information.
        Please try refreshing the page or contact support if the problem
        persists.
      </p>

      <div className="space-y-4">
        <Button onClick={resetError} className="flex items-center gap-2">
          <RefreshCw className="h-4 w-4" />
          Try Again
        </Button>

        {process.env.NODE_ENV === "development" && (
          <details className="mt-4 p-4 bg-muted rounded-lg text-left max-w-lg">
            <summary className="cursor-pointer font-medium text-sm">
              Error Details (Development)
            </summary>
            <pre className="mt-2 text-xs text-muted-foreground overflow-auto">
              {error.stack}
            </pre>
          </details>
        )}
      </div>
    </div>
  );
}

/**
 * Error boundary component for catching and handling React errors
 */
export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log error to console in development
    if (process.env.NODE_ENV === "development") {
      console.error("ErrorBoundary caught an error:", error, errorInfo);
    }

    // Call optional error handler
    this.props.onError?.(error, errorInfo);
  }

  resetError = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError && this.state.error) {
      const FallbackComponent = this.props.fallback || DefaultErrorFallback;

      return (
        <FallbackComponent
          error={this.state.error}
          resetError={this.resetError}
        />
      );
    }

    return this.props.children;
  }
}
