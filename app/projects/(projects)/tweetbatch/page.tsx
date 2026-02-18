"use client";
import { useState } from "react";
import {
    SiTailwindcss,
    SiCloudflare,
    SiHono,
    SiAstro,
    SiTypescript,
    SiShadcnui,
    SiPostgresql,
} from "react-icons/si";
import { FaReact } from "react-icons/fa";
import BreadCrums from "@/app/components/BreadCrums";
import Stack from "@/app/components/Stack";
import List from "@/app/components/List";

const technologies = [
    { name: "React 19", icon: FaReact },
    { name: "Hono", icon: SiHono },
    { name: "Cloudflare Workers", icon: SiCloudflare },
    { name: "Neon Postgres", icon: SiPostgresql },
    { name: "Astro", icon: SiAstro },
    { name: "TailwindCSS", icon: SiTailwindcss },
    { name: "Shadcn/UI", icon: SiShadcnui },
    { name: "TypeScript", icon: SiTypescript },
];

const keyFeatures = [
    "Smart composition with a rich text editor powered by TipTap, supporting character counting and thread support.",
    "Visual scheduling with a drag-and-drop calendar view using dnd-kit to reorganize content strategy instantly.",
    "Bulk import — upload hundreds of tweets via JSON/CSV and let the scheduling engine distribute them automatically.",
    "Scheduling engine powered by Upstash QStash with distinct time windows (Morning, Afternoon, Evening) for optimal throughput.",
    "Fault tolerance with built-in Dead Letter Queues (DLQ) and retry mechanisms to handle Twitter API outages gracefully.",
    "Edge performance — deployed to Cloudflare's global network for sub-second latency from anywhere in the world.",
    "Landing page built with Astro, GSAP, and Tailwind CSS featuring 3D-like animations and scroll-driven storytelling.",
];

const videos = [
    {
        label: "Landing Page",
        url: "https://player.cloudinary.com/embed/?cloud_name=db4bbyw44&public_id=tweetbatch-landinag-page_xql3lx",
    },
    {
        label: "Dashboard",
        url: "https://player.cloudinary.com/embed/?cloud_name=db4bbyw44&public_id=tweetbatch-fr_opk6hp",
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

export default function TweetBatchPage() {
    return (
        <main className="min-h-screen container space-y-4 md:space-y-6 py-4 md:py-6">
            {/* Navigation */}
            <div className="">
                <BreadCrums path={"projects/tweetbatch"} />
            </div>

            {/* Project Header */}
            <div className="space-y-4 md:space-y-6">
                <h1 className="text-xl md:text-3xl font-bold text-foreground">
                    TweetBatch
                </h1>
                <div className="flex flex-col md:flex-row gap-2 md:gap-4 md:items-center">
                    <a
                        href="https://landing-page.fullstackwebdeveloper123.workers.dev/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary-hover transition-colors text-sm md:text-base break-words font-medium"
                    >
                        tweetbatch.workers.dev
                    </a>
                    <span className="hidden md:block text-foreground-secondary">•</span>
                    <a
                        href="https://github.com/PranavKumar9529desai/TweetBatch"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground-secondary hover:text-primary transition-colors text-sm md:text-base break-words"
                    >
                        github.com/PranavKumar9529desai/TweetBatch
                    </a>
                </div>
            </div>
            <p className="text-sm md:text-base text-foreground-secondary leading-relaxed">
                TweetBatch is a high-performance, serverless application designed to
                streamline your Twitter presence. Built on the edge with Cloudflare, it
                combines a futuristic UI with robust scheduling capabilities, ensuring
                your content reaches your audience at the perfect moment.
            </p>

            <VideoShowcase />

            <div className="overflow-x-auto -mx-4 px-4 md:overflow-visible md:px-0">
                <Stack technologies={technologies} />
            </div>

            {/* Key Features */}
            <div className="text-sm md:text-base">
                <List facts={keyFeatures} />
            </div>

            {/* Monorepo Structure */}
            <div className="space-y-3">
                <h2 className="text-lg md:text-xl font-semibold text-foreground">Monorepo Structure</h2>
                <div className="bg-background-secondary rounded-xl p-4 md:p-6 font-mono text-xs md:text-sm text-foreground-secondary overflow-x-auto">
                    <pre>{`├── apps
│   ├── backend       # Hono API (Cloudflare Workers)
│   ├── frontend      # React 19 Web App
│   └── landing-page  # Astro Marketing Site
├── packages
│   ├── db            # Neon Postgres Client
│   ├── ui            # Shared Shadcn Components
│   └── auth          # Auth Package
└── turbo.json`}</pre>
                </div>
            </div>

            {/* Key Metrics */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 py-2 md:py-4">
                {[
                    { value: "Edge", label: "Serverless Deployment" },
                    { value: "3", label: "Apps in Monorepo" },
                    { value: "<1s", label: "Global Latency" },
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
