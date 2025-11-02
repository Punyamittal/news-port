import heroImage from "@/assets/hero-portrait.jpg";

export const Hero = () => {
  return (
    <section className="px-6 md:px-12 py-16 md:py-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-tight">
            Milan Verma
          </h1>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-accent rounded-full" />
            <h2 className="text-xl md:text-2xl font-medium">Product Designer</h2>
          </div>
          <div className="space-y-3 text-base md:text-lg text-muted-foreground max-w-lg">
            <p>Driven by curiosity. Motivated by impact. Fueled by empathy and powered by data.</p>
            <p>Delighted by well designed products and spaces.</p>
            <p>Running on preworkout and mobbin mostly.</p>
          </div>
        </div>
        <div className="relative">
          <img 
            src={heroImage}
            alt="Milan Verma portrait" 
            className="w-full h-auto rounded-2xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};
