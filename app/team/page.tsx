"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Twitter, X } from 'lucide-react'
import Image from 'next/image'

interface TeamMember {
  id: number
  name: string
  role: string
  department: string
  image: string
  bio: string
  social: {
    twitter?: string
    linkedin?: string
    github?: string
  }
}

const team: TeamMember[] = [
  {
    id: 1,
    name: "Dr. Sarah Chen",
    role: "Head of Data Analysis",
    department: "Data",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
    bio: "Dr. Chen leads our data analysis initiatives with over 10 years of experience in research data visualization and analytics.",
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      github: "https://github.com"
    }
  },
  {
    id: 2,
    name: "James Wilson",
    role: "Lead Developer",
    department: "Web",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    bio: "James specializes in creating innovative web solutions for research communication and data presentation.",
    social: {
      linkedin: "https://linkedin.com",
      github: "https://github.com"
    }
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Public Impact Strategist",
    department: "Administrative",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face",
    bio: "Emily crafts strategic solutions to help researchers maximize their public impact and engagement.",
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com"
    }
  },
]

export default function TeamPage() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null)

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
          >
            Meet Our <span className="gradient-text">Team</span>
          </motion.h1>
          <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            Our expert team brings together diverse skills in web development, data analysis, and public impact strategy.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5 }}
              onClick={() => setSelectedMember(member)}
              className="group cursor-pointer overflow-hidden rounded-xl border bg-card p-6 text-center shadow-sm transition-all hover:shadow-lg"
            >
              <div className="mx-auto mb-4 h-32 w-32 overflow-hidden rounded-full">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={128}
                  height={128}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="mb-2 inline-block rounded-full bg-orange-100 px-3 py-1 text-sm font-medium text-orange-800 dark:bg-orange-900/30 dark:text-orange-300">
                {member.department}
              </div>
              <h3 className="mb-1 text-xl font-bold">{member.name}</h3>
              <p className="text-muted-foreground">{member.role}</p>
            </motion.div>
          ))}
        </div>

        <Dialog open={!!selectedMember} onOpenChange={() => setSelectedMember(null)}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>{selectedMember?.name}</DialogTitle>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-4"
                onClick={() => setSelectedMember(null)}
              >
                <X className="h-4 w-4" />
              </Button>
            </DialogHeader>
            <div className="flex items-center gap-6">
              <div className="h-40 w-40 overflow-hidden rounded-full">
                <Image
                  src={selectedMember?.image || ''}
                  alt={selectedMember?.name || ''}
                  width={160}
                  height={160}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h3 className="mb-1 text-xl font-bold">{selectedMember?.name}</h3>
                <p className="mb-2 text-muted-foreground">{selectedMember?.role}</p>
                <p className="text-muted-foreground">{selectedMember?.bio}</p>
                <div className="mt-4 flex gap-2">
                  {selectedMember?.social.twitter && (
                    <Button variant="ghost" size="icon" asChild>
                      <a href={selectedMember.social.twitter} target="_blank" rel="noopener noreferrer">
                        <Twitter className="h-5 w-5" />
                      </a>
                    </Button>
                  )}
                  {selectedMember?.social.linkedin && (
                    <Button variant="ghost" size="icon" asChild>
                      <a href={selectedMember.social.linkedin} target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </Button>
                  )}
                  {selectedMember?.social.github && (
                    <Button variant="ghost" size="icon" asChild>
                      <a href={selectedMember.social.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-5 w-5" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}