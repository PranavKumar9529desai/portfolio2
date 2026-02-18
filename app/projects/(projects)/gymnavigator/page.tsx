"use client";
import {
    SiNextdotjs,
    SiTailwindcss,
    SiCloudflare,
    SiHono,
    SiTypescript,
    SiShadcnui,
} from "react-icons/si";
import BreadCrums from "@/app/components/BreadCrums";
import Stack from "@/app/components/Stack";
import List from "@/app/components/List";

const technologies = [
    { name: "Next.js", icon: SiNextdotjs },
    { name: "Hono", icon: SiHono },
    { name: "Cloudflare Workers", icon: SiCloudflare },
    { name: "Cloudflare D1", icon: SiCloudflare },
    { name: "TailwindCSS", icon: SiTailwindcss },
    { name: "Shadcn/UI", icon: SiShadcnui },
    { name: "NextAuth v5", icon: SiNextdotjs },
    { name: "TypeScript", icon: SiTypescript },
];

const keyFeatures = [
    "Comprehensive dashboard for gym owners to seamlessly manage trainers, users, and sales teams.",
    "Role-based access control with NextAuth v5 supporting multiple user roles and granular permissions.",
    "Real-time attendance tracking and member management with intuitive UI built on Shadcn/UI.",
    "API layer built with Hono deployed on Cloudflare Workers for edge-native performance.",
    "Cloudflare D1 database for serverless SQL storage with global edge distribution.",
    "Zod-powered form validation ensuring type-safe data handling across the application.",
];

export default function GymNavigatorPage() {
    return (
        <main className="min-h-screen container space-y-4 md:space-y-6 py-4 md:py-6">
            {/* Navigation */}
            <div className="">
                <BreadCrums path={"projects/gymnavigator"} />
            </div>

            {/* Project Header */}
            <div className="space-y-4 md:space-y-6">
                <h1 className="text-xl md:text-3xl font-bold text-foreground">
                    GymNavigator
                </h1>
                <div className="flex flex-col md:flex-row gap-2 md:gap-4 md:items-center">
                    <a
                        href="https://gymnavigator.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary-hover transition-colors text-sm md:text-base break-words font-medium"
                    >
                        gymnavigator.vercel.app
                    </a>
                    {/* Assuming GitHub link is desired as it wasn't there before but user asked to add hosted URL 'also', implying multiple links */}
                </div>
            </div>
            <p className="text-sm md:text-base text-foreground-secondary leading-relaxed">
                GymNavigator is the modern solution for efficient gym management. This
                powerful web application provides a comprehensive dashboard to
                seamlessly manage trainers, users, and sales teams. With recent growth
                including 2 newly onboarded gyms and 150 daily active users concentrated
                in Mumbai.
            </p>

            <div className="overflow-x-auto -mx-4 px-4 md:overflow-visible md:px-0">
                <Stack technologies={technologies} />
            </div>

            {/* Key Features */}
            <div className="text-sm md:text-base">
                <List facts={keyFeatures} />
            </div>

            {/* Key Metrics */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 py-2 md:py-4">
                {[
                    { value: "2", label: "Gyms Onboarded" },
                    { value: "150", label: "Daily Active Users" },
                    { value: "Live", label: "Production Status" },
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
