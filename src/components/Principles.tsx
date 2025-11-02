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
      className="px-4 md:px-6 lg:px-12 py-16 sm:py-20 md:py-24 lg:py-32 transition-all duration-700 hover:bg-[hsl(var(--color-background))]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="max-w-7xl mx-auto">
        <div className="relative h-24 sm:h-28 md:h-32 lg:h-40 xl:h-48 flex items-center justify-center overflow-hidden px-4">
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
                className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-display text-center tracking-tight transition-all duration-700"
                style={{ color: isHovered ? principle.color : 'hsl(var(--foreground))' }}
              >
                {principle.text}
              </h2>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-2 mt-6 md:mt-8">
          {principles.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-1.5 sm:h-2 rounded-full transition-all duration-500 ${
                index === currentIndex ? "w-6 sm:w-8 bg-foreground" : "w-1.5 sm:w-2 bg-border"
              } hover:bg-[hsl(var(--color-accent))]`}
              aria-label={`Go to principle ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
