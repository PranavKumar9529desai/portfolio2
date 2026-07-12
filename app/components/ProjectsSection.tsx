import { notableProjects } from "../data/projects";
import { TransitionLink } from "../utils/TransitionLink";

function highlightNumbers(text: string) {
  return {
    __html: text.replace(
      /\d+[K+%]*/g,
      (match) => `<span class="text-primary font-medium">${match}</span>`
    ),
  };
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="container py-12 ">
      <h2 className="text-2xl font-bold mb-2">Notable Work</h2>

      {/* Notable Projects */}
      <div className="flex flex-col border-t border-border">
        {notableProjects.map((project, index) => (
          <TransitionLink
            href={`/projects/${project.slug}`}
            key={index}
            className="border-b border-border py-6 md:py-10 group custom-cursor"
          >
            <div className="space-y-3">
              <h3 className="text-lg md:text-xl font-medium">
                {project.title}
              </h3>

              <p className="text-sm md:text-base text-foreground-secondary">
                {project.description}
              </p>

              <p
                className="text-sm md:text-base text-foreground-secondary"
                dangerouslySetInnerHTML={highlightNumbers(project.impact)}
              />
              <div className="flex items-center gap-2 md:gap-3 text-xl md:text-2xl text-foreground-secondary pt-2 flex-wrap">
                {project.stackIcons}
              </div>
            </div>
          </TransitionLink>
        ))}

        <TransitionLink
          href="/projects"
          className="text-sm md:text-base text-foreground-secondary hover:text-accent-hover pt-8"
        >
          Show More
        </TransitionLink>
      </div>
    </section >
  );
}
