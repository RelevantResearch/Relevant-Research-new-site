"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Code, Database, Users, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description:
      "Custom websites and applications to showcase your research and engage with your audience.",
    features: [
      "Custom Research Portfolios",
      "Interactive Data Visualizations",
      "Publication Repositories",
      "Research Project Websites",
      "Academic Lab Websites",
    ],
  },
  {
    icon: Database,
    title: "Data Analysis",
    description:
      "Transform complex research data into meaningful insights and visualizations.",
    features: [
      "Data Visualization",
      "Statistical Analysis",
      "Research Data Processing",
      "Interactive Dashboards",
      "Custom Analysis Tools",
    ],
  },
  {
    icon: Users,
    title: "Public Impact",
    description:
      "Strategic solutions to amplify your research visibility and influence.",
    features: [
      "Impact Strategy Development",
      "Research Communication",
      "Stakeholder Engagement",
      "Media Outreach",
      "Public Engagement Campaigns",
    ],
  },
];

export default function ServicesPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <div
      ref={containerRef}
      className="min-h-screen pt-24 pb-16 flex flex-col items-center justify-start"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
          >
            Our <span className="gradient-text">Services</span>
          </motion.h1>
          <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            Comprehensive solutions tailored to enhance your research impact and
            visibility
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                style={{ y }}
                className="group relative"
              >
                <Card className="h-full overflow-hidden p-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <Icon className="h-12 w-12 text-primary" />
                  <h3 className="mt-4 text-2xl font-bold">{service.title}</h3>
                  <p className="mt-2 text-muted-foreground">
                    {service.description}
                  </p>
                  <ul className="mt-6 space-y-2">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm"
                      >
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  {/* <Button className="mt-6" asChild>
                    <Link href="/contact">
                      Get Started <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button> */}
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16 rounded-2xl bg-orange-50 p-8 dark:bg-orange-950/30"
        >
          <div className="flex flex-col items-center justify-between gap-4 text-center lg:flex-row lg:text-left">
            <div>
              <h2 className="text-2xl font-bold">
                Ready to amplify your research impact?
              </h2>
              <p className="mt-2 text-muted-foreground">
                Let's discuss how we can help you reach a broader audience
              </p>
            </div>
            <Button size="lg" asChild>
              <Link href="/contact">
                Contact Us <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
