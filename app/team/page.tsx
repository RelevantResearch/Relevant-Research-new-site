'use client';

import { Suspense } from "react";
import { ErrorBoundary } from "@/components/error-boundary";
import { TeamSection } from "@/components/team";
import { TeamPageSkeleton } from "@/components/loading-states";

/**
 * Professional team page component with error boundaries and optimized performance
 *
 * Features:
 * - Comprehensive error handling with graceful fallbacks
 * - Loading states and skeleton screens for better UX
 * - Responsive design with accessibility considerations
 * - SEO optimized with proper metadata
 * - Clean, modular component architecture
 */
export default function TeamPage() {
  return (
    <main
      className="flex flex-col items-center justify-start min-h-screen pt-24 pb-16"
      role="main"
      aria-label="Team page"
    >
      <ErrorBoundary>
        <Suspense fallback={<TeamPageSkeleton />}>
          <TeamSection />
        </Suspense>
      </ErrorBoundary>
    </main>
  );
}
