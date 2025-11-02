export const SlidingImages = ({ id }: { id?: string }) => {
  const images = [
    { id: 1, url: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=600&fit=crop" },
    { id: 2, url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop" },
    { id: 3, url: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=800&h=600&fit=crop" },
    { id: 4, url: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&h=600&fit=crop" },
    { id: 5, url: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=800&h=600&fit=crop" },
    { id: 6, url: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&h=600&fit=crop" },
  ];

  return (
    <section id={id} className="py-12 overflow-hidden transition-all duration-700">
      <div className="relative">
        <div className="flex animate-slide-left hover:pause">
          {/* First set of images */}
          {images.map((image) => (
            <div
              key={`first-${image.id}`}
              className="flex-shrink-0 w-80 h-64 mx-4 group"
            >
              <img
                src={image.url}
                alt={`Design inspiration ${image.id}`}
                className="w-full h-full object-cover rounded-lg border-2 border-foreground grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105 group-hover:border-[hsl(var(--color-accent))] group-hover:shadow-2xl"
              />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {images.map((image) => (
            <div
              key={`second-${image.id}`}
              className="flex-shrink-0 w-80 h-64 mx-4 group"
            >
              <img
                src={image.url}
                alt={`Design inspiration ${image.id}`}
                className="w-full h-full object-cover rounded-lg border-2 border-foreground grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105 group-hover:border-[hsl(var(--color-accent))] group-hover:shadow-2xl"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
