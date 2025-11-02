import heroImage from "@/assets/hero-portrait.jpg";

export const Hero = ({ id }: { id?: string }) => {
  return (
    <section id={id} className="px-4 md:px-6 lg:px-14 py-12 md:py-16 lg:py-24 border-b-2 border-foreground transition-all duration-700 hover:bg-[hsl(var(--color-background))] group">
      <div className="max-w-7xl mx-auto space-y-6 md:space-y-8">
        {/* Big name covering the whole line */}
        <h1 className="font-artdeco text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl tracking-tight text-center uppercase bg-black text-[hsl(var(--background))] py-3 md:py-4 px-4 md:px-6 transition-all duration-700">
          Milan Verma
        </h1>
        
        {/* Subtitle and photo section */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-6 md:gap-8">
          <div className="flex-1 flex flex-col w-full lg:w-auto">
            <h2 className="font-artdeco text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl tracking-tight border-b-2 border-foreground pb-2 mb-4 transition-colors duration-500 group-hover:text-[hsl(var(--color-primary))] uppercase">
              Product Designer
            </h2>
            <div className="space-y-3 text-sm sm:text-base md:text-lg text-muted-foreground max-w-lg transition-colors duration-500 group-hover:text-[hsl(var(--color-primary))]">
              <p className="transition-all duration-500 group-hover:translate-x-1">Driven by curiosity. Motivated by impact. Fueled by empathy and powered by data.</p>
              <p className="transition-all duration-500 delay-75 group-hover:translate-x-1">Delighted by well designed products and spaces.</p>
              <p className="transition-all duration-500 delay-150 group-hover:translate-x-1">Running on preworkout and mobbin mostly.</p>
            </div>
            <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t-2 border-foreground">
              <h3 className="text-lg sm:text-xl md:text-2xl font-display mb-4 md:mb-6 uppercase tracking-tight transition-colors duration-500 group-hover:text-[hsl(var(--color-primary))]">
                what people are saying
              </h3>
              <div className="border-2 border-foreground p-3 md:p-4 overflow-hidden relative h-[200px] sm:h-[220px] md:h-[240px] lg:h-[280px]">
                <div className="animate-scroll-up space-y-3">
                  {[
                    {
                      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
                      name: "Sarah Chen",
                      jobTitle: "Product Manager",
                      quote: "Milan has an exceptional eye for detail and brings innovative solutions to complex design challenges."
                    },
                    {
                      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
                      name: "Marcus Rodriguez",
                      jobTitle: "Engineering Lead",
                      quote: "Working with Milan transformed our product. Their design thinking process is unmatched."
                    },
                    {
                      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
                      name: "Emily Watson",
                      jobTitle: "CEO",
                      quote: "The best designer I've collaborated with. They combine aesthetics with functionality perfectly."
                    },
                    {
                      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
                      name: "David Kumar",
                      jobTitle: "Design Director",
                      quote: "Milan's attention to user experience is remarkable. Every design decision is intentional and well-thought-out."
                    },
                    {
                      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop",
                      name: "Sophie Anderson",
                      jobTitle: "Founder",
                      quote: "The most innovative designer we've worked with. Milan consistently exceeds expectations."
                    },
                  ].map((testimonial, index) => (
                    <div
                      key={index}
                      className="border-2 border-foreground p-2 sm:p-3 group/testimonial hover:bg-[hsl(var(--color-background))] transition-all duration-500"
                    >
                      <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                        <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 border-2 border-foreground overflow-hidden">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-full h-full object-cover grayscale group-hover/testimonial:grayscale-0 transition-all duration-500"
                          />
                        </div>
                        <div className="flex-1 overflow-hidden relative h-12 md:h-14 min-w-0">
                          <div className="absolute inset-0 flex flex-col justify-center group-hover/testimonial:-translate-y-full transition-transform duration-500">
                            <span className="text-xs sm:text-sm md:text-base font-medium truncate">{testimonial.name}</span>
                            <span className="text-xs md:text-sm text-muted-foreground truncate">{testimonial.jobTitle}</span>
                          </div>
                          <div className="absolute inset-0 flex items-center translate-y-full group-hover/testimonial:translate-y-0 transition-transform duration-500 px-1">
                            <p className="text-xs sm:text-sm md:text-base text-muted-foreground italic line-clamp-2">
                              "{testimonial.quote}"
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  {/* Duplicate for seamless loop */}
                  {[
                    {
                      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
                      name: "Sarah Chen",
                      jobTitle: "Product Manager",
                      quote: "Milan has an exceptional eye for detail and brings innovative solutions to complex design challenges."
                    },
                    {
                      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
                      name: "Marcus Rodriguez",
                      jobTitle: "Engineering Lead",
                      quote: "Working with Milan transformed our product. Their design thinking process is unmatched."
                    },
                    {
                      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
                      name: "Emily Watson",
                      jobTitle: "CEO",
                      quote: "The best designer I've collaborated with. They combine aesthetics with functionality perfectly."
                    },
                    {
                      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
                      name: "David Kumar",
                      jobTitle: "Design Director",
                      quote: "Milan's attention to user experience is remarkable. Every design decision is intentional and well-thought-out."
                    },
                    {
                      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop",
                      name: "Sophie Anderson",
                      jobTitle: "Founder",
                      quote: "The most innovative designer we've worked with. Milan consistently exceeds expectations."
                    },
                  ].map((testimonial, index) => (
                    <div
                      key={`dup-${index}`}
                      className="border-2 border-foreground p-2 sm:p-3 group/testimonial hover:bg-[hsl(var(--color-background))] transition-all duration-500"
                    >
                      <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                        <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 border-2 border-foreground overflow-hidden">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-full h-full object-cover grayscale group-hover/testimonial:grayscale-0 transition-all duration-500"
                          />
                        </div>
                        <div className="flex-1 overflow-hidden relative h-12 md:h-14 min-w-0">
                          <div className="absolute inset-0 flex flex-col justify-center group-hover/testimonial:-translate-y-full transition-transform duration-500">
                            <span className="text-xs sm:text-sm md:text-base font-medium truncate">{testimonial.name}</span>
                            <span className="text-xs md:text-sm text-muted-foreground truncate">{testimonial.jobTitle}</span>
                          </div>
                          <div className="absolute inset-0 flex items-center translate-y-full group-hover/testimonial:translate-y-0 transition-transform duration-500 px-1">
                            <p className="text-xs sm:text-sm md:text-base text-muted-foreground italic line-clamp-2">
                              "{testimonial.quote}"
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-full lg:w-auto lg:max-w-md flex-shrink-0 border-2 border-foreground p-2 lg:mt-auto lg:self-end mx-auto lg:mx-0">
            <div className="border-2 border-dotted border-foreground">
              <img 
                src={heroImage}
                alt="Milan Verma portrait" 
                className="w-full h-auto max-w-sm lg:max-w-none mx-auto grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
