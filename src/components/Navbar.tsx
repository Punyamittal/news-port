import { Github, Linkedin, Instagram } from "lucide-react";

export const Navbar = () => {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="border-t-2 border-b-2 border-foreground py-3 px-6 md:px-14">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-6 md:gap-8">
          <button 
            onClick={() => handleScrollTo("work")} 
            className="text-sm md:text-base transition-colors duration-300 hover:text-[hsl(var(--color-accent))] cursor-pointer"
          >
            Work
          </button>
          <button 
            onClick={() => handleScrollTo("about")} 
            className="text-sm md:text-base transition-colors duration-300 hover:text-[hsl(var(--color-accent))] cursor-pointer"
          >
            About Me
          </button>
          <button 
            onClick={() => handleScrollTo("case-studies")} 
            className="text-sm md:text-base transition-colors duration-300 hover:text-[hsl(var(--color-accent))] cursor-pointer"
          >
            Case Studies
          </button>
        </div>
        <div className="flex items-center gap-4 md:gap-6">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transition-colors duration-300 hover:text-[hsl(var(--color-accent))]"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5 md:w-6 md:h-6" />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transition-colors duration-300 hover:text-[hsl(var(--color-accent))]"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5 md:w-6 md:h-6" />
          </a>
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transition-colors duration-300 hover:text-[hsl(var(--color-accent))]"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5 md:w-6 md:h-6" />
          </a>
        </div>
      </div>
    </nav>
  );
};

