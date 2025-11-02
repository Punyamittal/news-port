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
      className="group block bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300"
    >
      <div className="aspect-[3/2] overflow-hidden bg-muted">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6 space-y-3">
        <h3 className="text-xl md:text-2xl font-display leading-tight group-hover:text-accent transition-colors">
          {title}
        </h3>
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">{company}</span>
          <span className="text-sm font-medium group-hover:translate-x-1 transition-transform">
            {linkText} →
          </span>
        </div>
      </div>
    </a>
  );
};
