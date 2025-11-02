import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { CurrentWork } from "@/components/CurrentWork";
import { RecentWork } from "@/components/RecentWork";
import { Stats } from "@/components/Stats";
import { Principles } from "@/components/Principles";

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
      </main>
    </div>
  );
};

export default Index;
