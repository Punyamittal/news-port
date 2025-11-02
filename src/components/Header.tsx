import { useState, useEffect } from "react";

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
    <header className="border-b-2 border-foreground py-4 px-6 md:px-12 transition-all duration-700 hover:bg-[hsl(var(--color-background))] group">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-foreground rounded-sm transition-all duration-500 group-hover:bg-[hsl(var(--color-accent))] group-hover:rotate-12" />
          <a href="/" className="font-display text-xl md:text-2xl tracking-tight transition-colors duration-500 group-hover:text-[hsl(var(--color-accent))]">
            Design Daily
          </a>
        </div>
        <time className="text-sm md:text-base text-muted-foreground font-light transition-colors duration-500 group-hover:text-[hsl(var(--color-primary))]">
          {currentDate}
        </time>
      </div>
    </header>
  );
};
