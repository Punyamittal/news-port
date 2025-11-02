export const ReportedBy = () => {
  const reporters = [
    "Sarah Chen",
    "Marcus Rodriguez",
    "Emily Watson",
    "James Thompson",
    "Olivia Martinez",
    "David Kumar",
    "Sophie Anderson",
    "Alex Johnson",
  ];

  // Shuffle array and pick random names
  const shuffled = [...reporters].sort(() => Math.random() - 0.5);
  const selectedReporters = shuffled.slice(0, 4);

  return (
    <section className="px-6 md:px-14 py-6 bg-background border-t-2 border-foreground">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span className="font-medium">Reported by</span>
          <div className="flex items-center gap-4">
            {selectedReporters.map((name, index) => (
              <span key={index} className="font-light">
                {name}
                {index < selectedReporters.length - 1 && ","}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

