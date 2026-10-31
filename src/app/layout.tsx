import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pratik Birla | Software Engineer",
  description:
    "Portfolio of Pratik Birla — Software Engineer building scalable web apps and AI-powered tools. Specializing in React, Node.js, Python, FastAPI, and LangChain.",
  keywords: [
    "Pratik Birla",
    "Software Engineer",
    "Full Stack Developer",
    "React",
    "Node.js",
    "Python",
    "FastAPI",
    "LangChain",
    "Indore",
  ],
  authors: [{ name: "Pratik Birla" }],
  openGraph: {
    title: "Pratik Birla | Software Engineer",
    description:
      "Building scalable web apps and AI-powered tools. B.E. Electronics & Telecomm at IET DAVV, Indore.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
