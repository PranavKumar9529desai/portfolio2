import Image from "next/image";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiHono,
  SiTypescript,
  SiShadcnui,
  SiPostgresql,
  SiReactquery,
} from "react-icons/si";
import BreadCrums from "@/app/components/BreadCrums";
import Stack from "@/app/components/Stack";
import List from "@/app/components/List";

const technologies = [
  { name: "Next.js 16", icon: SiNextdotjs },
  { name: "Hono", icon: SiHono },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Drizzle ORM", icon: SiPostgresql },
  { name: "TanStack Query", icon: SiReactquery },
  { name: "Better Auth", icon: SiNextdotjs },
  { name: "Tailwind CSS v4", icon: SiTailwindcss },
  { name: "Shadcn/UI", icon: SiShadcnui },
  { name: "TypeScript", icon: SiTypescript },
];

const keyFeatures = [
  "Role-based dashboards for admin, staff, and customers — manage products, categories, orders, and user accounts.",
  "Full e-commerce experience: product catalog with categories and filters, shopping cart, checkout flow, and order tracking.",
  "Image management via Cloudinary integration, location services with Google Maps, and secure authentication using Better Auth.",
  "Admin panel with granular controls for creating and editing products, managing inventory, and processing orders.",
  "Responsive, modern UI built with shadcn/ui and Tailwind CSS v4, optimized for both desktop and mobile.",
];

const metrics = [
  { value: "Turborepo", label: "Monorepo Architecture" },
  { value: "Drizzle ORM", label: "Type-Safe Database" },
  { value: "Hono", label: "Lightweight Backend" },
];

export default function RahiPage() {
  return (
    <main className="min-h-screen container space-y-4 md:space-y-6 py-4 md:py-6">
      <div className="">
        <BreadCrums path={"projects/rahi"} />
      </div>

      <div className="space-y-4 md:space-y-6">
        <h1 className="text-xl md:text-3xl font-bold text-foreground">
          Rahi
        </h1>
        <div className="flex flex-col md:flex-row gap-2 md:gap-4 md:items-center">
          <a
            href="https://rahi.store"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary-hover transition-colors text-sm md:text-base break-words font-medium"
          >
            rahi.store
          </a>
          <span className="hidden md:block text-foreground-secondary">•</span>
          <a
            href="https://github.com/PranavKumar9529desai/Rahi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground-secondary hover:text-primary transition-colors text-sm md:text-base break-words"
          >
            github.com/PranavKumar9529desai/Rahi
          </a>
        </div>
      </div>

      {/* Screenshot Showcase */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
        <div className="relative rounded-xl overflow-hidden bg-background-secondary aspect-[16/10]">
          <Image
            src="/rahi-home.webp"
            alt="Rahi store homepage"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="relative rounded-xl overflow-hidden bg-background-secondary aspect-[16/10]">
          <Image
            src="/rahi-shop.webp"
            alt="Rahi shop page"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>

      <p className="text-sm md:text-base text-foreground-secondary leading-relaxed">
        Rahi is a full-featured antique jewellery e-commerce platform built with
        a modern Turborepo monorepo architecture. It features role-based
        dashboards for admin, staff, and customers, a complete shopping
        experience with product catalog and cart, order management, and
        real-time tracking. The backend is powered by Hono with Drizzle ORM and
        PostgreSQL, providing a type-safe and performant data layer.
      </p>

      <div className="overflow-x-auto -mx-4 px-4 md:overflow-visible md:px-0">
        <Stack technologies={technologies} />
      </div>

      <div className="text-sm md:text-base">
        <List facts={keyFeatures} />
      </div>

      <div className="space-y-3">
        <h2 className="text-lg md:text-xl font-semibold text-foreground">
          Architecture
        </h2>
        <div className="bg-background-secondary rounded-xl p-4 md:p-6 font-mono text-xs md:text-sm text-foreground-secondary overflow-x-auto">
          <pre>{`├── apps
│   ├── web    # Next.js 16 Frontend (App Router)
│   └── api    # Hono Backend
├── packages
│   ├── auth         # Better Auth (server, client, RBAC)
│   ├── shared       # Zod schemas, shared types, constants
│   ├── db           # Drizzle schema, migrations, client
│   ├── ui           # shadcn components + theme.css
│   └── typescript-config  # Shared tsconfigs
└── turbo.json`}</pre>
        </div>
      </div>

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 py-2 md:py-4">
        {metrics.map((metric, index) => (
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
