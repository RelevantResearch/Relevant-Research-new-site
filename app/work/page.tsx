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
    title: "Research Data Visualization Platform",
    description: "Interactive platform for visualizing complex research data",
    category: "Data Analysis",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    link: "https://example.com/project1",
    client: "University Research Department",
    challenge: "Transform complex research data into accessible visualizations",
    solution:
      "Created an interactive dashboard with real-time data visualization",
  },
  {
    id: 2,
    title: "Academic Portfolio Website",
    description: "Modern portfolio website for academic researchers",
    category: "Web Development",
    image:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop",
    client: "Independent Researcher",
    challenge: "Showcase academic work in an engaging way",
    solution: "Developed a responsive website with publication highlights",
  },
  {
    id: 3,
    title: "Research Impact Campaign",
    description: "Strategic campaign to increase research visibility",
    category: "Public Impact",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
    client: "Research Institute",
    challenge: "Increase public engagement with research findings",
    solution: "Implemented multi-channel outreach strategy",
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
              <div>
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
              </div>
              {selectedProject?.link && (
                <Button asChild className="w-full">
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project <ExternalLink className="ml-2 h-4 w-4" />
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
