"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ExternalLink, X } from "lucide-react";
import Image from "next/image";

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  image?: string;
  link?: string;
  client: string;
  challenge: string;
  solution: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Dr. John Torrens",
    description: "Entrepreneur, Educator, TEDx Speaker, Author",
    category: "web development",
    image: "/assets/portfolio/john.png",
    link: "https://johnmtorrens.com/",
    client: "",
    challenge: "",
    solution: "",
  },
  {
    id: 2,
    title: "Dr. Penelope Anthias",
    description: "Assoc. Prof. of Geography, Durham University",
    category: "web development",
    image: "/assets/portfolio/dr.png",
    link: "https://penelopeanthias.com/",
    client: "",
    challenge: "",
    solution: "",
  },
  {
    id: 3,
    title: "Micheal Paarlberg",
    description:
      "Assoc. Prof. of Political Science, Virginia Commonwealth University",
    category: "web development",
    image: "/assets/portfolio/michael.png",
    link: "https://michaelpaarlberg.org",
    client: "",
    challenge: "",
    solution: "",
  },
  {
    id: 4,
    title: "Julio Fernando Salas",
    description:
      "PhD Student & Chancellor's Fellow, Dept. of Sociology, UC Berkeley",
    category: "web development",
    image: "/assets/portfolio/michael.png",
    link: "https://juliofernandosalas.com",
    client: "",
    challenge: "",
    solution: "",
  },
  {
    id: 5,
    title: "Lisa Guerra",
    description: "Lisa War",
    category: "web development",
    image: "/assets/portfolio/lisawar.png",
    link: "https://lisawarlaw.com/",
    client: "",
    challenge: "",
    solution: "",
  },
  {
    id: 6,
    title: "Walter Julio Nicholls",
    description: "UCI Department of Urban Planning and Public Policy",
    category: "web development",
    image: "/assets/portfolio/walter.png",
    link: "https://walternicholls.com",
    client: "",
    challenge: "",
    solution: "",
  },
  {
    id: 7,
    title: "Lory Rosenberg",
    description: "",
    category: "web development",
    image: "/assets/portfolio/loryd.png",
    link: "https://walternicholls.com",
    client: "",
    challenge: "",
    solution: "",
  },
];

export default function WorkPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="flex flex-col items-center justify-start min-h-screen pt-24 pb-16">
      <div className=" flex flex-col items-center justify-center container px-10 md:px-6">
        <div className=" space-y-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
          >
            Our <span className="gradient-text">Work</span>
          </motion.h1>
          <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            Explore our portfolio of successful projects where we've helped
            researchers amplify their impact.
          </p>
        </div>

        <div className="mt-16 mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl px-4">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5 }}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer overflow-hidden rounded-xl border bg-card shadow-sm transition-all hover:shadow-lg"
            >
              {project.image && (
                <div className="aspect-video w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={600}
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="mb-2 inline-block rounded-full bg-orange-100 px-3 py-1 text-sm font-medium text-orange-800 dark:bg-orange-900/30 dark:text-orange-300">
                  {project.category}
                </div>
                <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <Dialog
          open={!!selectedProject}
          onOpenChange={() => setSelectedProject(null)}
        >
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>{selectedProject?.title}</DialogTitle>
            </DialogHeader>
            {selectedProject?.image && (
              <div className="aspect-video w-full overflow-hidden rounded-lg">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  width={800}
                  height={600}
                  className="object-cover"
                />
              </div>
            )}
            <div className="space-y-4">
              {/* <div>
                <h4 className="font-semibold">Client</h4>
                <p className="text-muted-foreground">
                  {selectedProject?.client}
                </p>
              </div>
              <div>
                <h4 className="font-semibold">Challenge</h4>
                <p className="text-muted-foreground">
                  {selectedProject?.challenge}
                </p>
              </div>
              <div>
                <h4 className="font-semibold">Solution</h4>
                <p className="text-muted-foreground">
                  {selectedProject?.solution}
                </p>
              </div> */}
              {selectedProject?.link && (
                <Button asChild className="w-full">
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Website <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
