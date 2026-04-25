import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { AboutMoodboard } from "./components/AboutMoodboard";
import { Favorites } from "./components/Favorites";
import { MusicSection } from "./components/MusicSection";
import { Moodboard, FinalSection } from "./components/BottomSections";
import { Footer, FAB } from "./components/Navigation";

function App() {
  return (
    <div className="min-h-screen bg-background selection:bg-pink-300 selection:text-pink-900">
      <Header />
      
      <main className="max-w-[1400px] mx-auto px-4 md:px-margin-page pb-24">
        <Hero />
        <Marquee />
        <AboutMoodboard />
        <Favorites />
        <MusicSection />
        <Moodboard />
        <FinalSection />
      </main>

      <Footer />
      <FAB />
    </div>
  );
}

export default App;
