"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
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
interface ResearchPaper {
  id: number;
  title: string;
  description: string;
  category: string;
  image?: string;
  github?: string;
  downloadLink?: string;
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
    image: "/assets/portfolio/julio.png",
    link: "https://juliofernandosalas.com",
    client: "",
    challenge: "",
    solution: "",
  },
  {
    id: 5,
    title: "American Families United",
    description: "Website for the American Families United ",
    category: "web development",
    image: "/assets/portfolio/afu.jpg",
    link: "https://juliofernandosalas.com",
    client: "",
    challenge: "",
    solution: "",
  },
  // {
  //   id: 5,
  //   title: "Lisa Guerra",
  //   description: "Lisa War",
  //   category: "web development",
  //   image: "/assets/portfolio/lisawar.png",
  //   link: "https://lisawarlaw.com/",
  //   client: "",
  //   challenge: "",
  //   solution: "",
  // },
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
  // {
  //   id: 7,
  //   title: "Lory Rosenberg",
  //   description: "",
  //   category: "web development",
  //   image: "/assets/portfolio/loryd.png",
  //   link: "https://walternicholls.com",
  //   client: "",
  //   challenge: "",
  //   solution: "",
  // },
];

const researchPapers: ResearchPaper[] = [
  {
    id: 1,
    title:
      "Interval ADP: A Method for Estimating Recent Populations at ICE Detention Facilities",
    description: `Executive Summary: Immigration and Customs Enforcement (ICE) regularly releases data on the total number of immigrants currently in detention nationwide and the average daily population (ADP) of individual detention facilities over the fiscal year to date (FYTD). ICE does not provide up to-date data on the total currently detained population at individual detention facilities — an important yet missing data point. In this paper, Relevant Research outlines a method for estimating recent daily average populations at individual detention facilities. We refer to ICE’s facility-level ADP estimates as “Reported ADP” and we refer our facility-level ADP estimates as “Interval ADP”, since our estimates provide the ADP for the time period between ICE’s previous detention spreadsheet and the current detention spreadsheet. As we show in this paper, sudden spikes or dips in ICE’s detained population at specific facilities may result in significant differences between Reported ADP and Interval ADP. Thus, calculating interval ADP provides facility-level estimates that are closer to current reality than ICE’s Reported ADP.`,
    category: "research",
    // github:
    //   "https://images.pexels.com/photos/1054655/pexels-photo-1054655.jpeg?auto=compress&cs=tinysrgb&w=1200",
    downloadLink: "/assets/pdf/methodology_writeup.pdf",
  },
];

export default function WorkPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedPaper, setSelectedPaper] = useState<ResearchPaper | null>(
    null,
  );

  const isMobile = useIsMobile();

  return (
    <div className="flex flex-col items-center justify-start min-h-screen pt-24 pb-16">
      <>
        {isMobile ? (
          // Mobile layout
          <div className="mt-24 w-full  pb-10">
            <div className="space-y-4 text-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl font-bold tracking-tight sm:text-4xl"
              >
                Research <span className="gradient-text">Papers</span>
              </motion.h2>
              <p className="max-w-[700px] mx-auto text-gray-500 md:text-xl dark:text-gray-400">
                Read our published research papers and methodological
                frameworks.
              </p>
            </div>

            <div className="mt-16 mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 px-4">
              {researchPapers.map((paper) => (
                <motion.div
                  key={paper.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ y: -5 }}
                  onClick={() => setSelectedPaper(paper)}
                  className="group cursor-pointer overflow-hidden rounded-xl border bg-card shadow-sm hover:shadow-lg transition-all"
                >
                  <div className="p-6">
                    <div className="mb-2 inline-block rounded-full bg-sky-100 px-3 py-1 text-sm font-medium text-sky-800 dark:bg-sky-900/30 dark:text-sky-300">
                      {paper.category}
                    </div>
                    <h3 className="mb-2 text-xl font-bold">{paper.title}</h3>
                    <p className="text-muted-foreground line-clamp-4">
                      {paper.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Dialog
              open={!!selectedPaper}
              onOpenChange={() => setSelectedPaper(null)}
            >
              <DialogContent className="max-w-2xl h-screen overflow-y-auto ">
                <DialogHeader>
                  <DialogTitle>{selectedPaper?.title}</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    {selectedPaper?.description}
                  </p>
                  {selectedPaper?.downloadLink && (
                    <Button asChild className="w-full">
                      <a
                        href={selectedPaper.downloadLink}
                        download
                        rel="noopener noreferrer"
                      >
                        Download PDF <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  )}
                  {selectedPaper?.github && (
                    <Button asChild variant="outline" className="w-full">
                      <a
                        href={selectedPaper.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View on GitHub <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </div>
              </DialogContent>
            </Dialog>
          </div>
        ) : (
          // Desktop layout
          <div className="mt-24 w-[70%] pb-10 mx-auto">
            <div className="space-y-4 text-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl font-bold tracking-tight sm:text-4xl"
              >
                Research <span className="gradient-text">Papers</span>
              </motion.h2>
              <p className="max-w-[700px] mx-auto text-gray-500 md:text-xl dark:text-gray-400">
                Read our published research papers and methodological
                frameworks.
              </p>
            </div>

            <div className="mt-16 grid gap-8 px-4">
              {researchPapers.map((paper) => (
                <motion.div
                  key={paper.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ y: -5 }}
                  className="group cursor-default overflow-hidden rounded-xl border bg-card shadow-sm hover:shadow-lg transition-all"
                >
                  <div className="p-6 space-y-4">
                    <div className="inline-block rounded-full bg-sky-100 px-3 py-1 text-sm font-medium text-sky-800 dark:bg-sky-900/30 dark:text-sky-300">
                      {paper.category}
                    </div>
                    <h3 className="text-xl font-bold">{paper.title}</h3>
                    <p className="text-muted-foreground">{paper.description}</p>

                    {paper.downloadLink && (
                      <Button asChild className="w-full">
                        <a
                          href={paper.downloadLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Download PDF <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    )}

                    {paper.github && (
                      <Button asChild variant="outline" className="w-full">
                        <a
                          href={paper.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View on GitHub{" "}
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </>
      {/* Our Work segment */}
      <div className=" flex flex-col items-center justify-center container px-10 md:px-6">
        <div className=" space-y-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
          >
            Our <span className="gradient-text">Web Projects</span>
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
