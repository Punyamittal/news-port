export const CurrentWork = () => {
  const companies = [
    { name: "Middleware", status: "Current Company" },
    { name: "Google", status: "Past Experience" },
    { name: "Apple", status: "Past Experience" },
    { name: "Microsoft", status: "Past Experience" },
    { name: "Meta", status: "Past Experience" },
  ];

  return (
    <section className="px-6 md:px-12 py-12 border-b-2 border-foreground transition-all duration-700 hover:bg-[hsl(var(--color-background))] group">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
          {companies.map((company, index) => (
            <div key={index} className="flex items-center gap-4">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-display transition-colors duration-500 group-hover:text-[hsl(var(--color-accent))]">
                {company.name}
              </h2>
              {company.status === "Current Company" && (
                <>
                  <div className="h-8 md:h-12 w-px bg-border transition-all duration-500 group-hover:bg-[hsl(var(--color-accent))] group-hover:h-16" />
                  <div className="text-xs md:text-sm text-muted-foreground transition-colors duration-500 group-hover:text-[hsl(var(--color-primary))]">
                    {company.status}
                  </div>
                </>
              )}
              {index < companies.length - 1 && (
                <div className="hidden md:block h-8 w-px bg-border mx-2" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
