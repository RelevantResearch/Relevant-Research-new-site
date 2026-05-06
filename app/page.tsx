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
        "Our clients' work has appeared in The Guardian, HuffPost, CBS News, and other major outlets.",
    },
    {
      title: "You stay in the driver's seat.",
      description:
        "We handle the technical and strategic load so you can focus on the work only you can do.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section — 3-slide carousel */}
      <section className="relative overflow-hidden hero-background">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 via-background to-orange-50/30 dark:from-orange-950/20 dark:via-background dark:to-orange-950/10 pointer-events-none" />

        <Carousel
          opts={{ align: "start", loop: true }}
          plugins={[heroPlugin.current]}
          className="w-full"
          setApi={(api) => {
            if (!api) return;
            setHeroSlide(api.selectedScrollSnap());
            api.on("select", () => setHeroSlide(api.selectedScrollSnap()));
          }}
        >
          <CarouselContent>
            {heroSlides.map((slide) => (
              <CarouselItem key={slide.id} className="basis-full">
                <div className="container relative mx-auto px-4 pt-24 pb-12 lg:pt-32 lg:pb-20 min-h-[90vh] flex items-center">
                  <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left — text */}
                    <motion.div
                      key={slide.id + "-text"}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6 }}
                      className="space-y-7 text-left"
                    >
                      <h1 className="text-4xl font-bold tracking-tight lg:text-5xl xl:text-6xl leading-tight">
                        {slide.headline}
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 mt-2 pb-2">
                          {slide.highlight}
                        </span>
                      </h1>

                      <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                        {slide.description}
                      </p>

                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button
                          size="lg"
                          className="group bg-orange-600 hover:bg-orange-700 text-white shadow-lg text-lg px-8 py-6 relative overflow-hidden"
                          asChild
                        >
                          <Link href={slide.ctaHref}>
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                              animate={{ x: [-200, 200] }}
                              transition={{
                                repeat: Infinity,
                                duration: 2.5,
                                ease: "linear",
                              }}
                            />
                            {slide.cta}
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

                    {/* Right — visual mock */}
                    <motion.div
                      key={slide.id + "-visual"}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.15 }}
                      className="w-full"
                    >
                      {slide.visual === "dashboard" && (
                        <div className="rounded-2xl border-2 border-orange-200/60 dark:border-orange-800/50 bg-white dark:bg-gray-900 shadow-2xl overflow-hidden">
                          {/* Chrome bar */}
                          <div className="flex items-center gap-1.5 px-4 py-3 bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                            <span className="w-3 h-3 rounded-full bg-red-400" />
                            <span className="w-3 h-3 rounded-full bg-yellow-400" />
                            <span className="w-3 h-3 rounded-full bg-green-400" />
                            <div className="ml-3 flex-1 bg-white dark:bg-gray-700 rounded px-3 py-1 text-xs text-muted-foreground">
                              dashboard.relevantresearch.org
                            </div>
                          </div>
                          <div className="p-5 space-y-4">
                            {/* Stat cards row */}
                            <div className="grid grid-cols-3 gap-3">
                              {[
                                {
                                  label: "Policy Reports",
                                  value: "1,284",
                                  trend: "+12%",
                                },
                                {
                                  label: "Citations",
                                  value: "38.6k",
                                  trend: "+8%",
                                },
                                {
                                  label: "Media Mentions",
                                  value: "492",
                                  trend: "+23%",
                                },
                              ].map((s) => (
                                <div
                                  key={s.label}
                                  className="rounded-xl bg-orange-50 dark:bg-orange-950/30 border border-orange-100 dark:border-orange-900 p-3 space-y-1"
                                >
                                  <p className="text-[10px] uppercase tracking-wide text-muted-foreground">
                                    {s.label}
                                  </p>
                                  <p className="text-xl font-bold text-foreground">
                                    {s.value}
                                  </p>
                                  <span className="text-[10px] text-green-600 font-medium">
                                    {s.trend}
                                  </span>
                                </div>
                              ))}
                            </div>
                            {/* Bar chart mock */}
                            <div className="rounded-xl border border-gray-100 dark:border-gray-800 p-4 bg-gray-50 dark:bg-gray-800/50">
                              <p className="text-xs font-semibold text-muted-foreground mb-3">
                                Monthly Impact Reach
                              </p>
                              <div className="flex items-end gap-2 h-20">
                                {[
                                  40, 65, 50, 80, 70, 90, 75, 95, 85, 100, 88,
                                  110,
                                ].map((h, i) => (
                                  <motion.div
                                    key={i}
                                    className="flex-1 rounded-t bg-gradient-to-t from-orange-600 to-orange-400"
                                    initial={{ height: 0 }}
                                    animate={{ height: `${h}%` }}
                                    transition={{
                                      duration: 0.6,
                                      delay: i * 0.04,
                                    }}
                                  />
                                ))}
                              </div>
                              <div className="flex justify-between mt-2">
                                {[
                                  "Jan",
                                  "Feb",
                                  "Mar",
                                  "Apr",
                                  "May",
                                  "Jun",
                                  "Jul",
                                  "Aug",
                                  "Sep",
                                  "Oct",
                                  "Nov",
                                  "Dec",
                                ].map((m) => (
                                  <span
                                    key={m}
                                    className="text-[8px] text-muted-foreground"
                                  >
                                    {m}
                                  </span>
                                ))}
                              </div>
                            </div>
                            {/* Line sparkline */}
                            <div className="rounded-xl border border-gray-100 dark:border-gray-800 p-4 bg-gray-50 dark:bg-gray-800/50">
                              <p className="text-xs font-semibold text-muted-foreground mb-2">
                                Policy Downloads — 7-day trend
                              </p>
                              <svg viewBox="0 0 200 50" className="w-full h-10">
                                <polyline
                                  points="0,40 30,30 60,35 90,15 120,20 150,8 200,5"
                                  fill="none"
                                  stroke="rgb(234,88,12)"
                                  strokeWidth="2.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <polyline
                                  points="0,40 30,30 60,35 90,15 120,20 150,8 200,5 200,50 0,50"
                                  fill="rgba(234,88,12,0.08)"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      )}

                      {slide.visual === "website" && (
                        <div className="rounded-2xl border-2 border-orange-200/60 dark:border-orange-800/50 bg-white dark:bg-gray-900 shadow-2xl overflow-hidden">
                          {/* Chrome */}
                          <div className="flex items-center gap-1.5 px-4 py-3 bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                            <span className="w-3 h-3 rounded-full bg-red-400" />
                            <span className="w-3 h-3 rounded-full bg-yellow-400" />
                            <span className="w-3 h-3 rounded-full bg-green-400" />
                            <div className="ml-3 flex-1 bg-white dark:bg-gray-700 rounded px-3 py-1 text-xs text-muted-foreground">
                              yourresearch.org
                            </div>
                          </div>
                          {/* Navbar mock */}
                          <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100 dark:border-gray-800">
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 rounded bg-orange-500" />
                              <span className="text-xs font-bold text-foreground">
                                ResearchLab
                              </span>
                            </div>
                            <div className="hidden sm:flex gap-4">
                              {["About", "Research", "Team", "Contact"].map(
                                (n) => (
                                  <span
                                    key={n}
                                    className="text-[10px] text-muted-foreground hover:text-orange-600 cursor-pointer"
                                  >
                                    {n}
                                  </span>
                                ),
                              )}
                            </div>
                            <div className="w-16 h-5 rounded-full bg-orange-600 flex items-center justify-center">
                              <span className="text-[9px] text-white font-medium">
                                Get in touch
                              </span>
                            </div>
                          </div>
                          {/* Hero mock */}
                          <div className="relative bg-gradient-to-br from-orange-50 to-white dark:from-orange-950/20 dark:to-gray-900 px-5 py-8 space-y-3">
                            <div className="w-24 h-3 rounded bg-orange-200 dark:bg-orange-800" />
                            <div className="w-48 h-5 rounded bg-gray-800 dark:bg-gray-200" />
                            <div className="w-40 h-5 rounded bg-orange-500" />
                            <div className="w-56 h-2 rounded bg-gray-200 dark:bg-gray-700 mt-2" />
                            <div className="w-48 h-2 rounded bg-gray-200 dark:bg-gray-700" />
                            <div className="w-32 h-2 rounded bg-gray-200 dark:bg-gray-700" />
                            <div className="flex gap-2 mt-4">
                              <div className="w-24 h-8 rounded-lg bg-orange-600 flex items-center justify-center">
                                <span className="text-[10px] text-white font-medium">
                                  Read the report
                                </span>
                              </div>
                              <div className="w-24 h-8 rounded-lg border-2 border-orange-300 flex items-center justify-center">
                                <span className="text-[10px] text-orange-600 font-medium">
                                  Meet the team
                                </span>
                              </div>
                            </div>
                          </div>
                          {/* Cards row */}
                          <div className="grid grid-cols-3 gap-3 p-4 bg-gray-50 dark:bg-gray-800/50">
                            {["Findings", "Data", "Policy Impact"].map((c) => (
                              <div
                                key={c}
                                className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-3 space-y-2"
                              >
                                <div className="w-6 h-6 rounded-md bg-orange-100 dark:bg-orange-900/40" />
                                <div className="w-full h-2 rounded bg-gray-200 dark:bg-gray-700" />
                                <div className="w-3/4 h-2 rounded bg-gray-100 dark:bg-gray-800" />
                                <p className="text-[9px] font-semibold text-muted-foreground">
                                  {c}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {slide.visual === "presence" && (
                        <div className="rounded-2xl border-2 border-orange-200/60 dark:border-orange-800/50 bg-white dark:bg-gray-900 shadow-2xl overflow-hidden">
                          {/* Chrome */}
                          <div className="flex items-center gap-1.5 px-4 py-3 bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                            <span className="w-3 h-3 rounded-full bg-red-400" />
                            <span className="w-3 h-3 rounded-full bg-yellow-400" />
                            <span className="w-3 h-3 rounded-full bg-green-400" />
                            <div className="ml-3 flex-1 bg-white dark:bg-gray-700 rounded px-3 py-1 text-xs text-muted-foreground">
                              impact-tracker.relevantresearch.org
                            </div>
                          </div>
                          <div className="p-5 space-y-4">
                            {/* Header */}
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="text-sm font-bold text-foreground">
                                  Digital Presence Overview
                                </p>
                                <p className="text-[10px] text-muted-foreground">
                                  Last updated: today
                                </p>
                              </div>
                              <div className="flex items-center gap-1.5 rounded-full bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 px-3 py-1">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                <span className="text-[10px] text-green-600 font-medium">
                                  Live
                                </span>
                              </div>
                            </div>
                            {/* Activity feed */}
                            <div className="space-y-2">
                              {[
                                {
                                  text: "New article cited in The Guardian",
                                  time: "2h ago",
                                  color:
                                    "bg-blue-50 dark:bg-blue-950/20 border-blue-100 dark:border-blue-900",
                                },
                                {
                                  text: "Dashboard updated with Q2 data",
                                  time: "1d ago",
                                  color:
                                    "bg-orange-50 dark:bg-orange-950/20 border-orange-100 dark:border-orange-900",
                                },
                                {
                                  text: "Website traffic +34% this month",
                                  time: "3d ago",
                                  color:
                                    "bg-green-50 dark:bg-green-950/20 border-green-100 dark:border-green-900",
                                },
                                {
                                  text: "Podcast feature published on BBC",
                                  time: "5d ago",
                                  color:
                                    "bg-purple-50 dark:bg-purple-950/20 border-purple-100 dark:border-purple-900",
                                },
                              ].map((item, i) => (
                                <div
                                  key={i}
                                  className={`flex items-start gap-3 rounded-lg border ${item.color} p-3`}
                                >
                                  <div className="flex-1 min-w-0">
                                    <p className="text-[11px] font-medium text-foreground truncate">
                                      {item.text}
                                    </p>
                                    <p className="text-[10px] text-muted-foreground">
                                      {item.time}
                                    </p>
                                  </div>
                                </div>
                              ))}
                            </div>
                            {/* Reach stats */}
                            <div className="grid grid-cols-2 gap-3">
                              {[
                                {
                                  label: "Social Reach",
                                  value: "124k",
                                  icon: Globe,
                                },
                                {
                                  label: "Active Trackers",
                                  value: "7",
                                  icon: TrendingUp,
                                },
                              ].map(({ label, value, icon: Icon }) => (
                                <div
                                  key={label}
                                  className="rounded-xl bg-orange-50 dark:bg-orange-950/30 border border-orange-100 dark:border-orange-900 p-3 flex items-center gap-3"
                                >
                                  <Icon className="h-5 w-5 text-orange-500 shrink-0" />
                                  <div>
                                    <p className="text-lg font-bold text-foreground">
                                      {value}
                                    </p>
                                    <p className="text-[10px] text-muted-foreground">
                                      {label}
                                    </p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Slide indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 items-center z-10">
            {heroSlides.map((s, i) => (
              <button
                key={s.id}
                className={`transition-all duration-300 rounded-full h-2 ${i === heroSlide ? "w-10 bg-orange-600" : "w-2 bg-gray-300 dark:bg-gray-600 hover:bg-orange-400"}`}
                aria-label={`Go to slide ${i + 1}: ${s.label}`}
              />
            ))}
          </div>

          <CarouselPrevious className="left-4 lg:left-6 bg-white/80 dark:bg-gray-900/80 border-orange-200 dark:border-orange-800 hover:bg-orange-50 dark:hover:bg-orange-950/50 shadow-lg" />
          <CarouselNext className="right-4 lg:right-6 bg-white/80 dark:bg-gray-900/80 border-orange-200 dark:border-orange-800 hover:bg-orange-50 dark:hover:bg-orange-950/50 shadow-lg" />
        </Carousel>
      </section>

      {/* 2. Trust Bar */}
      <section className="py-10 lg:py-14 bg-background border-y overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Our clients&apos; work has been featured in
          </p>
        </motion.div>

        {/* Desktop — single static row */}
        <div className="hidden md:flex items-center justify-center gap-10 lg:gap-16 px-8 flex-wrap">
          {(newsPortalsData as NewsPortal[]).map((portal, index) => (
            <div
              key={portal.id}
              className="group cursor-pointer shrink-0"
              onClick={() =>
                window.open(portal.url, "_blank", "noopener,noreferrer")
              }
              title={`Visit ${portal.name} - ${portal.description}`}
            >
              {portal.logoUrl ? (
                <div className="w-36 h-14 rounded flex items-center justify-center bg-white transition-all duration-300 hover:scale-110 grayscale hover:grayscale-0">
                  <Image
                    src={portal.logoUrl}
                    alt={`${portal.name} logo`}
                    width={144}
                    height={56}
                    className="max-w-full max-h-full object-contain p-2"
                    priority={index < 3}
                  />
                </div>
              ) : (
                <div
                  className={`${portal.width} h-12 bg-gradient-to-r ${
                    portal.colors.from === portal.colors.to
                      ? `bg-${portal.colors.from}`
                      : `from-${portal.colors.from} to-${portal.colors.to}`
                  } rounded flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-300 hover:scale-110`}
                >
                  <span className={`text-white font-bold ${portal.textSize}`}>
                    {portal.displayName}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile — continuous marquee */}
        <div className="md:hidden relative">
          {/* fade edges */}
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
                    <div className="w-32 h-12 rounded flex items-center justify-center bg-white grayscale hover:grayscale-0 transition-all duration-300">
                      <Image
                        src={portal.logoUrl}
                        alt={`${portal.name} logo`}
                        width={128}
                        height={48}
                        className="max-w-full max-h-full object-contain p-2"
                      />
                    </div>
                  ) : (
                    <div
                      className={`${portal.width} h-10 bg-gradient-to-r ${
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
      </section>

      {/* 3. Portfolio showcase */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-background to-orange-50/20 dark:to-orange-950/10">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center space-y-4 mb-10"
            >
              <h2 className="text-3xl lg:text-5xl font-bold tracking-tight leading-tight">
                Trusted by researchers making a difference
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                From immigration policy to public health to civic
                accountability, our clients tackle the questions that matter
                most. We&apos;re proud to help their work reach further.
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
                    View our portfolio
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. About & Mission */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-orange-50/30 via-background to-orange-50/30 dark:from-orange-950/10 dark:via-background dark:to-orange-950/10">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
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
                    Your research deserves
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600 block mt-1">
                      a bigger audience.
                    </span>
                  </h2>
                </div>

                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p className="text-lg">
                    Too often, important work stays locked behind paywalls,
                    jargon, and clunky academic websites. We bridge that gap.
                  </p>
                  <p className="text-lg">
                    At{" "}
                    <span className="font-semibold text-foreground">
                      Relevant Research
                    </span>
                    , we pair academic rigour with digital craft. Our team of
                    researchers, designers, developers, and communicators gives
                    you one end-to-end partnership — from first strategy call to
                    launched app, live dashboard, and ongoing tracker.
                  </p>
                  <p className="text-lg">
                    You focus on the scholarship only you can do. We handle the
                    tech, design, and outreach strategy that helps it land.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-orange-600 hover:bg-orange-700 text-white shadow-lg group"
                    asChild
                  >
                    <Link href="/team">
                      Meet the team
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="hover:bg-orange-50 hover:border-orange-200 dark:hover:bg-orange-950/50 dark:hover:border-orange-800"
                    asChild
                  >
                    <Link href="/contact">Book a strategy call</Link>
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 8. Final CTA Banner */}
      {/* <section className="py-20 lg:py-28 bg-gradient-to-br from-orange-600 to-orange-700 dark:from-orange-700 dark:to-orange-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center space-y-8"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
              Ready to amplify your research?
            </h2>
            <p className="text-lg text-orange-100 leading-relaxed">
              Let&apos;s talk. A free 30-minute strategy call is all it takes to
              explore how our end-to-end approach — from data collection to live
              dashboard — can help you reach more people, shape policy, and make
              your work count.
            </p>
            <Button
              size="lg"
              className="bg-white text-orange-700 hover:bg-orange-50 shadow-lg text-lg px-8 py-6 font-semibold group"
              asChild
            >
              <Link href="/contact">
                Book your free strategy call
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section> */}
    </div>
  );
}
