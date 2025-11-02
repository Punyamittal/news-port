import { useState, useEffect } from "react";
import oipImage from "@/OIP.webp";

export const Header = () => {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const date = new Date();
    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'long', 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric' 
    };
    setCurrentDate(date.toLocaleDateString('en-US', options));
  }, []);

  return (
    <header className="border-b-2 border-foreground py-4 px-6 md:px-14 transition-all duration-700 hover:bg-[hsl(var(--color-background))] group relative">
      <img 
        src={oipImage} 
        alt="Logo" 
        className="absolute left-6 md:left-14 top-1/2 -translate-y-1/2 w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain grayscale transition-all duration-500 hover:grayscale-0"
      />
      <div className="max-w-7xl mx-auto flex items-center justify-center">
        <a href="/" className="font-old-english text-5xl md:text-6xl lg:text-7xl tracking-tight transition-colors duration-500 group-hover:text-[hsl(var(--color-accent))]">
          My Times
        </a>
        <time className="absolute right-6 md:right-12 text-sm md:text-base text-muted-foreground font-light transition-colors duration-500 group-hover:text-[hsl(var(--color-primary))]">
          {currentDate}
        </time>
      </div>
    </header>
  );
};
