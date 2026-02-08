"use client";

import { forwardRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { TeamMember } from "@/types/team";
import { cn } from "@/lib/utils";
import { itemVariants, cardHoverVariants } from "@/lib/animations";

/**
 * Props for the TeamMemberCard component
 */
interface TeamMemberCardProps {
  readonly member: TeamMember;
  readonly onClick: (member: TeamMember) => void;
  readonly index: number;
  readonly className?: string;
}

/**
 * Individual team member card component with hover effects and animations
 */
export const TeamMemberCard = forwardRef<HTMLDivElement, TeamMemberCardProps>(
  ({ member, onClick, index, className }, ref) => {
    const handleClick = () => onClick(member);

    const handleKeyDown = (event: React.KeyboardEvent) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        handleClick();
      }
    };

    return (
      <motion.div
        ref={ref}
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: index * 0.1 }}
        whileHover={{
          y: -8,
          scale: 1.02,
          transition: { duration: 0.2 },
        }}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="button"
        aria-label={`View details for ${member.name}`}
        className={cn(
          "group relative cursor-pointer overflow-hidden rounded-xl border bg-card p-6 text-center shadow-sm",
          "transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10",
          "focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2",
          "dark:focus:ring-offset-gray-900",
          className,
        )}
      >
        {/* Background gradient effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-orange-600/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* Profile image */}
        <div className="relative mx-auto mb-4 h-32 w-32 overflow-hidden rounded-full ring-2 ring-border transition-all duration-300 group-hover:ring-orange-500/20">
          <Image
            src={member.imageUrl}
            alt={`Profile picture of ${member.name}`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            style={{ objectPosition: '50% 30%' }}
            sizes="128px"
            priority={index < 6} // Prioritize loading for first 6 members
          />
          <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-full" />
        </div>

        {/* Department badge */}
        {member.department && (
          <div className="mb-3 inline-block rounded-full bg-orange-100 px-3 py-1.5 text-xs font-medium text-orange-800 dark:bg-orange-900/30 dark:text-orange-300">
            {member.department}
          </div>
        )}

        {/* Member information */}
        <div className="relative z-10">
          <h3 className="mb-2 text-xl font-bold tracking-tight text-foreground group-hover:text-orange-600 transition-colors duration-200">
            {member.name}
          </h3>
          {member.role && (
            <p className="text-muted-foreground text-sm leading-relaxed">
              {member.role}
            </p>
          )}
        </div>

        {/* Subtle border highlight */}
        <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-border opacity-100 transition-opacity duration-300 group-hover:opacity-0" />
        <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-orange-500/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </motion.div>
    );
  },
);

TeamMemberCard.displayName = "TeamMemberCard";
