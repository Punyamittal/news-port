export const Stats = () => {
  const stats = [
    { value: "2.2M", label: "Unnamed layers", color: "hsl(var(--color-accent))" },
    { value: "51", label: "Quick fixes (Redesigns)", color: "hsl(var(--color-secondary))" },
    { value: "99", label: "All nighters", color: "hsl(var(--color-highlight))" },
  ];

  return (
    <section className="px-6 md:px-12 py-16 bg-card border-b-2 border-foreground transition-all duration-700 hover:bg-[hsl(var(--color-background))] group">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-3 gap-8 md:gap-16">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center space-y-2 transition-all duration-500 hover:scale-110"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div 
                className="text-4xl md:text-6xl font-display transition-all duration-500 group-hover:scale-110"
                style={{ 
                  color: `var(--foreground)`,
                  ['--tw-text-opacity' as string]: '1'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = stat.color}
                onMouseLeave={(e) => e.currentTarget.style.color = 'hsl(var(--foreground))'}
              >
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-muted-foreground transition-colors duration-500 group-hover:text-[hsl(var(--color-primary))]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
