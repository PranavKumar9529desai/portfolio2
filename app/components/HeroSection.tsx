import Image from "next/image";
import pfp from "@/public/pranav.png";
import List from "./List";
import Socials from "./Socials";
const facts = [
  "Love exploring new stacks — always picking up the latest frameworks and tools.",
  "Die-hard Linux user — tried Arch, OmarchY, CachyOS, and almost every distro out there.",
  "Kabaddi player — there's nothing like a good raid on the mat.",
  "Currently building Cropia, TweetBatch, and GymNavigator.",
];

export default function HeroSection() {
  return (
    <section className="mt-8 md:mt-16 pt-12 md:pt-20 flex items-center">
      <div className="container">
        <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-16">
          <div className="w-full md:w-4/6">
            <div className="space-y-4">
              <h1 className="text-2xl md:text-3xl font-bold text-foreground text-center md:text-left">
                Hello! I&apos;m Pranavkumar{" "}
                <span className="inline-block animate-wave">👋</span>
              </h1>
              <p className="text-base md:text-lg text-foreground-secondary leading-relaxed text-center md:text-left">
                4th year Computer Science student at Lovely Professional
                University. Building AI-powered platforms and full-stack
                products — from crop health detection to tweet scheduling
                and gym management.
              </p>
            </div>

            <List facts={facts} />

            <div className="flex gap-6 pt-8 justify-center md:justify-start">
              <a
                href="/projects"
                className="text-primary hover:text-primary-hover transition-colors"
              >
                Projects
              </a>
              <a
                href="/resume"
                className="text-primary hover:text-primary-hover transition-colors"
              >
                Resume
              </a>
            </div>

            {/* <Socials className="" /> */}
          </div>

          <div className="flex flex-col items-center  relative  md:w-2/6  h-full mb-6">
            <div className="relative w-40 h-40 md:w-64 md:h-64 rounded-full overflow-hidden ring-2 ring-accent">
              <Image
                src={pfp}
                alt="Profile picture"
                className="object-cover hover:scale-105 transition-transform duration-300"
                fill
                sizes="(max-width: 768px) 192px, 256px"
                priority
              />
            </div>
            <div className="pt-6 mx-auto">
              <Socials />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
