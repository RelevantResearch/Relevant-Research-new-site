"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  ExternalLink,
  Download,
  Calendar,
  Users,
  Code,
  BookOpen,
  ArrowRight,
  Globe,
  Database,
  Presentation,
} from "lucide-react";
import Image from "next/image";
import { Project, ResearchPaper } from "@/types/work";
import projectsData from "@/data/projects.json";
import researchData from "@/data/research-papers.json";

const categoryIcons = {
  "Web Development": Globe,
  "Data Visualization": Presentation,
  "Data Analytics": Database,
  "Research Methodology": BookOpen,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function WorkPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedPaper, setSelectedPaper] = useState<ResearchPaper | null>(
    null,
  );

  const projects = projectsData as Project[];
  const researchPapers = researchData as ResearchPaper[];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-orange-50/20 dark:to-orange-950/10">
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6 max-w-4xl mx-auto"
          >
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                Portfolio
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Discover our research projects and technical solutions that
              amplify academic impact and drive meaningful change.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-24">
        <div className="container mx-auto px-4 space-y-24">
          {/* Research Papers Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.div
              variants={itemVariants}
              className="text-center space-y-4"
            >
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">
                Research Publications
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Peer-reviewed research papers and methodological frameworks
                advancing immigration and policy research.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto space-y-6">
              {researchPapers.map((paper, index) => (
                <motion.div
                  key={paper.id}
                  variants={itemVariants}
                  whileHover={{ x: 8 }}
                  onClick={() => setSelectedPaper(paper)}
                  className="group cursor-pointer relative"
                >
                  <Card className="overflow-hidden border bg-card shadow-sm hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300 group-hover:border-orange-200 dark:group-hover:border-orange-800">
                    <CardContent className="p-8 space-y-6">
                      {/* Background gradient effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-orange-600/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                      <div className="flex items-start gap-4 relative z-10">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center transition-colors duration-300 group-hover:bg-orange-200 dark:group-hover:bg-orange-800/50">
                            <BookOpen className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                          </div>
                        </div>

                        <div className="flex-1 space-y-4">
                          <div className="space-y-2">
                            <Badge
                              variant="secondary"
                              className="mb-2 bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300"
                            >
                              {paper.category}
                            </Badge>
                            <h3 className="text-xl font-bold group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors leading-tight text-foreground">
                              {paper.title}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                              {paper.shortDescription}
                            </p>
                          </div>

                          <div className="flex items-center gap-6 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Users className="h-3 w-3" />
                              {paper.authors.join(", ")}
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              {paper.year}
                            </div>
                          </div>

                          <div className="flex items-center gap-2">
                            {paper.keywords.slice(0, 3).map((keyword) => (
                              <Badge
                                key={keyword}
                                variant="outline"
                                className="text-xs border-orange-200 text-orange-700 dark:border-orange-700 dark:text-orange-300"
                              >
                                {keyword}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="flex-shrink-0">
                          <div className="flex items-center gap-2 text-orange-600 dark:text-orange-400 font-medium">
                            Read More
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Web Projects Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.div
              variants={itemVariants}
              className="text-center space-y-4"
            >
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">
                Web Development Projects
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Cutting-edge web applications and platforms that transform
                research data into accessible insights.
              </p>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 max-w-6xl mx-auto">
              {projects.map((project, index) => {
                const IconComponent =
                  categoryIcons[
                    project.category as keyof typeof categoryIcons
                  ] || Globe;
                return (
                  <motion.div
                    key={project.id}
                    variants={itemVariants}
                    whileHover={{ y: -8 }}
                    onClick={() => setSelectedProject(project)}
                    className="group cursor-pointer relative"
                  >
                    <Card className="overflow-hidden border bg-card shadow-sm hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300 group-hover:border-orange-200 dark:group-hover:border-orange-800">
                      {/* Background gradient effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-orange-600/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                      <div className="aspect-video overflow-hidden relative">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        <Badge className="absolute top-4 left-4 bg-orange-600 hover:bg-orange-700 text-white border-0">
                          <IconComponent className="h-3 w-3 mr-1" />
                          {project.category}
                        </Badge>
                      </div>
                      <CardContent className="p-6 space-y-4 relative z-10">
                        <div className="space-y-2">
                          <h3 className="text-xl font-bold group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors text-foreground">
                            {project.title}
                          </h3>
                          <p className="text-muted-foreground line-clamp-2 leading-relaxed">
                            {project.shortDescription}
                          </p>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="h-3 w-3" />
                            {project.year}
                          </div>
                          <div className="flex items-center gap-2 text-orange-600 dark:text-orange-400 font-medium">
                            View Details
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <Dialog
        open={!!selectedProject}
        onOpenChange={() => setSelectedProject(null)}
      >
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">
              {selectedProject?.title}
            </DialogTitle>
          </DialogHeader>

          {selectedProject && (
            <div className="space-y-6">
              <div className="aspect-video overflow-hidden rounded-lg">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  width={800}
                  height={450}
                  className="object-cover w-full h-full"
                />
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-lg mb-2">
                      Project Overview
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Challenge</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {selectedProject.challenge}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Solution</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {selectedProject.solution}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          <Code className="h-3 w-3 mr-1" />
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 space-y-3">
                    <div className="text-sm text-muted-foreground">
                      <strong>Client:</strong> {selectedProject.client}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <strong>Year:</strong> {selectedProject.year}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <Button asChild className="flex-1">
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Visit Website
                  </a>
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Research Paper Modal */}
      <Dialog
        open={!!selectedPaper}
        onOpenChange={() => setSelectedPaper(null)}
      >
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl leading-tight">
              {selectedPaper?.title}
            </DialogTitle>
          </DialogHeader>

          {selectedPaper && (
            <div className="space-y-6">
              <div className="grid gap-6 md:grid-cols-3">
                <div className="md:col-span-2 space-y-4">
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Abstract</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {selectedPaper.abstract}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Keywords</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedPaper.keywords.map((keyword) => (
                        <Badge key={keyword} variant="outline">
                          {keyword}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Publication Details</h4>
                    <div className="space-y-2 text-sm">
                      <div>
                        <strong>Authors:</strong>{" "}
                        {selectedPaper.authors.join(", ")}
                      </div>
                      <div>
                        <strong>Year:</strong> {selectedPaper.year}
                      </div>
                      <div>
                        <strong>Status:</strong> {selectedPaper.status}
                      </div>
                      <div>
                        <strong>Category:</strong> {selectedPaper.category}
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Citation</h4>
                    <p className="text-sm text-muted-foreground italic">
                      {selectedPaper.citation}
                    </p>
                  </div>
                </div>
              </div>

              {selectedPaper.downloadLink && (
                <div className="flex gap-4">
                  <Button asChild className="flex-1">
                    <a
                      href={selectedPaper.downloadLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download PDF
                    </a>
                  </Button>
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
