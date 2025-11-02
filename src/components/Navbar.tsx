import { Github, Linkedin, Instagram } from "lucide-react";

export const Navbar = () => {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="border-t-2 border-b-2 border-foreground py-2 md:py-3 px-4 md:px-6 lg:px-14">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 md:gap-4">
        <div className="flex items-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 overflow-x-auto scrollbar-hide -mx-4 sm:-mx-0 px-4 sm:px-0">
          <button 
            onClick={() => handleScrollTo("work")} 
            className="text-xs sm:text-sm md:text-base transition-colors duration-300 hover:text-[hsl(var(--color-accent))] cursor-pointer whitespace-nowrap py-2 min-w-[44px] touch-manipulation"
            aria-label="Scroll to Work section"
          >
            Work
          </button>
          <button 
            onClick={() => handleScrollTo("about")} 
            className="text-xs sm:text-sm md:text-base transition-colors duration-300 hover:text-[hsl(var(--color-accent))] cursor-pointer whitespace-nowrap py-2 min-w-[44px] touch-manipulation"
            aria-label="Scroll to About section"
          >
            About Me
          </button>
          <button 
            onClick={() => handleScrollTo("case-studies")} 
            className="text-xs sm:text-sm md:text-base transition-colors duration-300 hover:text-[hsl(var(--color-accent))] cursor-pointer whitespace-nowrap py-2 min-w-[44px] touch-manipulation"
            aria-label="Scroll to Case Studies section"
          >
            Case Studies
          </button>
        </div>
        <div className="flex items-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 flex-shrink-0">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transition-colors duration-300 hover:text-[hsl(var(--color-accent))]"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transition-colors duration-300 hover:text-[hsl(var(--color-accent))]"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </a>
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transition-colors duration-300 hover:text-[hsl(var(--color-accent))]"
            aria-label="Instagram"
          >
            <Instagram className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </a>
        </div>
      </div>
    </nav>
  );
};

