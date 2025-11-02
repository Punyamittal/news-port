export const CurrentWork = () => {
  const companies = [
    { name: "Middleware", status: "Current Company" },
    { name: "Google", status: "Past Experience" },
    { name: "Apple", status: "Past Experience" },
    { name: "Microsoft", status: "Past Experience" },
    { name: "Meta", status: "Past Experience" },
  ];

  return (
    <section className="px-4 md:px-6 lg:px-12 py-8 md:py-12 border-b-2 border-foreground transition-all duration-700 hover:bg-[hsl(var(--color-background))] group">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8">
          {companies.map((company, index) => (
            <div key={index} className="flex items-center gap-2 sm:gap-3 md:gap-4">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display transition-colors duration-500 group-hover:text-[hsl(var(--color-accent))]">
                {company.name}
              </h2>
              {company.status === "Current Company" && (
                <>
                  <div className="h-6 sm:h-8 md:h-12 w-px bg-border transition-all duration-500 group-hover:bg-[hsl(var(--color-accent))] group-hover:h-12 md:group-hover:h-16" />
                  <div className="text-xs sm:text-sm md:text-base text-muted-foreground transition-colors duration-500 group-hover:text-[hsl(var(--color-primary))]">
                    {company.status}
                  </div>
                </>
              )}
              {index < companies.length - 1 && (
                <div className="hidden sm:block h-6 md:h-8 w-px bg-border mx-1 md:mx-2" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
