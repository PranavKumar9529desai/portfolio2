import React from "react";
import BreadCrumbs from "../components/BreadCrums";
import { Metadata } from "next";
import { otherProjects } from "../data/projects";
import { FiGithub } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Projects - Pranavkumar Desai",
  description: "Projects by Pranavkumar Desai",
};

export default function Projects() {
  return (
    <div className="container py-6 space-y-10">
      <BreadCrumbs path="projects" />

      {/* Other Projects */}
      <section>
        <h2 className="text-xl md:text-2xl font-bold mb-4">Other Projects</h2>
        <div className="flex flex-col border-t border-border">
          {otherProjects.map((project, index) => (
            <div
              key={index}
              className="border-b border-border py-6 md:py-10 group custom-cursor block"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg md:text-xl font-medium text-foreground group-hover:text-primary transition-colors">
                    {/* Link Title to Hosted URL if exists, else generic Link (Github) */}
                    <a href={project.hostedUrl || project.link} target="_blank" rel="noopener noreferrer">
                      {project.title}
                    </a>
                  </h3>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label="GitHub Repo">
                    <FiGithub className="w-5 h-5 text-foreground-secondary hover:text-primary transition-colors flex-shrink-0" />
                  </a>
                </div>

                <p className="text-sm md:text-base text-foreground-secondary">
                  {project.description}
                </p>

                {project.hostedUrl && (
                  <a href={project.hostedUrl} target="_blank" rel="noopener noreferrer" className="text-xs md:text-sm text-primary hover:underline block">
                    {project.hostedUrl}
                  </a>
                )}

                {project.stackIcons && (
                  <div className="flex items-center gap-2 md:gap-3 text-xl md:text-2xl text-foreground-secondary pt-2 flex-wrap">
                    {project.stackIcons}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
