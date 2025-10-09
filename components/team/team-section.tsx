"use client";

import { useState, useCallback, useMemo } from "react";
import { motion } from "framer-motion";
import { TeamMember } from "@/types/team";
import { TEAM_MEMBERS } from "@/lib/team-data";
import { TeamHeader } from "./team-header";
import { TeamGrid } from "./team-grid";
import { TeamMemberModal } from "./team-member-modal";
import { containerVariants } from "@/lib/animations";

/**
 * Props for the TeamSection component
 */
interface TeamSectionProps {
  readonly members?: readonly TeamMember[];
  readonly className?: string;
}

/**
 * Main team section component that orchestrates all team-related functionality
 */
export function TeamSection({
  members = TEAM_MEMBERS,
  className,
}: TeamSectionProps) {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  // Memoize callbacks to prevent unnecessary re-renders
  const handleMemberClick = useCallback((member: TeamMember) => {
    setSelectedMember(member);
  }, []);

  const handleModalClose = useCallback(() => {
    setSelectedMember(null);
  }, []);

  // Memoize modal state
  const isModalOpen = useMemo(() => selectedMember !== null, [selectedMember]);

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={`container mx-auto px-4 md:px-6 ${className || ""}`}
      aria-label="Team members"
    >
      <div className="space-y-16">
        {/* Header */}
        <TeamHeader />

        {/* Team grid */}
        <TeamGrid members={members} onMemberClick={handleMemberClick} />

        {/* Member details modal */}
        <TeamMemberModal
          member={selectedMember}
          isOpen={isModalOpen}
          onClose={handleModalClose}
        />
      </div>
    </motion.section>
  );
}