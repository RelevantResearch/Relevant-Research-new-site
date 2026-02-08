"use client";

import { motion } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";

/**
 * Props for the TeamPageSkeleton component
 */
interface TeamPageSkeletonProps {
  readonly memberCount?: number;
  readonly className?: string;
}

/**
 * Loading skeleton component for the team page
 */
export function TeamPageSkeleton({
  memberCount = 9,
  className,
}: TeamPageSkeletonProps) {
  return (
    <div className={`container mx-auto px-4 md:px-6 ${className || ""}`}>
      <div className="space-y-16">
        {/* Header skeleton */}
        <div className="space-y-4 text-center">
          <Skeleton className="h-12 w-64 mx-auto" />
          <Skeleton className="h-6 w-96 mx-auto" />
        </div>

        {/* Grid skeleton */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Array.from({ length: memberCount }, (_, index) => (
            <TeamMemberCardSkeleton key={index} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

/**
 * Loading skeleton for individual team member cards
 */
function TeamMemberCardSkeleton({ index }: { readonly index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.3,
        delay: index * 0.1,
        ease: [0.4, 0, 0.2, 1],
      }}
      className="overflow-hidden rounded-xl border bg-card p-6 text-center shadow-sm"
    >
      {/* Profile image skeleton */}
      <div className="mx-auto mb-4 h-32 w-32 overflow-hidden rounded-full">
        <Skeleton className="h-full w-full rounded-full" />
      </div>

      {/* Department badge skeleton */}
      <Skeleton className="h-6 w-24 mx-auto mb-3 rounded-full" />

      {/* Name skeleton */}
      <Skeleton className="h-6 w-32 mx-auto mb-2" />

      {/* Role skeleton */}
      <Skeleton className="h-4 w-28 mx-auto" />
    </motion.div>
  );
}

/**
 * Simple loading spinner component
 */
export function LoadingSpinner({ className }: { readonly className?: string }) {
  return (
    <div className={`flex items-center justify-center p-8 ${className || ""}`}>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        className="h-8 w-8 rounded-full border-2 border-muted border-t-orange-500"
      />
    </div>
  );
}

/**
 * Loading state with message
 */
export function LoadingState({
  message = "Loading team members...",
  className,
}: {
  readonly message?: string;
  readonly className?: string;
}) {
  return (
    <div
      className={`flex flex-col items-center justify-center min-h-[400px] p-8 text-center ${
        className || ""
      }`}
    >
      <LoadingSpinner className="mb-4" />
      <p className="text-muted-foreground">{message}</p>
    </div>
  );
}
