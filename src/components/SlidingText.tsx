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
    "Simplicity is complexity resolved",
    "Good design is obvious",
    "Great design is invisible",
    "Beauty emerges from selection",
    "Clarity trumps cleverness",
    "Content precedes design",
    "Think more, design less",
    "User experience is everything",
    "Iteration leads to innovation",
    "Constraints inspire creativity",
    "Empathy drives great design",
    "Purpose shapes form",
  ];

  return (
    <section className="py-8 md:py-10 lg:py-12 overflow-hidden bg-foreground transition-all duration-700 hover:bg-[hsl(var(--color-primary))] relative">
      {/* Top border line - full width */}
      <div className="absolute top-0 left-0 right-0 border-t-2 border-background"></div>
      {/* Bottom border line - full width */}
      <div className="absolute bottom-0 left-0 right-0 border-b-2 border-background"></div>
      <div className="relative overflow-hidden">
        {/* Continuous scrolling line */}
        <div className="flex animate-slide-right hover:pause">
          {texts.map((text, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 flex items-center group mx-4 sm:mx-6 md:mx-8 lg:mx-12 xl:mx-16"
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-display text-background transition-all duration-700 group-hover:text-[hsl(var(--color-accent))] group-hover:scale-110 whitespace-nowrap">
                {text}
              </h3>
            </div>
          ))}
          {texts.map((text, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 flex items-center group mx-4 sm:mx-6 md:mx-8 lg:mx-12 xl:mx-16"
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-display text-background transition-all duration-700 group-hover:text-[hsl(var(--color-accent))] group-hover:scale-110 whitespace-nowrap">
                {text}
              </h3>
            </div>
          ))}
          {texts.map((text, index) => (
            <div
              key={`third-${index}`}
              className="flex-shrink-0 flex items-center group mx-4 sm:mx-6 md:mx-8 lg:mx-12 xl:mx-16"
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-display text-background transition-all duration-700 group-hover:text-[hsl(var(--color-accent))] group-hover:scale-110 whitespace-nowrap">
                {text}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
