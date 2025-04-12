"use client"

import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
          >
            Get in <span className="gradient-text">Touch</span>
          </motion.h1>
          <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            Have a question or want to discuss a project? We'd love to hear from you.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <p>contact@relevantresearch.com</p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <p>(555) 123-4567</p>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <p>123 Research Ave, Suite 100</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Follow Us</h2>
              <div className="flex gap-4">
                <Button variant="outline" size="icon" asChild>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <Twitter className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="rounded-2xl border bg-card p-8"
          >
            <form className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input id="name" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input id="subject" placeholder="How can we help?" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your project..."
                  className="min-h-[150px]"
                />
              </div>
              <Button className="w-full" size="lg">
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  )
}