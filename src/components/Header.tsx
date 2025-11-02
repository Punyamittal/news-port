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
    <header className="border-b-2 border-foreground py-3 md:py-4 px-4 md:px-6 lg:px-14 transition-all duration-700 hover:bg-[hsl(var(--color-background))] group relative">
      <img 
        src={oipImage} 
        alt="Logo" 
        className="absolute left-4 md:left-6 lg:left-14 top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 object-contain grayscale transition-all duration-500 hover:grayscale-0 z-10"
      />
      <div className="max-w-7xl mx-auto flex items-center justify-center relative">
        <a href="/" className="font-old-english text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tight transition-colors duration-500 group-hover:text-[hsl(var(--color-accent))] pl-10 sm:pl-12 md:pl-0 text-center">
          My Times
        </a>
        <time className="absolute right-4 md:right-6 lg:right-12 text-xs sm:text-sm md:text-base text-muted-foreground font-light transition-colors duration-500 group-hover:text-[hsl(var(--color-primary))] hidden sm:block whitespace-nowrap">
          {currentDate}
        </time>
      </div>
    </header>
  );
};
