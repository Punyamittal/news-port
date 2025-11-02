export const SlidingText = () => {
  const texts = [
    "Typography matters",
    "White space is crucial",
    "Contrast creates hierarchy",
    "Consistency builds trust",
    "Details make perfection",
    "Less is more",
    "Form follows function",
    "Design is thinking",
  ];

  return (
    <section className="py-16 overflow-hidden bg-foreground transition-all duration-700 hover:bg-[hsl(var(--color-primary))]">
      <div className="relative">
        {/* First row - sliding right */}
        <div className="flex animate-slide-right mb-8 hover:pause">
          {texts.map((text, index) => (
            <div
              key={`right-first-${index}`}
              className="flex-shrink-0 mx-8 group"
            >
              <h3 className="text-4xl md:text-6xl font-display text-background transition-all duration-700 group-hover:text-[hsl(var(--color-accent))] group-hover:scale-110 whitespace-nowrap">
                {text}
              </h3>
            </div>
          ))}
          {texts.map((text, index) => (
            <div
              key={`right-second-${index}`}
              className="flex-shrink-0 mx-8 group"
            >
              <h3 className="text-4xl md:text-6xl font-display text-background transition-all duration-700 group-hover:text-[hsl(var(--color-accent))] group-hover:scale-110 whitespace-nowrap">
                {text}
              </h3>
            </div>
          ))}
        </div>

        {/* Second row - sliding left */}
        <div className="flex animate-slide-left hover:pause">
          {texts.reverse().map((text, index) => (
            <div
              key={`left-first-${index}`}
              className="flex-shrink-0 mx-8 group"
            >
              <h3 className="text-4xl md:text-6xl font-display text-background transition-all duration-700 group-hover:text-[hsl(var(--color-secondary))] group-hover:scale-110 whitespace-nowrap">
                {text}
              </h3>
            </div>
          ))}
          {texts.map((text, index) => (
            <div
              key={`left-second-${index}`}
              className="flex-shrink-0 mx-8 group"
            >
              <h3 className="text-4xl md:text-6xl font-display text-background transition-all duration-700 group-hover:text-[hsl(var(--color-secondary))] group-hover:scale-110 whitespace-nowrap">
                {text}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
