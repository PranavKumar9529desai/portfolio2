import { JSX } from "react";
import { FaReact, FaPython, FaRust } from "react-icons/fa";
import {
    SiNextdotjs,
    SiMongodb,
    SiTailwindcss,
    SiPrisma,
    SiCloudflare,
    SiHono,
    SiAstro,
    SiTypescript,
    SiShadcnui,
    SiVite,
    SiNvidia,
    SiCplusplus,
    SiOpenai,
    SiScikitlearn,
    SiPostgresql,
    SiReactquery,
    SiTauri,
} from "react-icons/si";
import { TbBrandOpenai } from "react-icons/tb";

export interface Project {
    title: string;
    link: string;
    hostedUrl?: string;
    slug: string;
    description: string;
    stackIcons: JSX.Element[];
    features: string[];
    impact: string;
    previewImage: string;
}

export interface OtherProject {
    title: string;
    link: string;
    hostedUrl?: string; // Add optional hostedUrl
    description: string;
    stackIcons?: JSX.Element[];
}

export const notableProjects: Project[] = [
    {
        title: "Cropia",
        link: "https://github.com/PranavKumar9529desai/Cropia",
        hostedUrl: "https://cropia-phi.vercel.app/",
        slug: "cropia",
        description:
            "An AI-powered agricultural platform that empowers farmers with real-time, offline-first disease detection and provides government officials with a regional crop health dashboard.",
        stackIcons: [
            <FaReact key="react" title="React (Vite)" />,
            <SiHono key="hono" title="Hono" />,
            <SiMongodb key="mongodb" title="MongoDB" />,
            <SiPrisma key="prisma" title="Prisma" />,
            <TbBrandOpenai key="ai" title="Gemini AI" />,
            <SiAstro key="astro" title="Astro" />,
            <SiTailwindcss key="tailwind" title="TailwindCSS" />,
            <SiTypescript key="ts" title="TypeScript" />,
        ],
        features: [
            "AI crop scanner using Google Gemini 2.5 Flash Lite for real-time disease detection",
            "Regional Analysis Agent aggregates data from thousands of scans into actionable insights",
            "Smart Spray Planner and Root Health X-Ray for farmer decision support",
        ],
        impact: "Turborepo Monorepo • Gemini AI Agents • 100/100 PageSpeed Score",
        previewImage:
            "https://images.unsplash.com/photo-1574943320219-553eb213f72d?q=80&w=2070&auto=format&fit=crop",
    },
    {
        title: "TweetBatch",
        link: "https://github.com/PranavKumar9529desai/TweetBatch",
        hostedUrl: "https://landing-page.fullstackwebdeveloper123.workers.dev/",
        slug: "tweetbatch",
        description:
            "A high-performance, serverless Twitter scheduling platform built on Cloudflare's edge network, featuring drag-and-drop scheduling with a futuristic UI.",
        stackIcons: [
            <FaReact key="react" title="React 19" />,
            <SiCloudflare key="cloudflare" title="Cloudflare Workers" />,
            <SiHono key="hono" title="Hono" />,
            <SiAstro key="astro" title="Astro" />,
            <SiTailwindcss key="tailwind" title="TailwindCSS" />,
            <SiShadcnui key="shadcn" title="Shadcn/UI" />,
            <SiTypescript key="ts" title="TypeScript" />,
        ],
        features: [
            "Smart scheduling engine powered by Upstash QStash with distinct time windows",
            "Drag-and-drop content pipeline with TanStack Query and dnd-kit",
            "Fault-tolerant with Dead Letter Queues and automatic retry mechanisms",
        ],
        impact: "Serverless Edge • Turborepo Monorepo • Sub-second Latency",
        previewImage:
            "https://images.unsplash.com/photo-1611605698335-8b1569810432?q=80&w=2070&auto=format&fit=crop",
    },
    {
        title: "Rahi",
        link: "https://github.com/PranavKumar9529desai/Rahi",
        hostedUrl: "https://rahi.store",
        slug: "rahi",
        description:
            "A full-featured antique jewellery e-commerce platform with role-based dashboards, product management, order tracking, and a seamless shopping experience.",
        stackIcons: [
            <SiNextdotjs key="nextjs" title="Next.js 16" />,
            <SiHono key="hono" title="Hono" />,
            <SiPostgresql key="postgres" title="PostgreSQL" />,
            <SiReactquery key="tanstack" title="TanStack Query" />,
            <SiTailwindcss key="tailwind" title="Tailwind CSS v4" />,
            <SiShadcnui key="shadcn" title="Shadcn/UI" />,
            <SiTypescript key="ts" title="TypeScript" />,
        ],
        features: [
            "Role-based dashboards for admin, staff, and customers with product, category, and order management",
            "Full shopping experience — product catalog, cart, checkout, and order tracking with real-time updates",
            "Image management with Cloudinary, Google Maps integration, and Better Auth authentication",
        ],
        impact: "Turborepo Monorepo • Drizzle ORM • Hono Backend",
        previewImage:
            "https://images.unsplash.com/photo-1515562141589-6773cd0d5226?q=80&w=2070&auto=format&fit=crop",
    },
    {
        title: "GymNavigator",
        link: "https://gymnavigator.vercel.app/", // Keeping this as main link for now, but should it be GitHub?
        // Actually for GymNavigator the main link IS the hosted one in the current code, but let's be consistent.
        // I'll leave 'link' as is for now to avoid breaking existing logic, but add hostedUrl.
        // Wait, if I add hostedUrl, I can use it explicitly.
        hostedUrl: "https://gymnavigator.vercel.app/",
        slug: "gymnavigator",
        description:
            "A modern gym management web application with a comprehensive dashboard to manage trainers, users, and sales teams, serving 2 gyms with 150 daily active users.",
        stackIcons: [
            <SiNextdotjs key="nextjs" title="Next.js" />,
            <SiHono key="hono" title="Hono" />,
            <SiCloudflare key="cloudflare" title="Cloudflare Workers & D1" />,
            <SiTailwindcss key="tailwind" title="TailwindCSS" />,
            <SiShadcnui key="shadcn" title="Shadcn/UI" />,
            <SiVite key="zod" title="Zod" />,
            <SiTypescript key="ts" title="TypeScript" />,
        ],
        features: [
            "Role-based dashboards for gym owners, trainers, and sales teams",
            "Real-time attendance tracking and member management",
            "Deployed on Cloudflare with D1 database for edge performance",
        ],
        impact: "2 Gyms Onboarded • 150 Daily Active Users • Live in Mumbai",
        previewImage:
            "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop",
    },
    {
        title: "Basalt",
        link: "https://github.com/PranavKumar9529desai/Basalt",
        slug: "basalt",
        description:
            "An Obsidian-class desktop Markdown workspace built with Tauri (Rust) and React — targeting sub-16ms input latency, sub-800ms TTI, and sub-150ms search across 5,000+ notes.",
        stackIcons: [
            <FaRust key="rust" title="Rust" />,
            <FaReact key="react" title="React 19" />,
            <SiTypescript key="ts" title="TypeScript" />,
            <SiTauri key="tauri" title="Tauri" />,
            <SiTailwindcss key="tailwind" title="TailwindCSS" />,
            <SiShadcnui key="shadcn" title="Shadcn/UI" />,
            <SiVite key="vite" title="Vite" />,
        ],
        features: [
            "Full-text search powered by Tantivy with fuzzy matching via Nucleo — search across thousands of notes in milliseconds",
            "Vault indexing engine with filesystem watching, metadata extraction, and link graph construction — all in Rust",
            "Tab system with drag-and-drop, per-pane editor instances, command palette, and a centralized keyboard shortcut system",
        ],
        impact: "11 ADRs • 6 Rust Crates • Obsidian-Class Performance",
        previewImage: "/basalt.png",
    },
];

export const otherProjects: OtherProject[] = [
    {
        title: "Course Recommendation Chatbot",
        description:
            "AI-powered chatbot that helps users find suitable courses by analyzing preferences and skills through interactive conversations.",
        link: "https://github.com/PranavKumar9529desai/course-recommender-chatbot",
        hostedUrl: "https://course-recommender-chatbot.vercel.app/",
        stackIcons: [
            <FaPython key="python" title="Python" />,
            <TbBrandOpenai key="openai" title="OpenAI / NLP" />,
            <SiScikitlearn key="sklearn" title="Scikit-Learn" />,
        ],
    },
    {
        title: "BitTorrent Client",
        description:
            "A BitTorrent client built from scratch in Python, implementing the P2P protocol for decentralized file sharing.",
        link: "https://github.com/PranavKumar9529desai/BitTorrent-Client",
        stackIcons: [
            <FaPython key="python" title="Python" />,
            <SiCplusplus key="cpp" title="C++ (Protocol Concept)" />,
        ],
    },
    {
        title: "Task Manager CLI",
        description:
            "A powerful, feature-rich todo list manager written in Rust. Manage tasks efficiently from the command line with priority support and due dates.",
        link: "https://github.com/PranavKumar9529desai/Task-Manager-CLI",
        stackIcons: [
            <FaRust key="rust" title="Rust" />,
        ],
    },
    {
        title: "Voice Transcription CLI",
        description:
            "Real-time voice transcription tool with Push-to-Talk, auto-typing, and GPU acceleration using OpenAI's Whisper models.",
        link: "https://github.com/PranavKumar9529desai/Voice-Transcription-CLI",
        stackIcons: [
            <FaPython key="python" title="Python" />,
            <SiOpenai key="openai" title="Faster-Whisper" />,
            <SiNvidia key="nvidia" title="CUDA/Nvidia" />,
        ],
    },
];
