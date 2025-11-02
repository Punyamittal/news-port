import { useState, useEffect } from "react";

export const Principles = () => {
  const principles = [
    { text: "Build Taste", color: "hsl(var(--color-accent))" },
    { text: "iterate", color: "hsl(var(--color-secondary))" },
    { text: "BUILD Value", color: "hsl(var(--color-highlight))" },
    { text: "magic is in the detail", color: "hsl(var(--color-accent))" },
    { text: "Have fun", color: "hsl(var(--color-secondary))" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % principles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [principles.length]);

  return (
    <section 
      className="px-6 md:px-12 py-24 md:py-32 transition-all duration-700 hover:bg-[hsl(var(--color-background))]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="max-w-7xl mx-auto">
        <div className="relative h-32 md:h-48 flex items-center justify-center overflow-hidden">
          {principles.map((principle, index) => (
            <div
              key={index}
              className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ${
                index === currentIndex
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-8 scale-95"
              }`}
            >
              <h2 
                className="text-4xl md:text-7xl lg:text-8xl font-display text-center tracking-tight transition-all duration-700"
                style={{ color: isHovered ? principle.color : 'hsl(var(--foreground))' }}
              >
                {principle.text}
              </h2>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-2 mt-8">
          {principles.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-500 ${
                index === currentIndex ? "w-8 bg-foreground" : "w-2 bg-border"
              } hover:bg-[hsl(var(--color-accent))]`}
              aria-label={`Go to principle ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
