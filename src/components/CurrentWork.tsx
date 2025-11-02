export const CurrentWork = () => {
  return (
    <section className="px-6 md:px-12 py-12 transition-all duration-700 hover:bg-[hsl(var(--color-background))] group">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-3xl md:text-4xl font-display transition-colors duration-500 group-hover:text-[hsl(var(--color-accent))]">
            Middleware
          </h2>
          <div className="h-12 w-px bg-border transition-all duration-500 group-hover:bg-[hsl(var(--color-accent))] group-hover:h-16" />
          <div className="text-sm text-muted-foreground transition-colors duration-500 group-hover:text-[hsl(var(--color-primary))]">
            Current Company
          </div>
        </div>
      </div>
    </section>
  );
};
