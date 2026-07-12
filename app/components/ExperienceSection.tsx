import { experiences } from "../data/experience";

const companyLogos: Record<string, string> = {
  Accenture: "/acc.svg",
  "Astuto.ai": "/astuto.svg",
  Vulncon: "/vulncon.webp",
};

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-12 md:py-20">
      <div className="container">
        <h2 className="text-2xl font-bold mb-2">Experience</h2>

        <div className="flex flex-col border-t border-border">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="border-b border-border py-6 md:py-8 group"
            >
              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
                  <h3 className="text-lg md:text-xl font-medium flex items-center gap-2.5">
                    {companyLogos[exp.company] && (
                      <span className="shrink-0 rounded-md overflow-hidden bg-background-secondary flex items-center justify-center px-3" style={{ height: '32px', minWidth: '60px' }}>
                        <img
                          src={companyLogos[exp.company]}
                          alt={`${exp.company} logo`}
                          className="block max-h-full w-auto object-contain"
                          style={{ maxHeight: '20px', width: 'auto' }}
                        />
                      </span>
                    )}
                    <span>
                      {exp.role}{" "}
                      <span className="text-foreground-secondary font-normal">
                        — {exp.company}
                      </span>
                    </span>
                  </h3>
                  <span className="text-sm text-foreground-secondary whitespace-nowrap">
                    {exp.startDate} — {exp.endDate}
                  </span>
                </div>

                {exp.location && (
                  <p className="text-sm text-foreground-secondary">
                    {exp.location}
                  </p>
                )}

                {exp.description.length > 0 && (
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li
                        key={i}
                        className="text-sm md:text-base text-foreground-secondary leading-relaxed pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-primary"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                {exp.skills.length > 0 && (
                  <div className="flex items-center gap-2 flex-wrap pt-1">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-md bg-background-secondary text-xs text-foreground-secondary"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
