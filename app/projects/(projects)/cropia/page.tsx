"use client";
import { useState } from "react";
import {
    SiMongodb,
    SiPrisma,
    SiTailwindcss,
    SiHono,
    SiAstro,
    SiTypescript,
    SiVite,
} from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { TbBrandOpenai } from "react-icons/tb";
import BreadCrums from "@/app/components/BreadCrums";
import Stack from "@/app/components/Stack";
import List from "@/app/components/List";

const technologies = [
    { name: "React (Vite)", icon: FaReact },
    { name: "Astro", icon: SiAstro },
    { name: "Hono", icon: SiHono },
    { name: "MongoDB", icon: SiMongodb },
    { name: "Prisma", icon: SiPrisma },
    { name: "Gemini AI", icon: TbBrandOpenai },
    { name: "TailwindCSS", icon: SiTailwindcss },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Turborepo", icon: SiVite },
];

const keyFeatures = [
    "AI Crop Scanner using Google Gemini 2.5 Flash Lite for real-time, offline-first disease detection with confidence scores and severity ratings.",
    "Decision Support Dashboard with Smart Spray Planner, Root Health X-Ray, and Water Balance Calculator for farmers.",
    "God View (Live Map) for government officials — interactive geospatial map visualizing every crop scan with color-coded health markers.",
    "Regional Analysis Agent that aggregates thousands of scans to generate actionable natural language insights and outbreak alerts.",
    "Cropia Assistant — a conversational AI chatbot for weather forecasts, scan results, and agronomy advice.",
    "Astro-powered landing page achieving a perfect 100/100 PageSpeed score with zero JS runtime overhead.",
];

const videos = [
    {
        label: "Landing Page",
        url: "https://player.cloudinary.com/embed/?cloud_name=db4bbyw44&public_id=cropia-landing-page_et1fsg",
    },
    {
        label: "Dashboard",
        url: "https://player.cloudinary.com/embed/?cloud_name=db4bbyw44&public_id=Cropia_-fr_skyqsx",
    },
];

function VideoShowcase() {
    const [active, setActive] = useState(0);
    return (
        <div className="space-y-3">
            <div className="flex gap-2">
                {videos.map((v, i) => (
                    <button
                        key={v.label}
                        onClick={() => setActive(i)}
                        className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${active === i
                                ? "bg-primary text-white"
                                : "bg-background-secondary text-foreground-secondary hover:text-foreground"
                            }`}
                    >
                        {v.label}
                    </button>
                ))}
            </div>
            <div className="relative w-full rounded-xl overflow-hidden bg-background-secondary aspect-video">
                <iframe
                    key={videos[active].url}
                    src={videos[active].url}
                    className="absolute inset-0 w-full h-full"
                    allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                    allowFullScreen
                />
            </div>
        </div>
    );
}

export default function CropiaPage() {
    return (
        <main className="min-h-screen container space-y-4 md:space-y-6 py-4 md:py-6">
            {/* Navigation */}
            <div className="">
                <BreadCrums path={"projects/cropia"} />
            </div>

            {/* Project Header */}
            <div className="space-y-4 md:space-y-6">
                <h1 className="text-xl md:text-3xl font-bold text-foreground">
                    Cropia
                </h1>
                <div className="flex flex-col md:flex-row gap-2 md:gap-4 md:items-center">
                    <a
                        href="https://cropia-phi.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary-hover transition-colors text-sm md:text-base break-words font-medium"
                    >
                        cropia-phi.vercel.app
                    </a>
                    <span className="hidden md:block text-foreground-secondary">•</span>
                    <a
                        href="https://github.com/PranavKumar9529desai/Cropia"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground-secondary hover:text-primary transition-colors text-sm md:text-base break-words"
                    >
                        github.com/PranavKumar9529desai/Cropia
                    </a>
                </div>
            </div>
            <p className="text-sm md:text-base text-foreground-secondary leading-relaxed">
                Cropia is an intelligent agricultural platform designed to bridge the gap
                between farmers and administrative bodies. It empowers farmers with
                real-time, offline-first disease detection and decision support, while
                providing government officials and NGOs with a &quot;God View&quot; of regional
                crop health to prevent outbreaks. Built as a high-performance monorepo
                using Turborepo, Bun, and Hono, it leverages Google&apos;s Gemini 2.5 Flash
                Lite for speed and accuracy in low-resource environments.
            </p>

            <VideoShowcase />

            <div className="overflow-x-auto -mx-4 px-4 md:overflow-visible md:px-0">
                <Stack technologies={technologies} />
            </div>

            {/* Key Features */}
            <div className="text-sm md:text-base">
                <List facts={keyFeatures} />
            </div>

            {/* Architecture Overview */}
            <div className="space-y-3">
                <h2 className="text-lg md:text-xl font-semibold text-foreground">Architecture</h2>
                <div className="bg-background-secondary rounded-xl p-4 md:p-6 font-mono text-xs md:text-sm text-foreground-secondary overflow-x-auto">
                    <pre>{`├── apps
│   ├── farmer        # Farmer PWA (Vite + React)
│   ├── admin         # Government Dashboard (Vite + React)
│   ├── landing-page  # Marketing Website (Astro)
│   └── api           # Hono Backend (AI Agents)
├── packages
│   ├── db            # Prisma Schema & MongoDB Client
│   ├── ui            # Shared Shadcn UI Components
│   └── config        # Shared Configs
└── turbo.json`}</pre>
                </div>
            </div>

            {/* Key Metrics */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 py-2 md:py-4">
                {[
                    { value: "100/100", label: "PageSpeed Score" },
                    { value: "2", label: "AI Agents" },
                    { value: "4", label: "Apps in Monorepo" },
                ].map((metric, index) => (
                    <li
                        key={index}
                        className="p-4 md:p-6 rounded-xl bg-background-secondary"
                    >
                        <div className="text-2xl md:text-3xl font-bold text-primary">
                            {metric.value}
                        </div>
                        <div className="text-sm md:text-base text-foreground-secondary mt-1">
                            {metric.label}
                        </div>
                    </li>
                ))}
            </ul>
        </main>
    );
}
