export const Stats = () => {
  const stats = [
    { value: "2.2M", label: "Unnamed layers" },
    { value: "51", label: "Quick fixes (Redesigns)" },
    { value: "99", label: "All nighters" },
  ];

  return (
    <section className="px-6 md:px-12 py-16 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-3 gap-8 md:gap-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center space-y-2">
              <div className="text-4xl md:text-6xl font-display">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
