import { ScrapbookCard } from "./ui/ScrapbookCard";
import { Sparkles } from "lucide-react";

export const AboutMoodboard = () => {
  const tags = [
    "Looks cute when angry", "Cold Coffee Lover", "Golgappe",
    "Birthday Girl", "Sweet but savage", "Soft heart",
    "Main character behaviour"
  ];

  return (
    <section id="about" className="pt-2 pb-10 md:pt-8 md:pb-20 relative grid grid-cols-1 md:grid-cols-12 gap-8 px-4 overflow-hidden">
      <div className="md:col-span-12 lg:col-span-5">
        <ScrapbookCard tilt="left" hasTape className="p-5 md:p-8 shadow-[8px_8px_0px_0px_#000000] md:shadow-[12px_12px_0px_0px_#000000]">
          <h2 className="font-headline text-4xl md:text-5xl text-primary mb-4 md:mb-6 font-black uppercase italic">About Akshya</h2>
          <p className="text-lg md:text-xl mb-6 md:mb-8 leading-relaxed font-body font-medium">
            Akshya is the perfect blend of sweet and spicy.
            She's the kind of girl who loves her cold coffee and can never say no to a plate of golgappe. Oh, and she looks incredibly cute when she's angry!
          </p>
          <div className="flex flex-wrap gap-2 md:gap-3">
            {tags.map((tag, i) => (
              <span
                key={tag}
                className={`bg-white border-2 border-black px-3 md:px-4 py-1 rounded-full text-[10px] md:text-sm font-bold shadow-[2px_2px_0px_#000] ${i % 2 === 0 ? 'rotate-2' : '-rotate-2'}`}
                style={{ backgroundColor: i % 3 === 0 ? '#ffd9e3' : i % 3 === 1 ? '#fff9c4' : 'white' }}
              >
                {tag}
              </span>
            ))}
          </div>
        </ScrapbookCard>
      </div>

      <div className="md:col-span-12 lg:col-span-7 grid grid-cols-2 gap-3 md:gap-4 relative mt-8 md:mt-0 px-2">
        <img
          className="sticker-border rotate-3 shadow-lg w-full h-48 md:h-80 object-cover"
          src="/images/pic1.jpg"
          alt="Akshya Moodboard"
        />
        <img
          className="sticker-border -rotate-6 shadow-xl w-full h-48 md:h-80 object-cover mt-6 md:mt-8"
          src="/images/pic2.jpg"
          alt="Akshya"
        />
        <div className="absolute -bottom-6 -right-2 md:-bottom-10 md:right-0 z-30">
          <div className="bg-primary text-white p-4 md:p-6 border-4 border-black rotate-12 shadow-[6px_6px_0px_#000000] md:shadow-[8px_8px_0px_#000000] hover:scale-110 transition-transform">
            <Sparkles className="w-6 h-6 md:w-10 md:h-10" />
          </div>
        </div>
      </div>
    </section>
  );
};
