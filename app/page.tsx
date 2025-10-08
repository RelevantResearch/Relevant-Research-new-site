"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { NewsPortal } from "@/types/news-portals";
import newsPortalsData from "@/data/news-portals.json";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative overflow-hidden hero-background">
        <div className="container mx-auto px-4 pt-32 pb-20 lg:pt-40 lg:pb-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="inline-flex items-center rounded-full border bg-orange-50 dark:bg-orange-950/20 px-4 py-2 text-sm font-medium text-orange-600 dark:text-orange-400 shadow-sm"
                >
                  🚀 Transforming Research Impact
                </motion.div>

                <h1 className="text-4xl font-bold tracking-tight lg:text-6xl xl:text-7xl leading-tight">
                  Amplify Your Research&apos;s
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600 mt-2">
                    Digital Presence
                  </span>
                </h1>

                <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                  We help scholars amplify their research visibility and
                  influence through expert web development, data analysis, and
                  strategic public impact solutions.
                </p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button
                  size="lg"
                  className="group bg-orange-600 hover:bg-orange-700 text-white shadow-lg"
                  asChild
                >
                  <Link href="/contact">
                    Get Started Today
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="hover:bg-orange-50 hover:border-orange-200 dark:hover:bg-orange-950/50 dark:hover:border-orange-800"
                  asChild
                >
                  <Link href="/services">Explore Services</Link>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-orange-100 to-orange-200 dark:from-orange-900/20 dark:to-orange-800/20 p-8 shadow-2xl">
                <Image
                  src="/assets/images/home_page.png"
                  alt="Research and digital impact visualization"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-xl shadow-xl"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-gradient-to-b from-background to-orange-50/20 dark:to-orange-950/10">
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
                    className="w-full h-auto rounded-2xl shadow-2xl"
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
                  <h2 className="text-3xl lg:text-4xl font-bold tracking-tight leading-tight">
                    Bridging Academic Excellence with
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600 block mt-1">
                      Digital Innovation
                    </span>
                  </h2>
                </div>

                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p className="text-lg">
                    At{" "}
                    <span className="font-semibold text-foreground">
                      Relevant Research
                    </span>
                    , we believe that rigorous research communication can shape
                    a better future. Our mission is to empower scholars by
                    helping their work reach its full potential beyond the
                    academic sphere.
                  </p>

                  <p className="text-lg">
                    With personalized support and technical expertise, we enable
                    researchers to focus on their core work while we handle the
                    digital and strategic components.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-orange-600 hover:bg-orange-700 text-white shadow-lg"
                    asChild
                  >
                    <Link href="/services">
                      Discover Our Services
                      <ArrowRight className="ml-2 h-4 w-4" />
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

      <section className="py-20 bg-gradient-to-b from-background to-orange-50/20 dark:to-orange-950/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center space-y-12"
          >
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight leading-tight">
                Featured in Leading News Portals
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our research and expertise have been recognized by major news
                organizations worldwide
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
                    <div className="w-40 h-16 rounded flex items-center justify-center bg-white/90 backdrop-blur-sm shadow-md transition-all duration-300 hover:scale-110 hover:shadow-lg">
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

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="pt-8"
            >
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-orange-600 hover:bg-orange-700 text-white shadow-lg"
                  asChild
                >
                  <Link href="/contact">
                    Start Your Project
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="hover:bg-orange-50 hover:border-orange-200 dark:hover:bg-orange-950/50 dark:hover:border-orange-800"
                  asChild
                >
                  <Link href="/work">View Our Portfolio</Link>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
