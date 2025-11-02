import { Linkedin, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-background">
      {/* Top border line */}
      <div className="border-t-2 border-foreground"></div>

      {/* Main footer content */}
      <div className="px-4 md:px-6 lg:px-14 py-8 md:py-12">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 md:gap-8">
          {/* Left side - Text */}
          <div className="flex-1 w-full lg:w-auto">
            <h2 className="font-broadway text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl uppercase tracking-tight">
              what's in mind?
            </h2>
          </div>

          {/* Right side - Social icons */}
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4 w-full lg:w-auto justify-start lg:justify-end">
            <a
              href="mailto:your-email@example.com"
              className="bg-black px-3 sm:px-4 md:px-6 py-2.5 sm:py-3 md:py-4 transition-all duration-300 hover:scale-110 min-h-[44px] min-w-[44px] flex items-center justify-center touch-manipulation"
              aria-label="Email"
            >
              <span className="font-display text-[#FFF8DC] text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl uppercase tracking-tight">
                EMAIL
              </span>
            </a>
            <a
              href="https://linkedin.com/in/punyamittal"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black p-2.5 sm:p-3 md:p-4 transition-all duration-300 hover:scale-110 min-h-[44px] min-w-[44px] flex items-center justify-center touch-manipulation"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-[#FFF8DC]" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black p-2.5 sm:p-3 md:p-4 transition-all duration-300 hover:scale-110 min-h-[44px] min-w-[44px] flex items-center justify-center touch-manipulation"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-[#FFF8DC]" />
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
      <div className="px-4 md:px-6 lg:px-14 py-4 md:py-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 md:gap-4">
          {/* Left side - Colored circles */}
          <div className="flex items-center gap-2 md:gap-3">
            <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-blue-500"></div>
            <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-pink-500"></div>
            <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-black"></div>
          </div>

          {/* Right side - Credit */}
          <div className="text-xs sm:text-sm text-muted-foreground text-center sm:text-left">
            Made by{" "}
            <a
              href="https://linkedin.com/in/punyamittal"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium hover:text-foreground transition-colors duration-300"
            >
              punya mittal
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

