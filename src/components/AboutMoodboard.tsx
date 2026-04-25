import { ScrapbookCard } from "./ui/ScrapbookCard";
import { Sparkles } from "lucide-react";

export const AboutMoodboard = () => {
  const tags = [
    "Sweet but savage", "Corporate cutie", "Chai paglu", 
    "Spicy-food certified", "Tulip-coded", "Soft heart, boss mode", 
    "Main character behaviour"
  ];

  return (
    <section id="about" className="pt-2 pb-10 md:pt-8 md:pb-20 relative grid grid-cols-1 md:grid-cols-12 gap-8 px-4 overflow-hidden">
      <div className="md:col-span-12 lg:col-span-5">
        <ScrapbookCard tilt="left" hasTape className="p-5 md:p-8 shadow-[8px_8px_0px_0px_#000000] md:shadow-[12px_12px_0px_0px_#000000]">
          <h2 className="font-headline text-4xl md:text-5xl text-primary mb-4 md:mb-6 font-black uppercase italic">About Her</h2>
          <p className="text-lg md:text-xl mb-6 md:mb-8 leading-relaxed font-body font-medium">
            Mahak is the perfect blend of high-fashion corporate structure and chaotic desi energy. 
            She's the kind of girl who leads the meeting then heads straight for spicy pani puri.
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
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBC1RGWFEsJckS4EocFUAVOpbTv3OnwVukC4Sv_35hTC2iZiVGp8oKSSadHUK9JTWnj35iuaQlnWCJX-toJLRjZlD1m61IkDcXeQBqcQINnIx3tWEs1gB6Q8I7fOLY9Sa-HW9T_DgPKSVY05i-2qz9Bex3aDpDSQR-M6AfEqzL72P2cDPp9k3EhoE7X_AF0OjK-gGZCYfAjM5mCEni_itR5A_mfCZIxKSodpmJaG9EhqK9C8wOw-b8PChn4h4XCBua1TFk7ysc4yxU" 
          alt="Moodboard" 
        />
        <img 
          className="sticker-border -rotate-6 shadow-xl w-full h-48 md:h-80 object-cover mt-6 md:mt-8" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAFBMcmgTebIh-4f-loNpVZvBxfanY682o5Ii6BQRAEs0iL5tHaWs_9xKxHi09WKnosVi8vGXAlD4dBHomuwYDsrWxQjeuUCxtt2uE1vHfbHk4RZ2ZskPq_Cxj4vvE60awmrb78YQGASmNjlTENW3MQNau3QY4uPsbLP3rSUWNJADddlMozXE6SdZjm4ANBp9tkOcmsK9AG0l_swfYbo0lJ2D_5jsWYuXilxPuvvFPwQ4hD4KweuEIuwCDXXlAv3wqfUwse0RXQus" 
          alt="Office space" 
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
