import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { CurrentWork } from "@/components/CurrentWork";
import { RecentWork } from "@/components/RecentWork";
import { Stats } from "@/components/Stats";
import { Principles } from "@/components/Principles";
import { SlidingImages } from "@/components/SlidingImages";
import { SlidingText } from "@/components/SlidingText";
import { Loader } from "@/components/Loader";
import { Footer } from "@/components/Footer";
import { Skeleton } from "@/components/ui/skeleton";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // After loader animation completes (5s), show skeleton for 1s, then show content
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Loader />
      <Header />
      <Navbar />
      <main>
        {isLoading ? (
          <>
            {/* Hero Skeleton */}
            <section className="px-6 md:px-14 py-16 md:py-24 border-b-2 border-foreground">
              <div className="max-w-7xl mx-auto space-y-8">
                <Skeleton className="h-32 w-full" />
                <div className="flex items-start justify-between gap-8">
                  <div className="flex-1 space-y-4">
                    <Skeleton className="h-16 w-3/4" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-5/6" />
                    <Skeleton className="h-4 w-4/5" />
                  </div>
                  <Skeleton className="w-full max-w-md h-96" />
                </div>
              </div>
            </section>
            
            {/* Current Work Skeleton */}
            <section className="px-6 md:px-12 py-12 border-b-2 border-foreground">
              <div className="max-w-7xl mx-auto">
                <Skeleton className="h-12 w-48" />
              </div>
            </section>
            
            {/* Recent Work Skeleton */}
            <section className="px-6 md:px-12 py-16 border-b-2 border-foreground">
              <div className="max-w-7xl mx-auto space-y-6">
                <Skeleton className="h-12 w-64" />
                <div className="flex gap-6">
                  <Skeleton className="w-full md:w-1/2 lg:w-1/3 h-96" />
                  <Skeleton className="w-full md:w-1/2 lg:w-1/3 h-96" />
                  <Skeleton className="w-full md:w-1/2 lg:w-1/3 h-96 hidden lg:block" />
                </div>
              </div>
            </section>
            
            {/* Stats Skeleton */}
            <section className="px-6 md:px-12 py-16 bg-card border-b-2 border-foreground">
              <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-3 gap-8 md:gap-16">
                  <Skeleton className="h-24" />
                  <Skeleton className="h-24" />
                  <Skeleton className="h-24" />
                </div>
              </div>
            </section>
            
            {/* Principles Skeleton */}
            <section className="px-6 md:px-12 py-24 md:py-32 border-b-2 border-foreground">
              <div className="max-w-7xl mx-auto">
                <Skeleton className="h-32 md:h-48 w-full" />
              </div>
            </section>
            
            {/* Sliding Images Skeleton */}
            <section className="py-12 border-b-2 border-foreground">
              <div className="flex gap-4 px-6">
                <Skeleton className="w-80 h-64" />
                <Skeleton className="w-80 h-64" />
                <Skeleton className="w-80 h-64" />
              </div>
            </section>
            
            {/* Sliding Text Skeleton */}
            <section className="py-16 overflow-hidden bg-foreground border-b-2 border-background">
              <div className="space-y-4">
                <Skeleton className="h-16 w-full" />
                <Skeleton className="h-16 w-full" />
              </div>
            </section>
          </>
        ) : (
          <>
            <Hero id="about" />
            <CurrentWork />
            <RecentWork id="work" />
            <Stats />
            <Principles />
            <SlidingImages id="case-studies" />
            <SlidingText />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
