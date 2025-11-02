import { ProjectCard } from "./ProjectCard";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

export const RecentWork = () => {
  return (
    <section className="px-6 md:px-12 py-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-display mb-12 tracking-tight">
          recent work
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectCard
            image={project1}
            title="Revamping Onboarding to Drive Activation // 6x Increase"
            company="Middleware"
            link="#"
            linkText="Read"
          />
          <ProjectCard
            image={project2}
            title="Designing Allocations: Slashed the time to build reports to 1/10th"
            company="Middleware"
            link="#"
            linkText="Read"
          />
          <ProjectCard
            image={project3}
            title="Redesigned the company website // helped build $1M pipeline"
            company="Middleware"
            link="#"
            linkText="See Website"
          />
          <div className="bg-card rounded-2xl border border-border p-12 flex items-center justify-center">
            <div className="text-center space-y-4">
              <h3 className="text-2xl md:text-3xl font-display">
                Streamlining the critical flows
              </h3>
              <p className="text-muted-foreground">Reduced setup time to 50%</p>
              <p className="text-sm text-muted-foreground font-medium mt-6">Coming Soon</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
