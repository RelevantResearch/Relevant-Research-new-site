"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Code2,
  Sparkles,
  Users,
  Zap,
  Globe,
  Laptop,
  Database,
  PenTool,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";
import { NewsPortal } from "@/types/news-portals";
import newsPortalsData from "@/data/news-portals.json";
import projectsData from "@/data/projects.json";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function Home() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  const [clicks, setClicks] = React.useState(0);
  const [hoveredCard, setHoveredCard] = React.useState<number | null>(null);

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const plugin = React.useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    }),
  );

  const services = [
    {
      icon: Code2,
      title: "Custom Web Development",
      description:
        "Tailored websites and web applications built with modern technologies to perfectly match your unique needs.",
    },
    {
      icon: Laptop,
      title: "Digital Presence Solutions",
      description:
        "Comprehensive digital strategies to establish and amplify your online presence and reach.",
    },
    {
      icon: Database,
      title: "Data Analysis & Visualization",
      description:
        "Transform complex data into actionable insights with advanced analytics and interactive visualizations.",
    },
    {
      icon: PenTool,
      title: "Research Communication",
      description:
        "Bridge the gap between academic research and public understanding through strategic content development.",
    },
    {
      icon: Globe,
      title: "Agency Support",
      description:
        "Partner with agencies to deliver exceptional digital solutions for their clients with technical excellence.",
    },
    {
      icon: Sparkles,
      title: "UI/UX Design",
      description:
        "Create intuitive, beautiful interfaces that enhance user experience and drive engagement.",
    },
  ];

  const features = [
    "Modern, Responsive Design",
    "SEO Optimized",
    "Lightning Fast Performance",
    "Scalable Architecture",
    "Security First Approach",
    "Ongoing Support & Maintenance",
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden hero-background">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 via-background to-orange-50/30 dark:from-orange-950/20 dark:via-background dark:to-orange-950/10"></div>
        <div className="container relative mx-auto px-4 pt-24 pb-12 lg:pt-32 lg:pb-16">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center space-y-8 mb-16"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="inline-flex items-center rounded-full border bg-orange-50 dark:bg-orange-950/20 px-6 py-2 text-sm font-medium text-orange-600 dark:text-orange-400 shadow-sm"
              >
                <Sparkles className="mr-2 h-4 w-4" />
                Custom Web Solutions & Digital Excellence
              </motion.div>

              <h1 className="text-4xl font-bold tracking-tight lg:text-6xl xl:text-7xl leading-tight max-w-5xl mx-auto">
                We Build
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 mt-2 pb-2">
                  Exceptional Digital Experiences
                </span>
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                From custom websites to complex web applications, we help
                researchers, agencies, and businesses establish a powerful
                digital presence that drives real results.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  animate={{ y: [0, -5, 0] }}
                  transition={{
                    y: { repeat: Infinity, duration: 2, ease: "easeInOut" },
                    scale: { duration: 0.2 },
                  }}
                >
                  <Button
                    size="lg"
                    className="group bg-orange-600 hover:bg-orange-700 text-white shadow-lg hover:shadow-2xl text-lg px-8 py-6 relative overflow-hidden"
                    asChild
                    onClick={() => setClicks(clicks + 1)}
                  >
                    <Link href="/contact">
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        animate={{ x: [-200, 200] }}
                        transition={{
                          repeat: Infinity,
                          duration: 2,
                          ease: "linear",
                        }}
                      />
                      Start Your Project
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  animate={{ y: [0, -5, 0] }}
                  transition={{
                    y: {
                      repeat: Infinity,
                      duration: 2,
                      ease: "easeInOut",
                      delay: 0.3,
                    },
                    scale: { duration: 0.2 },
                  }}
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="hover:bg-orange-50 hover:border-orange-200 dark:hover:bg-orange-950/50 dark:hover:border-orange-800 text-lg px-8 py-6 border-2"
                    asChild
                  >
                    <Link href="/work">View Our Portfolio</Link>
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-background to-orange-50/20 dark:to-orange-950/10">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center space-y-4 mb-16"
            >
              <h2 className="text-3xl lg:text-5xl font-bold tracking-tight leading-tight">
                Custom Sites & Web Applications
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore our portfolio of custom-built websites and web
                applications that deliver exceptional results
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative w-full max-w-6xl mx-auto"
            >
              <Carousel
                opts={{
                  align: "center",
                  loop: true,
                  skipSnaps: false,
                  dragFree: false,
                }}
                plugins={[plugin.current]}
                className="w-full"
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
                setApi={(api) => {
                  if (!api) return;

                  setCurrentSlide(api.selectedScrollSnap());

                  api.on("select", () => {
                    setCurrentSlide(api.selectedScrollSnap());
                  });
                }}
              >
                <CarouselContent className="-ml-4">
                  {projectsData.map((project, index) => {
                    const isCenterSlide = index === currentSlide;

                    return (
                      <CarouselItem
                        key={project.id}
                        className="pl-4 basis-full sm:basis-1/2 md:basis-1/3"
                      >
                        <div className="p-1 h-full">
                          <motion.div
                            initial={false}
                            animate={{
                              scale: isCenterSlide ? 1.05 : 0.95,
                              opacity: isCenterSlide ? 1 : 0.5,
                            }}
                            transition={{
                              duration: 0.4,
                              ease: [0.4, 0, 0.2, 1],
                            }}
                            className="h-full"
                          >
                            <div className="bg-card rounded-xl overflow-hidden border-2 border-orange-200/50 dark:border-orange-800/50 shadow-lg hover:shadow-xl hover:border-orange-400 dark:hover:border-orange-600 transition-all duration-300 h-full flex flex-col">
                              <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
                                <Image
                                  src={project.image}
                                  alt={project.title}
                                  fill
                                  className="object-cover"
                                  priority={index === 0}
                                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                              </div>
                              <div className="p-6 flex-1 flex items-center">
                                <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-foreground line-clamp-2">
                                  {project.title}
                                </h3>
                              </div>
                            </div>
                          </motion.div>
                        </div>
                      </CarouselItem>
                    );
                  })}
                </CarouselContent>
                <CarouselPrevious className="left-0 -translate-x-1/2 bg-white dark:bg-gray-900 border-2 border-orange-200 dark:border-orange-800 hover:bg-orange-50 dark:hover:bg-orange-950/50 shadow-lg hover:scale-105 transition-all" />
                <CarouselNext className="right-0 translate-x-1/2 bg-white dark:bg-gray-900 border-2 border-orange-200 dark:border-orange-800 hover:bg-orange-50 dark:hover:bg-orange-950/50 shadow-lg hover:scale-105 transition-all" />
              </Carousel>

              {/* Progress indicator */}
              <div className="flex justify-center mt-8 gap-2">
                {projectsData.map((_, i) => (
                  <motion.button
                    key={i}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === currentSlide
                        ? "w-12 bg-orange-600"
                        : "w-2 bg-gray-300 dark:bg-gray-600 hover:bg-orange-400 dark:hover:bg-orange-700"
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>

              {/* View Portfolio Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex justify-center mt-8"
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-orange-600 hover:bg-orange-700 text-white shadow-lg group px-8"
                >
                  <Link href="/work">
                    View Full Portfolio
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Agency & Research Support Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-orange-50/30 via-background to-orange-50/30 dark:from-orange-950/10 dark:via-background dark:to-orange-950/10">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid gap-16 lg:grid-cols-2 items-center"
            >
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative order-2 lg:order-1"
              >
                <div className="relative">
                  <Image
                    src="/assets/images/about_us.png"
                    alt="About Relevant Research - Team collaboration"
                    width={600}
                    height={500}
                    className="w-full h-auto rounded-2xl shadow-2xl border-2 border-orange-100 dark:border-orange-900/30"
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-orange-500/10 to-transparent"></div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-8 order-1 lg:order-2"
              >
                <div className="space-y-4">
                  <h2 className="text-3xl lg:text-5xl font-bold tracking-tight leading-tight">
                    Empowering Researchers &
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600 block mt-1">
                      Supporting Agencies
                    </span>
                  </h2>
                </div>

                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p className="text-lg">
                    At{" "}
                    <span className="font-semibold text-foreground">
                      Relevant Research
                    </span>
                    , we bridge the gap between academic excellence and digital
                    innovation. Whether you&apos;re a researcher looking to
                    amplify your work&apos;s impact or an agency seeking
                    reliable technical partnership, we deliver solutions that
                    exceed expectations.
                  </p>

                  <p className="text-lg">
                    Our expertise in custom web development, data visualization,
                    and digital strategy enables you to focus on what you do
                    best while we handle the technical complexities.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 pt-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-orange-600 flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-semibold text-foreground">
                          For Researchers
                        </div>
                        <div className="text-sm">
                          Amplify your research impact
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-orange-600 flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-semibold text-foreground">
                          For Agencies
                        </div>
                        <div className="text-sm">
                          Reliable technical partnership
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-orange-600 hover:bg-orange-700 text-white shadow-lg group"
                    asChild
                  >
                    <Link href="/contact">
                      Partner With Us
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="hover:bg-orange-50 hover:border-orange-200 dark:hover:bg-orange-950/50 dark:hover:border-orange-800"
                    asChild
                  >
                    <Link href="/team">Meet Our Team</Link>
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Recognition Section */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center space-y-12"
          >
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-5xl font-bold tracking-tight leading-tight">
                Featured in Leading News Portals
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our research expertise and digital solutions have been
                recognized by major news organizations worldwide
              </p>
            </div>

            {/* Logos Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 items-center justify-items-center max-w-4xl mx-auto">
              {(newsPortalsData as NewsPortal[]).map((portal, index) => (
                <motion.div
                  key={portal.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer"
                  onClick={() =>
                    window.open(portal.url, "_blank", "noopener,noreferrer")
                  }
                  title={`Visit ${portal.name} - ${portal.description}`}
                >
                  {portal.logoUrl ? (
                    // Image-based logo in original colors
                    <div className="w-40 h-16 rounded flex items-center justify-center bg-white/90 backdrop-blur-sm  transition-all duration-300 hover:scale-110 ">
                      <Image
                        src={portal.logoUrl}
                        alt={`${portal.name} logo`}
                        width={160}
                        height={64}
                        className="max-w-full max-h-full object-contain p-2"
                        priority={index < 3}
                      />
                    </div>
                  ) : (
                    // Text-based logo (fallback)
                    <div
                      className={`${portal.width} h-12 bg-gradient-to-r ${
                        portal.colors.from === portal.colors.to
                          ? `bg-${portal.colors.from}`
                          : `from-${portal.colors.from} to-${portal.colors.to}`
                      } rounded flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-300 hover:scale-110`}
                    >
                      <span
                        className={`text-white font-bold ${portal.textSize}`}
                      >
                        {portal.displayName}
                      </span>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
