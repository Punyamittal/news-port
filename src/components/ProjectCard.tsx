interface ProjectCardProps {
  image: string;
  title: string;
  company: string;
  link: string;
  linkText?: string;
}

export const ProjectCard = ({ image, title, company, link, linkText = "Read" }: ProjectCardProps) => {
  return (
    <a 
      href={link}
      className="group block bg-card rounded-2xl overflow-hidden border-2 border-foreground shadow-lg transition-all duration-700 hover:shadow-2xl hover:border-[hsl(var(--color-accent))] hover:-translate-y-2"
    >
      <div className="aspect-[3/2] overflow-hidden bg-muted">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
        />
      </div>
      <div className="p-6 space-y-3 transition-all duration-700 group-hover:bg-[hsl(var(--color-background))]">
        <h3 className="text-xl md:text-2xl font-display leading-tight transition-all duration-500 group-hover:text-[hsl(var(--color-accent))]">
          {title}
        </h3>
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground transition-colors duration-500 group-hover:text-[hsl(var(--color-primary))]">
            {company}
          </span>
          <span className="text-sm font-medium transition-all duration-500 group-hover:translate-x-2 group-hover:text-[hsl(var(--color-accent))]">
            {linkText} →
          </span>
        </div>
      </div>
    </a>
  );
};
