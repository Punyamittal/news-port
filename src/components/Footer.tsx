import { Linkedin, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-background">
      {/* Top border line */}
      <div className="border-t-2 border-foreground"></div>

      {/* Main footer content */}
      <div className="px-6 md:px-14 py-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-8">
          {/* Left side - Text */}
          <div className="flex-1">
            <h2 className="font-broadway text-5xl md:text-6xl lg:text-7xl xl:text-8xl uppercase tracking-tight">
              what's in mind?
            </h2>
          </div>

          {/* Right side - Social icons */}
          <div className="flex items-center gap-4">
            <a
              href="mailto:your-email@example.com"
              className="bg-black px-6 py-4 transition-all duration-300 hover:scale-110"
              aria-label="Email"
            >
              <span className="font-display text-[#FFF8DC] text-xl md:text-2xl uppercase tracking-tight">
                EMAIL
              </span>
            </a>
            <a
              href="https://linkedin.com/in/punyamittal"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black p-4 transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6 md:w-8 md:h-8 text-[#FFF8DC]" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black p-4 transition-all duration-300 hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6 md:w-8 md:h-8 text-[#FFF8DC]" />
            </a>
          </div>
        </div>
      </div>

      {/* Three bottom border lines */}
      <div className="space-y-1">
        <div className="border-t-2 border-foreground"></div>
        <div className="border-t-2 border-foreground"></div>
        <div className="border-t-2 border-foreground"></div>
      </div>

      {/* Bottom section with circles and credit */}
      <div className="px-6 md:px-14 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Left side - Colored circles */}
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 rounded-full bg-blue-500"></div>
            <div className="w-4 h-4 rounded-full bg-pink-500"></div>
            <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
            <div className="w-4 h-4 rounded-full bg-black"></div>
          </div>

          {/* Right side - Credit */}
          <div className="text-sm text-muted-foreground">
            Reported by{" "}
            <a
              href="https://linkedin.com/in/punyamittal"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium hover:text-foreground transition-colors duration-300"
            >
              Punya Mittal
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

