import React from "react";
import type { Metadata } from "next";
import BreadCrums from "../components/BreadCrums";
import { FiDownload } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Resume - Pranavkumar Desai",
  description: "Resume of Pranavkumar Desai",
};

export default function ResumePage() {
  return (
    <main className="min-h-screen container space-y-4 md:space-y-6 py-4 md:py-6">
      <div className="flex items-center justify-between">
        <BreadCrums path="resume" />
        <a
          href="/resume.pdf"
          download
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-white text-sm font-medium hover:opacity-90 transition-opacity"
        >
          <FiDownload className="w-4 h-4" />
          Download PDF
        </a>
      </div>

      <h1 className="text-xl md:text-3xl font-bold text-foreground">Resume</h1>

      <div className="w-full rounded-xl overflow-hidden bg-background-secondary border border-border">
        <iframe
          src="/resume.pdf"
          className="w-full h-[85vh]"
          title="Resume PDF"
        />
      </div>
    </main>
  );
}
