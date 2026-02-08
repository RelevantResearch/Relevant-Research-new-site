"use client";

import Image from "next/image";
import { TeamMember, SocialPlatform } from "@/types/team";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Github, Linkedin, Twitter, ExternalLink } from "lucide-react";

/**
 * Props for the TeamMemberModal component
 */
interface TeamMemberModalProps {
  readonly member: TeamMember | null;
  readonly isOpen: boolean;
  readonly onClose: () => void;
}

/**
 * Social media icon mapping
 */
const SOCIAL_ICONS: Record<
  SocialPlatform,
  React.ComponentType<{ className?: string }>
> = {
  twitter: Twitter,
  linkedin: Linkedin,
  github: Github,
  website: ExternalLink,
};

/**
 * Social media platform labels
 */
const SOCIAL_LABELS: Record<SocialPlatform, string> = {
  twitter: "Twitter",
  linkedin: "LinkedIn",
  github: "GitHub",
  website: "Website",
};

/**
 * Modal component for displaying detailed team member information
 */
export function TeamMemberModal({
  member,
  isOpen,
  onClose,
}: TeamMemberModalProps) {
  if (!member) return null;

  const socialEntries = Object.entries(member.socialLinks || {}) as Array<
    [SocialPlatform, string]
  >;
  const hasSocialLinks = socialEntries.length > 0;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="sr-only">
            {member.name} - Team Member Details
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Header section with image and basic info */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <div className="relative h-40 w-40 flex-shrink-0 overflow-hidden rounded-full ring-2 ring-border">
              <Image
                src={member.imageUrl}
                alt={`Profile picture of ${member.name}`}
                fill
                className="object-cover"
                style={{ objectPosition: "50% 30%" }}
                sizes="160px"
                priority
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-full" />
            </div>

            <div className="flex-1 text-center sm:text-left">
              <h2 className="text-2xl font-bold text-foreground mb-2">
                {member.name}
              </h2>

              {member.role && (
                <p className="text-lg text-muted-foreground mb-3">
                  {member.role}
                </p>
              )}

              {member.department && (
                <div className="inline-block rounded-full bg-orange-100 px-4 py-2 text-sm font-medium text-orange-800 dark:bg-orange-900/30 dark:text-orange-300">
                  {member.department}
                </div>
              )}
            </div>
          </div>

          {/* Bio section */}
          {member.bio && (
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-foreground">About</h3>
              <p className="text-muted-foreground leading-relaxed">
                {member.bio}
              </p>
            </div>
          )}

          {/* Social links section */}
          {hasSocialLinks && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Connect</h3>
              <div className="flex flex-wrap gap-3">
                {socialEntries.map(([platform, url]) => {
                  const Icon = SOCIAL_ICONS[platform];
                  const label = SOCIAL_LABELS[platform];

                  return (
                    <Button
                      key={platform}
                      variant="outline"
                      size="sm"
                      asChild
                      className="group hover:bg-orange-50 hover:border-orange-200 dark:hover:bg-orange-950/50 dark:hover:border-orange-800"
                    >
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                        aria-label={`Visit ${member.name}'s ${label} profile`}
                      >
                        <Icon className="h-4 w-4 group-hover:text-orange-600 transition-colors" />
                        {label}
                        <ExternalLink className="h-3 w-3 opacity-50 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </Button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
