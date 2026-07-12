"use client";
import {
    SiTypescript,
    SiTailwindcss,
    SiShadcnui,
    SiTauri,
    SiVite,
} from "react-icons/si";
import { FaRust, FaReact } from "react-icons/fa";
import BreadCrums from "@/app/components/BreadCrums";
import Stack from "@/app/components/Stack";
import List from "@/app/components/List";

const technologies = [
    { name: "Rust", icon: FaRust },
    { name: "React 19", icon: FaReact },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Tauri", icon: SiTauri },
    { name: "TailwindCSS", icon: SiTailwindcss },
    { name: "Shadcn/UI", icon: SiShadcnui },
    { name: "Vite", icon: SiVite },
];

const keyFeatures = [
    "Full-text search powered by Tantivy with fuzzy matching via Nucleo — search across thousands of notes in milliseconds from the ⌘F or ⌘O palette.",
    "Vault indexing engine with filesystem watching, metadata extraction, and link graph construction — all written in Rust for maximum performance.",
    "Tab system with drag-and-drop reordering, per-pane editor instances (one CodeMirror per visible pane), command palette, and a centralized keyboard shortcut system.",
    "Three-layer architecture: Primitives (packages/ui/), Features (state + IPC), Shell (layout composition) — clean separation of concerns.",
    "Theme system using --sat-* CSS custom properties across surface, text, accent, layout, state, and editor token families.",
    "ADR-driven development — 11 Architectural Decision Records document every major design choice.",
];

const architecture = `├── crates/                    # Rust workspace
│   ├── basalt-parser          # Markdown parsing & metadata
│   ├── basalt-graph           # Link graph construction
│   ├── basalt-search          # Tantivy + Nucleo search
│   ├── basalt-vault           # Vault indexing & watcher
│   ├── basalt-wasm            # WASM bindings
│   └── basalt-types           # Shared types
├── apps/
│   └── tauri/                 # Tauri desktop shell
│       ├── src/               # React frontend
│       │   ├── app-shell/     # Layout composition
│       │   ├── features/      # Editor, search, tabs, vault, settings
│       │   └── routes/        # TanStack Router
│       └── src-tauri/         # Rust backend commands
└── packages/
    └── ui/                    # shadcn primitives`;

export default function BasaltPage() {
    return (
        <main className="min-h-screen container space-y-4 md:space-y-6 py-4 md:py-6">
            {/* Navigation */}
            <div className="">
                <BreadCrums path={"projects/basalt"} />
            </div>

            {/* Project Header */}
            <div className="space-y-4 md:space-y-6">
                <h1 className="text-xl md:text-3xl font-bold text-foreground">
                    Basalt
                </h1>
                <div className="flex flex-col md:flex-row gap-2 md:gap-4 md:items-center">
                    <a
                        href="https://github.com/PranavKumar9529desai/Basalt"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary-hover transition-colors text-sm md:text-base break-words font-medium"
                    >
                        github.com/PranavKumar9529desai/Basalt
                    </a>
                    <span className="hidden md:block text-foreground-secondary">•</span>
                    <span className="text-foreground-secondary text-sm md:text-base">
                        Tauri Desktop App
                    </span>
                </div>
            </div>
            <p className="text-sm md:text-base text-foreground-secondary leading-relaxed">
                Basalt is an Obsidian-class desktop Markdown workspace that pushes the
                boundaries of what a note-taking app can be. Built with Tauri (Rust) on
                the backend and React on the frontend, it targets sub-16ms input latency,
                sub-800ms time-to-interactive, and sub-150ms search across 5,000+ notes.
                The entire heavy-lifting — parsing, search indexing, vault crawling, and
                link graph construction — runs in Rust, while the React frontend stays
                thin and responsive. Every architectural decision is documented in
                ADRs, from the three-layer UI architecture to the native search stack
                (Tantivy + Nucleo).
            </p>

            {/* Screenshot */}
            <div className="relative w-full rounded-xl overflow-hidden bg-background-secondary aspect-video">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src="/basalt.png"
                    alt="Basalt screenshot"
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </div>

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
                    <pre>{architecture}</pre>
                </div>
            </div>

            {/* Key Metrics */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 py-2 md:py-4">
                {[
                    { value: "11", label: "Architectural ADRs" },
                    { value: "6", label: "Rust Crates" },
                    { value: "<150ms", label: "Search on 5k Notes" },
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
