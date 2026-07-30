import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Anurag Thakur - SDE & AI Systems Engineer",
    default: "Anurag Thakur | SDE & AI Systems Engineer",
  },
  description: "Personal portfolio of Anurag Thakur, a Software Development Engineer specializing in AI orchestration (RAG, LangGraph), backend scalability, and full-stack systems.",
  keywords: ["Anurag Thakur", "Software Engineer", "SDE", "AI Intern", "LangGraph", "RAG", "Next.js", "FastAPI", "Digital Twin", "VIT Bhopal"],
  authors: [{ name: "Anurag Thakur" }],
  creator: "Anurag Thakur",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://anuragthakur.dev",
    title: "Anurag Thakur | SDE & AI Systems Engineer",
    description: "Personal portfolio of Anurag Thakur, a Software Development Engineer specializing in AI orchestration (RAG, LangGraph), backend scalability, and full-stack systems.",
    siteName: "Anurag Thakur Portfolio",
    images: [
      {
        url: "https://anuragthakur.dev/og-image.png",
        width: 1200,
        height: 630,
        alt: "Anurag Thakur - SDE & AI Systems Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anurag Thakur | SDE & AI Systems Engineer",
    description: "Personal portfolio of Anurag Thakur, a Software Development Engineer specializing in AI orchestration (RAG, LangGraph), backend scalability, and full-stack systems.",
    images: ["https://anuragthakur.dev/og-image.png"],
    creator: "@anurag_thakur",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://anuragthakur.dev",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Anurag Thakur",
    "jobTitle": "Software Development Engineer",
    "url": "https://anuragthakur.dev",
    "sameAs": [
      "https://github.com/anuragthakur",
      "https://linkedin.com/in/anuragthakur"
    ],
    "knowsAbout": [
      "Software Engineering",
      "Artificial Intelligence",
      "Machine Learning",
      "Full Stack Development",
      "DevOps",
      "RAG Systems",
      "AI Agents"
    ],
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "VIT Bhopal University"
    }
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
    >
      <body className="flex flex-col bg-background text-foreground font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
