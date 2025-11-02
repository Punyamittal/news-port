import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { CurrentWork } from "@/components/CurrentWork";
import { RecentWork } from "@/components/RecentWork";
import { Stats } from "@/components/Stats";
import { Principles } from "@/components/Principles";
import { SlidingImages } from "@/components/SlidingImages";
import { SlidingText } from "@/components/SlidingText";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <CurrentWork />
        <RecentWork />
        <Stats />
        <Principles />
        <SlidingImages />
        <SlidingText />
      </main>
    </div>
  );
};

export default Index;
