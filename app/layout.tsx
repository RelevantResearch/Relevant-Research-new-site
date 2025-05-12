import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Relevant Research - Web Development, Data Analysis & Public Impact",
  description:
    "We help scholars amplify their research visibility and influence through web development, data analysis, and strategic public impact solutions.",
  openGraph: {
    title: "Relevant Research - Web Development, Data Analysis & Public Impact",
    description:
      "We help scholars amplify their research visibility and influence through web development, data analysis, and strategic public impact solutions.",
    url: "https://relevant-research.com",
    siteName: "Relevant Research",
    images: [
      {
        url: "https://relevant-research.com/assets/images/relevant_research.png", // ✅ public URL to your logo
        width: 1200,
        height: 630,
        alt: "Relevant Research Social Card",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Relevant Research - Web Development, Data Analysis & Public Impact",
    description:
      "We help scholars amplify their research visibility and influence through web development, data analysis, and strategic public impact solutions.",
    images: [
      "https://relevant-research.com/assets/images/relevant_research.png",
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
