"use client";

import { useMemo } from "react";
import { TeamMember } from "@/types/team";
import { TeamMemberCard } from "./team-member-card";

/**
 * Props for the TeamGrid component
 */
interface TeamGridProps {
  readonly members: readonly TeamMember[];
  readonly onMemberClick: (member: TeamMember) => void;
  readonly className?: string;
}

/**
 * Grid layout component for displaying team members with staggered animations
 */
export function TeamGrid({ members, onMemberClick, className }: TeamGridProps) {
  // Memoize active members to prevent unnecessary re-renders
  const activeMembers = useMemo(
    () => members.filter((member) => member.isActive !== false),
    [members],
  );

  if (activeMembers.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="rounded-full bg-muted p-4 mb-4">
          <svg
            className="h-8 w-8 text-muted-foreground"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
            />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-foreground mb-2">
          No Team Members Found
        </h3>
        <p className="text-muted-foreground">
          Check back later for updates to our team.
        </p>
      </div>
    );
  }

  return (
    <div className={className}>
      <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 auto-rows-fr">
        {activeMembers.map((member, index) => (
          <TeamMemberCard
            key={member.id}
            member={member}
            onClick={onMemberClick}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
