export interface Experience {
  role: string;
  company: string;
  type: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
  skills: string[];
}

export const experiences: Experience[] = [
  {
    role: "Software Engineer",
    company: "Accenture",
    type: "Full-time",
    location: "",
    startDate: "May 2026",
    endDate: "Present",
    description: [
      "Developing and maintaining enterprise backend services using Java and Spring Boot, building scalable RESTful APIs and microservices.",
      "Collaborating with cross-functional teams to deliver high-quality software solutions for client requirements.",
    ],
    skills: ["Java", "Spring Boot", "Microservices", "REST APIs"],
  },
  {
    role: "Full Stack Engineer",
    company: "Astuto.ai",
    type: "Internship",
    location: "Bangalore HSR — On-site",
    startDate: "Mar 2026",
    endDate: "May 2026",
    description: [
      "Worked on building and maintaining backend APIs using FastAPI, along with cloud infrastructure on AWS.",
      "Developed and optimized frontend features using Next.js.",
    ],
    skills: ["FastAPI", "AWS", "Next.js"],
  },
  {
    role: "Frontend Developer",
    company: "Vulncon",
    type: "Internship",
    location: "",
    startDate: "Jan 2025",
    endDate: "Jul 2025",
    description: [
      "Built pixel-perfect, responsive web interfaces from Figma designs, collaborating closely with design to maintain visual accuracy across breakpoints and devices.",
      "Led the migration of a legacy vanilla CSS codebase to Tailwind CSS, reducing style duplication and streamlining the frontend development workflow.",
    ],
    skills: ["Front-End Development", "Next.js", "Tailwind CSS"],
  },
];
