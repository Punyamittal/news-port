import { useEffect } from "react";
import { ProjectCard } from "./ProjectCard";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import useEmblaCarousel from "embla-carousel-react";

export const RecentWork = ({ id }: { id?: string }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  useEffect(() => {
    if (!emblaApi) return;

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 4000); // Auto-scroll every 4 seconds

    return () => clearInterval(interval);
  }, [emblaApi]);

  const projects = [
    {
      image: project1,
      title: "Revamping Onboarding to Drive Activation // 6x Increase",
      company: "Middleware",
      link: "#",
      linkText: "Read",
    },
    {
      image: project2,
      title: "Designing Allocations: Slashed the time to build reports to 1/10th",
      company: "Middleware",
      link: "#",
      linkText: "Read",
    },
    {
      image: project3,
      title: "Redesigned the company website // helped build $1M pipeline",
      company: "Middleware",
      link: "#",
      linkText: "See Website",
    },
    {
      image: project3,
      title: "Streamlining the critical flows",
      company: "Middleware",
      link: "#",
      linkText: "Coming Soon",
    },
  ];

  return (
    <section id={id} className="px-6 md:px-12 py-16 border-b-2 border-foreground transition-all duration-700 hover:bg-[hsl(var(--color-background))] group">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-display mb-12 tracking-tight transition-colors duration-500 group-hover:text-[hsl(var(--color-accent))]">
          recent work
        </h2>
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex">
            {projects.map((project, index) => (
              <div key={index} className="min-w-0 shrink-0 w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-3">
                <ProjectCard
                  image={project.image}
                  title={project.title}
                  company={project.company}
                  link={project.link}
                  linkText={project.linkText}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
