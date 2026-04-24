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
                End-to-end research impact partner
              </motion.div>

              <h1 className="text-4xl font-bold tracking-tight lg:text-6xl xl:text-7xl leading-tight max-w-5xl mx-auto">
                Research that reaches
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 mt-2 pb-2">
                  beyond the journal.
                </span>
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Your end-to-end partner for research impact. From strategy call
                to live dashboard, we help scholars, universities, and
                mission-driven organisations turn rigorous work into websites,
                apps, and public stories that shape policy and inform the world.
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
                      Book a free consultation
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
                    <Link href="/services">Explore our services</Link>
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Trust Bar */}
      <section className="py-12 lg:py-16 bg-background border-y">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center space-y-10"
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              Our clients&apos; work has been featured in
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16 items-center justify-items-center max-w-4xl mx-auto">
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
                    <div className="w-40 h-16 rounded flex items-center justify-center bg-white/90 backdrop-blur-sm transition-all duration-300 hover:scale-110">
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

      {/* 4. What we build */}
      <section className="py-16 lg:py-24 bg-background">
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
                What we build
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Three pillars. One end-to-end partnership. Every service flows
                into the next so your research moves from raw findings to
                real-world impact without losing momentum.
              </p>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-3">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    viewport={{ once: true }}
                    onHoverStart={() => setHoveredCard(index)}
                    onHoverEnd={() => setHoveredCard(null)}
                  >
                    <Card className="h-full p-8 group relative overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-orange-200 dark:hover:border-orange-800">
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-transparent dark:from-orange-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="relative space-y-4">
                        <div className="w-14 h-14 rounded-xl bg-orange-100 dark:bg-orange-950/50 flex items-center justify-center">
                          <Icon className="h-7 w-7 text-orange-600" />
                        </div>
                        <h3 className="text-xl font-bold">{service.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex justify-center mt-10"
            >
              <Button
                asChild
                size="lg"
                variant="outline"
                className="hover:bg-orange-50 hover:border-orange-300 dark:hover:bg-orange-950/50 border-2 group"
              >
                <Link href="/services">
                  See all services
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. How we work */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-orange-50/30 via-background to-background dark:from-orange-950/10 dark:via-background dark:to-background">
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
                From first call to ongoing impact
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our end-to-end process is built so you never have to juggle
                vendors or worry about what happens next. Five steps, one
                partner, every stage covered.
              </p>
            </motion.div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
              {howWeWork.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    {index < howWeWork.length - 1 && (
                      <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-orange-200 dark:bg-orange-900/50 z-0" />
                    )}
                    <div className="relative z-10 flex flex-col items-center text-center space-y-3 p-4">
                      <div className="w-16 h-16 rounded-full bg-orange-100 dark:bg-orange-950/50 border-2 border-orange-200 dark:border-orange-800 flex items-center justify-center shadow-sm">
                        <Icon className="h-7 w-7 text-orange-600" />
                      </div>
                      <span className="text-xs font-bold text-orange-600 uppercase tracking-widest">
                        Step {step.step}
                      </span>
                      <h3 className="font-bold text-base">{step.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex justify-center mt-12"
            >
              <Button
                asChild
                size="lg"
                className="bg-orange-600 hover:bg-orange-700 text-white shadow-lg group px-8"
              >
                <Link href="/contact">
                  Start with a free strategy call
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. Why us */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center space-y-4 mb-16"
            >
              <h2 className="text-3xl lg:text-5xl font-bold tracking-tight leading-tight">
                Why scholars choose{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                  Relevant Research
                </span>
              </h2>
            </motion.div>

            <div className="space-y-4">
              {whyUs.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 p-6 rounded-xl bg-orange-50/50 dark:bg-orange-950/20 border border-orange-100 dark:border-orange-900/30"
                >
                  <CheckCircle2 className="h-6 w-6 text-orange-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-foreground">
                      {item.title}{" "}
                    </span>
                    <span className="text-muted-foreground">
                      {item.description}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. Portfolio showcase */}
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

      {/* 8. Final CTA Banner */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-orange-600 to-orange-700 dark:from-orange-700 dark:to-orange-800">
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
      </section>
    </div>
  );
}
