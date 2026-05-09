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
  PhoneCall,
  BarChart3,
  MonitorSmartphone,
  Target,
} from "lucide-react";
import { NewsPortal } from "@/types/news-portals";
import newsPortalsData from "@/data/news-portals.json";
import projectsData from "@/data/projects.json";
import clientsData from "@/data/client.json";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

function CyclingCell({
  clients,
  startIndex,
  delayMs,
}: {
  clients: { name: string; logo: string }[];
  startIndex: number;
  delayMs: number;
}) {
  const [idx, setIdx] = React.useState(startIndex % clients.length);
  const [visible, setVisible] = React.useState(true);

  React.useEffect(() => {
    const boot = setTimeout(() => {
      const interval = setInterval(() => {
        setVisible(false);
        setTimeout(() => {
          setIdx((prev) => (prev + 1) % clients.length);
          setVisible(true);
        }, 700);
      }, 4500);
      return () => clearInterval(interval);
    }, delayMs);
    return () => clearTimeout(boot);
  }, [clients.length, delayMs]);

  return (
    <div className="flex items-center justify-center px-6 py-6 border-r border-b border-border h-24 bg-white">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={clients[idx].logo}
        alt={clients[idx].name}
        style={{ opacity: visible ? 0.8 : 0, transition: "opacity 0.7s ease" }}
        className="h-9 w-auto max-w-full object-contain"
      />
    </div>
  );
}

export default function Home() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [heroSlide, setHeroSlide] = React.useState(0);
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

  const heroPlugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true }),
  );

  const heroSlides = [
    {
      id: "dashboard",
      label: "Data Dashboards",
      // tagline: "Live data, beautifully told.",
      headline: "Turn complex data into",
      highlight: "interactive dashboards.",
      description:
        "We build live dashboards that transform your research data into real-time visualisations — charts, filters, and public trackers that funders, policymakers, and the public can actually use.",
      cta: "See our dashboards",
      ctaHref: "/work",
      // Mock dashboard UI
      visual: "dashboard",
    },
    {
      id: "website",
      label: "Research Websites",
      // tagline: "Your research, front and centre.",
      headline: "We build websites that",
      highlight: "make research land.",
      description:
        "From personal academic sites to full research platforms, we design and develop fast, accessible websites that communicate your findings clearly and reach the audiences that matter.",
      cta: "Explore our work",
      ctaHref: "/work",
      visual: "website",
    },
    {
      id: "digital-presence",
      label: "Digital Presence",
      // tagline: "Stay visible, stay relevant.",
      headline: "We maintain your",
      highlight: "digital presence.",
      description:
        "Great research keeps evolving. We provide long-running technical partnership — updating trackers, refreshing content, and ensuring your digital presence grows with your work.",
      cta: "Book a strategy call",
      ctaHref: "/contact",
      visual: "presence",
    },
  ];

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
      title: "Web & Mobile Development",
      description:
        "Beautiful, accessible, and fast digital products for researchers, labs, nonprofits, and projects. From personal academic sites and full research platforms to custom web and mobile applications for data collection and fieldwork.",
    },
    {
      icon: Database,
      title: "Data Analysis & Visualisation",
      description:
        "Raw data is only useful when people can read it. We design data collection tools, build live dashboards, and create interactive trackers that turn complex datasets into public stories and inform decisions.",
    },
    {
      icon: Globe,
      title: "Public Impact Strategy",
      description:
        "Great research shouldn't stop at publication. We help you reach journalists, policymakers, and the public through media outreach, content strategy, and communications that turn expertise into influence.",
    },
  ];

  const howWeWork = [
    {
      step: "01",
      icon: PhoneCall,
      title: "Strategy call",
      description:
        "We start with a free 30-minute call to map your research goals, your audience, and the digital tools that will help you reach them. You leave with a clear plan.",
    },
    {
      step: "02",
      icon: Database,
      title: "Data collection",
      description:
        "We design and build the tools that gather your research data cleanly: survey platforms, mobile apps for fieldwork, scraping pipelines, and secure intake forms.",
    },
    {
      step: "03",
      icon: MonitorSmartphone,
      title: "Web or mobile app",
      description:
        "We develop the product your research needs — custom websites, research platforms, or native mobile apps, all built to be fast, accessible, and audience-first.",
    },
    {
      step: "04",
      icon: BarChart3,
      title: "Live dashboard",
      description:
        "Your data, visualised in real time. Interactive dashboards for your team, your funders, and the public, with clean charts, filters, and storytelling built in.",
    },
    {
      step: "05",
      icon: Target,
      title: "Tracker & support",
      description:
        "Long-running research needs long-running tools. We build trackers that keep your findings alive and updated, and stay on as your technical partner.",
    },
  ];

  const whyUs = [
    {
      title: "One team, end to end.",
      description:
        "Strategy, data collection, web and mobile apps, dashboards, trackers, and outreach under one roof. No stitching together freelancers.",
    },
    {
      title: "We speak both languages.",
      description:
        "Our team understands academic rigour and digital strategy, so nothing gets lost in translation.",
    },
    {
      title: "Partnerships, not templates.",
      description:
        "Every project starts with your goals, your audience, and your voice.",
    },
    {
      title: "Proven public reach.",
      description:
        "Our work has appeared in The Guardian, HuffPost, CBS News, and other major outlets.",
    },
    {
      title: "You stay in the driver's seat.",
      description:
        "We handle the technical and strategic load so you can focus on the work only you can do.",
    },
  ];

  return (
    /* ── Page sections ─────────────────────────────────────────────────── */
    <div>
      {/* ══ SECTION 1 — Hero + Featured In ══════════════════════════════ */}
      <section className="min-h-screen flex flex-col">
        {/* Hero – grows to fill available height */}
        <div className="flex-1 relative flex items-center min-h-[70vh]">
          <div className="absolute inset-0">
            <Image
              src="/assets/images/hero.png"
              alt="Hero background"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-background/70 dark:bg-background/80" />
          </div>

          <div className="container relative mx-auto px-4 pt-20 pb-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-2xl space-y-6 text-left"
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
                We help immigration researchers and organizations execute on
                their most important{" "}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600 mt-2 pb-2">
                  data, web, and strategic communications projects
                </span>
                <span className="block text-2xl md:text-3xl font-medium text-foreground/80 mt-2">
                  by working alongside you from concept to completion.
                </span>
              </h1>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="group bg-orange-600 hover:bg-orange-700 text-white shadow-lg text-lg px-8 py-6 relative overflow-hidden"
                  asChild
                >
                  <Link href="/work">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      animate={{ x: [-200, 200] }}
                      transition={{
                        repeat: Infinity,
                        duration: 2.5,
                        ease: "linear",
                      }}
                    />
                    See our work
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="hover:bg-orange-50 hover:border-orange-200 dark:hover:bg-orange-950/50 dark:hover:border-orange-800 text-lg px-8 py-6 border-2"
                  asChild
                >
                  <Link href="/contact">Book a free call</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Trust bar – pinned at the bottom of section 1 */}
        <div className="shrink-0 bg-background border-t py-5 overflow-hidden">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
            Our work has been featured in
          </p>
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
            <div className="flex overflow-hidden">
              <div className="animate-marquee flex items-center gap-10 shrink-0">
                {[
                  ...(newsPortalsData as NewsPortal[]),
                  ...(newsPortalsData as NewsPortal[]),
                ].map((portal, index) => (
                  <div
                    key={`${portal.id}-${index}`}
                    className="group cursor-pointer shrink-0"
                    onClick={() =>
                      window.open(portal.url, "_blank", "noopener,noreferrer")
                    }
                  >
                    {portal.logoUrl ? (
                      <div className="w-28 h-10 rounded flex items-center justify-center bg-white grayscale hover:grayscale-0 transition-all duration-300">
                        <Image
                          src={portal.logoUrl}
                          alt={`${portal.name} logo`}
                          width={112}
                          height={40}
                          className="max-w-full max-h-full object-contain p-2"
                        />
                      </div>
                    ) : (
                      <div
                        className={`${portal.width} h-9 bg-gradient-to-r ${
                          portal.colors.from === portal.colors.to
                            ? `bg-${portal.colors.from}`
                            : `from-${portal.colors.from} to-${portal.colors.to}`
                        } rounded flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300`}
                      >
                        <span
                          className={`text-white font-bold ${portal.textSize}`}
                        >
                          {portal.displayName}
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SECTION 2 — Our Clients + Our Work ══════════════════════════ */}
      <section className="bg-background">
        {/* Clients grid – compact, pinned at the top */}
        <div className="shrink-0 pt-20 pb-8">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1 text-center">
                Trusted by
              </p>
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl text-center mb-4">
                Our <span className="gradient-text">Clients</span>
              </h2>
              {/* 4 cycling cells — each fades logos in/out independently */}
              <div className="grid grid-cols-4 border-l border-t border-border rounded-xl overflow-hidden">
                {[0, 2, 5, 7].map((startIndex, col) => (
                  <CyclingCell
                    key={col}
                    clients={clientsData}
                    startIndex={startIndex}
                    delayMs={col * 700}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Portfolio carousel */}
        <div className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: false, amount: 0.1 }}
              className="text-center mb-8 shrink-0"
            >
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                Our <span className="gradient-text">Work</span>
              </h2>
              <p className="text-sm text-muted-foreground mt-1 max-w-xl mx-auto">
                From immigration policy to public health — helping research
                reach further.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              viewport={{ once: false }}
            >
              <Carousel
                opts={{ align: "center", loop: true }}
                plugins={[plugin.current]}
                className="w-full"
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
                setApi={(api) => {
                  if (!api) return;
                  setCurrentSlide(api.selectedScrollSnap());
                  api.on("select", () =>
                    setCurrentSlide(api.selectedScrollSnap()),
                  );
                }}
              >
                <CarouselContent className="-ml-4">
                  {projectsData.map((project, index) => (
                    <CarouselItem
                      key={project.id}
                      className="pl-4 basis-full sm:basis-1/2 md:basis-1/3"
                    >
                      <motion.div
                        initial={false}
                        animate={{
                          scale: index === currentSlide ? 1.03 : 0.95,
                          opacity: index === currentSlide ? 1 : 0.5,
                        }}
                        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                        className="rounded-xl overflow-hidden border-2 border-orange-200/50 dark:border-orange-800/50 shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        <div className="relative aspect-video bg-gray-100 dark:bg-gray-800">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover"
                            priority={index === 0}
                            sizes="(max-width: 768px) 100vw, 33vw"
                          />
                        </div>
                        <div className="p-4 bg-card">
                          <h3 className="text-base font-bold line-clamp-2">
                            {project.title}
                          </h3>
                        </div>
                      </motion.div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-0 -translate-x-1/2 bg-white dark:bg-gray-900 border-2 border-orange-200 dark:border-orange-800 hover:bg-orange-50 dark:hover:bg-orange-950/50 shadow-lg" />
                <CarouselNext className="right-0 translate-x-1/2 bg-white dark:bg-gray-900 border-2 border-orange-200 dark:border-orange-800 hover:bg-orange-50 dark:hover:bg-orange-950/50 shadow-lg" />
              </Carousel>

              {/* Dot indicators */}
              <div className="flex justify-center mt-4 gap-2">
                {projectsData.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === currentSlide
                        ? "w-8 bg-orange-600"
                        : "w-1.5 bg-gray-300 dark:bg-gray-600"
                    }`}
                  />
                ))}
              </div>

              <div className="flex justify-center mt-4">
                <Button
                  asChild
                  size="sm"
                  className="bg-orange-600 hover:bg-orange-700 text-white shadow-sm group px-6"
                >
                  <Link href="/work">
                    View all projects
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ SECTION 3 — Mission Banner + Footer ═════════════════════════ */}
      <section className="min-h-screen flex flex-col">
        {/* Banner – fills remaining height */}
        <div className="flex-1 relative flex items-center py-32">
          <div className="absolute inset-0">
            <Image
              src="/assets/images/banner.png"
              alt="Banner background"
              fill
              className="object-cover object-center"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-white/70 dark:bg-background/90" />
          </div>

          <div className="container relative mx-auto px-4 pt-20">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: false, amount: 0.2 }}
              className="max-w-2xl space-y-5"
            >
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl leading-tight">
                We believe rigorous research can{" "}
                <span className="gradient-text">shape a better future</span>
              </h2>
              <p className="text-sm md:text-base text-foreground/75 leading-relaxed max-w-xl">
                Our mission is to empower scholars by helping their work reach
                its full potential beyond the academic sphere. With personalized
                support and technical expertise, we enable researchers to focus
                on their core work while we handle the digital and strategic
                components.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  size="sm"
                  className="group bg-orange-600 hover:bg-orange-700 text-white shadow-md px-6 relative overflow-hidden"
                  asChild
                >
                  <Link href="/contact">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      animate={{ x: [-200, 200] }}
                      transition={{
                        repeat: Infinity,
                        duration: 2.5,
                        ease: "linear",
                      }}
                    />
                    Book a free call
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="hover:bg-orange-50 hover:border-orange-200 dark:hover:bg-orange-950/50 dark:hover:border-orange-800 px-6 border-2"
                  asChild
                >
                  <Link href="/work">See our work</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Inline footer */}
        <footer className="shrink-0 border-t bg-background py-8 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
              <div className="col-span-2 md:col-span-1">
                <Link href="/" className="inline-block mb-2">
                  <Image
                    src="/assets/images/logo.webp"
                    alt="Relevant Research"
                    width={48}
                    height={48}
                    className="h-32 w-auto object-contain"
                  />
                </Link>
              </div>
              <div>
                <h4 className="text-sm font-semibold mb-3">Quick Links</h4>
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  <li>
                    <Link
                      href="/services"
                      className="hover:text-foreground transition-colors"
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/work"
                      className="hover:text-foreground transition-colors"
                    >
                      Our Work
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/team"
                      className="hover:text-foreground transition-colors"
                    >
                      Team
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="hover:text-foreground transition-colors"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold mb-3">Contact</h4>
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  <li>contact@relevant-research.com</li>
                </ul>
              </div>
            </div>
            <div className="border-t pt-5 text-center text-xs text-muted-foreground">
              © {new Date().getFullYear()} Relevant Research. All rights
              reserved.
            </div>
          </div>
        </footer>
      </section>
    </div>
  );
}
