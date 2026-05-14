import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function Footer() {
  return (
    <footer className="border-t bg-background px-[8%]">
      <div className="container px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/assets/images/logo.webp"
                alt="Relevant Research Logo"
                width={72}
                height={72}
                className="h-30 w-auto object-contain"
              />
            </Link>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/work">Our Work</Link>
              </li>
              <li>
                <Link href="/team">Team</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
              <li>Email: contact@relevant-research.com</li>
              {/* <li>Address: Maryland, USA</li> */}
            </ul>
          </div>
          <div className="space-y-4">
            {/* <h3 className="text-lg font-semibold">Newsletter</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Subscribe to our newsletter for updates and insights.
            </p>
            <div className="flex gap-2">
              <Input placeholder="Enter your email" type="email" />
              <Button>Subscribe</Button>
            </div> */}
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Relevant Research. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
