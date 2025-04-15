"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const stats = [
    { value: "50+", label: "Projects Completed" },
    { value: "100%", label: "Client Satisfaction" },
    { value: "24/7", label: "Support" },
    { value: "3", label: "Expert Departments" },
  ];
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="flex items-center justify-center min-h-screen">
        <div className="container px-4 py-3 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_600px] lg:gap-12">
            {/* Hero Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col justify-center space-y-4"
            >
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl">
                  Transforming Research into
                  <span className="gradient-text"> Digital Impact</span>
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  We help scholars amplify their research visibility and
                  influence through web development, data analysis, and
                  strategic public impact solutions.
                </p>
              </div>
              <div className="flex flex-col gap-2 sm:flex-row">
                <Button size="lg" asChild>
                  <Link href="/contact">Get Started</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/services">Learn More</Link>
                </Button>
              </div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mx-auto w-full max-w-[600px] aspect-video overflow-hidden rounded-xl bg-orange-100 dark:bg-orange-900"
            >
              <Image
                src="/assets/images/home_page.png"
                alt="Home Page"
                width={800}
                height={450}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 flex items-center justify-center">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.2, // staggered animation
              }}
              viewport={{ once: true }}
            >
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <div className="text-3xl font-bold">{stat.value}</div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {stat.label}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

      {/* About Section */}
      <section id="about" className="py-16">
        <div className="container px-4 md:px-6 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="bg-white dark:bg-black rounded-2xl shadow-xl p-8 md:p-12 flex flex-col-reverse lg:flex-row items-center gap-10"
          >
            {/* About Text */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                <span className="text-orange-500">About </span>
                <span className="text-black dark:text-white">Us</span>
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                At <span className="font-semibold">Relevant Research</span>, we
                believe that the public communication of rigorous research can
                shape a better future. Our mission is to empower scholars by
                helping their work reach its full potential beyond the academic
                sphere.
              </p>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                With personalized support and technical expertise, we enable
                researchers to focus on their core work while we take care of
                the digital and strategic components. From crafting web
                platforms to translating complex data into public-facing
                formats, we are committed to amplifying your research’s
                visibility and influence.
              </p>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                Join us in bridging the gap between academia and the public.
                Together, we can create lasting impact through meaningful
                engagement and accessible innovation.
              </p>
              <Button size="lg" asChild className="mt-6">
                <Link href="/services">Learn More</Link>
              </Button>
            </motion.div>

            {/* About Image */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true }}
              className="lg:w-1/2 flex justify-center"
            >
              <Image
                src="/assets/images/about-us.jpg"
                alt="About Us"
                width={500}
                height={400}
                className="rounded-xl shadow-lg object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
