import React from 'react'
import BreadCrumbs from "../components/BreadCrums";
import { Metadata } from "next";
import { notableProjects, otherProjects } from "../data/projects";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Projects - Pranavkumar Desai",
  description: "Projects by Pranavkumar Desai",
};

export default function Projects() {
  return (
    <div className="container py-6 space-y-16">
      <BreadCrumbs path="projects" />

      {/* Notable Projects */}
      <section>
        <h2 className="text-xl md:text-2xl font-bold mb-6">Notable Work</h2>
        <div className="grid grid-cols-1 gap-8">
          {notableProjects.map((project) => (
            <div
              key={project.slug}
              className="border border-border rounded-xl overflow-hidden bg-background-secondary/50"
            >
              <div className="p-5 md:p-6 flex flex-col space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-lg md:text-xl font-semibold text-foreground">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="hover:text-primary transition-colors"
                      >
                        {project.title}
                      </Link>
                    </h3>
                    <div className="flex gap-2 shrink-0">
                      {project.hostedUrl && (
                        <a
                          href={project.hostedUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-foreground-secondary hover:text-primary transition-colors"
                          aria-label="Live site"
                        >
                          <FiExternalLink className="w-4 h-4" />
                        </a>
                      )}
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground-secondary hover:text-primary transition-colors"
                        aria-label="GitHub Repo"
                      >
                        <FiGithub className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  <p className="text-sm md:text-base text-foreground-secondary leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-1.5">
                    {project.features.map((feature, i) => (
                      <li
                        key={i}
                        className="text-xs md:text-sm text-foreground-secondary pl-4 relative before:content-['▹'] before:absolute before:left-0 before:text-primary"
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Impact */}
                  <p className="text-xs md:text-sm text-primary font-medium">
                    {project.impact}
                  </p>
                </div>

                {/* Stack Icons */}
                <div className="flex items-center gap-2 md:gap-3 text-lg md:text-xl text-foreground-secondary flex-wrap">
                  {project.stackIcons}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Other Projects */}
      <section>
        <h2 className="text-xl md:text-2xl font-bold mb-4">Other Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {otherProjects.map((project, index) => (
            <div
              key={index}
              className="border border-border rounded-xl p-5 bg-background-secondary/50 flex flex-col justify-between space-y-3 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-base md:text-lg font-medium text-foreground">
                    {project.title}
                  </h3>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Repo"
                  >
                    <FiGithub className="w-4 h-4 text-foreground-secondary hover:text-primary transition-colors" />
                  </a>
                </div>

                <p className="text-sm text-foreground-secondary leading-relaxed">
                  {project.description}
                </p>

                {project.hostedUrl && (
                  <a
                    href={project.hostedUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-primary hover:underline block truncate"
                  >
                    {project.hostedUrl}
                  </a>
                )}
              </div>

              {project.stackIcons && (
                <div className="flex items-center gap-2 text-lg text-foreground-secondary flex-wrap pt-2 border-t border-border">
                  {project.stackIcons}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
