"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, X } from "lucide-react";
import Image from "next/image";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  department: string;
  image: string;
  bio: string;
  social: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

const team: TeamMember[] = [
  {
    id: 1,
    name: "Austin Kocher",
    role: "Public Impact Strategist",
    department: "Administrative",
    image: "/assets/team/austin.jpg",
    bio: "",
    social: {
      // twitter: "https://twitter.com",
      linkedin: "https://www.linkedin.com/in/austinkocher/",
      // github: "https://github.com",
    },
  },
  {
    id: 2,
    name: "Adam Sawyer",
    role: "Data Analyst",
    department: "Data Science",
    image: "/assets/team/adam1.jpg",
    bio: "",
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://www.linkedin.com/in/adam-sawyer-tan/",
      // github: "https://github.com",
    },
  },
  {
    id: 3,
    name: "Riwaj Chalise",
    role: "Team Lead",
    department: "Web Development",
    image: "/assets/team/riwaj.jpeg",
    bio: "",
    social: {
      // twitter: "https://twitter.com",
      linkedin: "https://www.linkedin.com/in/riwajchalise/",
      // github: "https://github.com",
    },
  },
  {
    id: 4,
    name: "Michael Ale",
    role: "Data Scientist",
    department: "Data Science",
    image: "/assets/team/michael.png",
    bio: "",
    social: {
      // twitter: "https://twitter.com",
      linkedin: "https://www.linkedin.com/in/michael-ale-315bbb1bb/",
      // github: "https://github.com",
    },
  },
  {
    id: 5,
    name: "Bishal Timsina",
    role: "Web Developer",
    department: "Web Development",
    image: "/assets/team/bishal.jpeg",
    bio: "",
    social: {
      // twitter: "https://twitter.com",
      linkedin: "https://www.linkedin.com/in/bishal-timsina-aa381b263/",
      // github: "https://github.com",
    },
  },
  {
    id: 6,
    name: "Sandesh Nilas Khatiwada",
    role: "Web Developer",
    department: "Web Development",
    image: "/assets/team/sandesh.jpeg",
    bio: "",
    social: {
      // twitter: "https://twitter.com",
      linkedin:
        "https://www.linkedin.com/in/sandesh-nilas-khatiwada-9b503b280/",
      // github: "https://github.com",
    },
  },
  {
    id: 7,
    name: "Srijana Shrestha",
    role: "",
    department: "",
    image: "/assets/team/srijana.jpeg",
    bio: "",
    social: {
      // twitter: "https://twitter.com",
      // linkedin:
      // "https://www.linkedin.com/in/sandesh-nilas-khatiwada-9b503b280/",
      // github: "https://github.com",
    },
  },
  {
    id: 8,
    name: "Pranisha Acharya",
    role: "",
    department: "",
    image: "/assets/team/pranisha.jpeg",
    bio: "",
    social: {
      // twitter: "https://twitter.com",
      // linkedin:
      // "https://www.linkedin.com/in/sandesh-nilas-khatiwada-9b503b280/",
      // github: "https://github.com",
    },
  },
];

export default function TeamPage() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <div className="flex flex-col items-center justify-start min-h-screen pt-24 pb-16">
      <div className="flex flex-col items-center justify-center container px-4 md:px-6">
        <div className="space-y-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
          >
            Meet Our <span className="gradient-text">Team</span>
          </motion.h1>
          <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            Our expert team brings together diverse skills in web development,
            data analysis, and public impact strategy.
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

        <Dialog
          open={!!selectedMember}
          onOpenChange={() => setSelectedMember(null)}
        >
          <DialogContent className="max-w-2xl">
            <div className="flex items-center gap-6">
              <div className="h-40 w-40 overflow-hidden rounded-full">
                <Image
                  src={selectedMember?.image || ""}
                  alt={selectedMember?.name || ""}
                  width={160}
                  height={160}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h3 className="mb-1 text-xl font-bold">
                  {selectedMember?.name}
                </h3>
                <p className="mb-2 text-muted-foreground">
                  {selectedMember?.role}
                </p>
                <p className="text-muted-foreground">{selectedMember?.bio}</p>
                <div className="mt-4 flex gap-2">
                  {selectedMember?.social.twitter && (
                    <Button variant="ghost" size="icon" asChild>
                      <a
                        href={selectedMember.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Twitter className="h-5 w-5" />
                      </a>
                    </Button>
                  )}
                  {selectedMember?.social.linkedin && (
                    <Button variant="ghost" size="icon" asChild>
                      <a
                        href={selectedMember.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </Button>
                  )}
                  {selectedMember?.social.github && (
                    <Button variant="ghost" size="icon" asChild>
                      <a
                        href={selectedMember.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
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
  );
}
