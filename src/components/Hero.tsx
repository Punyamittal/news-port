import heroImage from "@/assets/hero-portrait.jpg";

export const Hero = ({ id }: { id?: string }) => {
  return (
    <section id={id} className="px-6 md:px-14 py-16 md:py-24 border-b-2 border-foreground transition-all duration-700 hover:bg-[hsl(var(--color-background))] group">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Big name covering the whole line */}
        <h1 className="font-artdeco text-6xl md:text-8xl lg:text-9xl tracking-tight text-center uppercase bg-black text-[hsl(var(--background))] py-4 px-6 transition-all duration-700">
          Milan Verma
        </h1>
        
        {/* Subtitle and photo section */}
        <div className="flex items-start justify-between gap-8">
          <div className="flex-1 flex flex-col">
            <h2 className="font-artdeco text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tight border-b-2 border-foreground pb-2 mb-4 transition-colors duration-500 group-hover:text-[hsl(var(--color-primary))] uppercase">
              Product Designer
            </h2>
            <div className="space-y-3 text-base md:text-lg text-muted-foreground max-w-lg transition-colors duration-500 group-hover:text-[hsl(var(--color-primary))]">
              <p className="transition-all duration-500 group-hover:translate-x-1">Driven by curiosity. Motivated by impact. Fueled by empathy and powered by data.</p>
              <p className="transition-all duration-500 delay-75 group-hover:translate-x-1">Delighted by well designed products and spaces.</p>
              <p className="transition-all duration-500 delay-150 group-hover:translate-x-1">Running on preworkout and mobbin mostly.</p>
            </div>
            <div className="mt-8 pt-6 border-t-2 border-foreground">
              <h3 className="text-xl md:text-2xl font-display mb-6 uppercase tracking-tight transition-colors duration-500 group-hover:text-[hsl(var(--color-primary))]">
                what people are saying
              </h3>
              <div className="border-2 border-foreground p-4 overflow-hidden relative h-[240px] md:h-[280px]">
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
                      className="border-2 border-foreground p-3 group/testimonial hover:bg-[hsl(var(--color-background))] transition-all duration-500"
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 border-2 border-foreground overflow-hidden">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-full h-full object-cover grayscale group-hover/testimonial:grayscale-0 transition-all duration-500"
                          />
                        </div>
                        <div className="flex-1 overflow-hidden relative h-12 md:h-14">
                          <div className="absolute inset-0 flex flex-col justify-center group-hover/testimonial:-translate-y-full transition-transform duration-500">
                            <span className="text-sm md:text-base font-medium">{testimonial.name}</span>
                            <span className="text-xs md:text-sm text-muted-foreground">{testimonial.jobTitle}</span>
                          </div>
                          <div className="absolute inset-0 flex items-center translate-y-full group-hover/testimonial:translate-y-0 transition-transform duration-500">
                            <p className="text-sm md:text-base text-muted-foreground italic">
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
                      className="border-2 border-foreground p-3 group/testimonial hover:bg-[hsl(var(--color-background))] transition-all duration-500"
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 border-2 border-foreground overflow-hidden">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-full h-full object-cover grayscale group-hover/testimonial:grayscale-0 transition-all duration-500"
                          />
                        </div>
                        <div className="flex-1 overflow-hidden relative h-12 md:h-14">
                          <div className="absolute inset-0 flex flex-col justify-center group-hover/testimonial:-translate-y-full transition-transform duration-500">
                            <span className="text-sm md:text-base font-medium">{testimonial.name}</span>
                            <span className="text-xs md:text-sm text-muted-foreground">{testimonial.jobTitle}</span>
                          </div>
                          <div className="absolute inset-0 flex items-center translate-y-full group-hover/testimonial:translate-y-0 transition-transform duration-500">
                            <p className="text-sm md:text-base text-muted-foreground italic">
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
          <div className="relative w-full max-w-md flex-shrink-0 border-2 border-foreground p-2 mt-auto self-end">
            <div className="border-2 border-dotted border-foreground">
              <img 
                src={heroImage}
                alt="Milan Verma portrait" 
                className="w-full h-auto grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
