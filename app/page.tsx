"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Code, Database, Users } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="flex min-h-screen items-center justify-center pt-16">
        <div className="container px-4 py-16 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col justify-center space-y-4"
            >
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Transforming Research into
                  <span className="gradient-text"> Digital Impact</span>
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  We help scholars amplify their research visibility and influence through web development,
                  data analysis, and strategic public impact solutions.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" asChild>
                  <Link href="/contact">Get Started</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/services">Learn More</Link>
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mx-auto aspect-video w-full max-w-[600px] overflow-hidden rounded-xl bg-orange-100 dark:bg-orange-900"
            >
              {/* Add hero image or animation here */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-secondary/50 py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Services</h2>
            <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
              Comprehensive solutions tailored to enhance your research impact
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <motion.div
              whileHover={{ y: -5 }}
              className="service-card"
            >
              <Code className="h-10 w-10 text-primary" />
              <h3 className="mt-4 text-xl font-bold">Web Development</h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                Custom websites and applications to showcase your research and engage with your audience.
              </p>
              <Button variant="link" className="mt-4 p-0">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ y: -5 }}
              className="service-card"
            >
              <Database className="h-10 w-10 text-primary" />
              <h3 className="mt-4 text-xl font-bold">Data Analysis</h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                Transform complex research data into meaningful insights and visualizations.
              </p>
              <Button variant="link" className="mt-4 p-0">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ y: -5 }}
              className="service-card"
            >
              <Users className="h-10 w-10 text-primary" />
              <h3 className="mt-4 text-xl font-bold">Public Impact</h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                Strategic solutions to amplify your research visibility and influence.
              </p>
              <Button variant="link" className="mt-4 p-0">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardContent className="flex flex-col items-center justify-center p-6">
                <div className="text-3xl font-bold">50+</div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Projects Completed</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center justify-center p-6">
                <div className="text-3xl font-bold">100%</div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Client Satisfaction</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center justify-center p-6">
                <div className="text-3xl font-bold">24/7</div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Support</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center justify-center p-6">
                <div className="text-3xl font-bold">3</div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Expert Departments</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}