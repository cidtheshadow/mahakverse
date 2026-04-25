import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export const Moodboard = () => {
  return (
    <section id="archive" className="py-12 md:py-20 relative min-h-[600px] md:min-h-[700px] overflow-hidden px-4">
      <h2 className="font-headline text-[10vw] md:text-8xl text-center mb-12 md:mb-20 font-black uppercase leading-[0.9] px-4">
        MAHAK MOODBOARD
      </h2>
      
      {/* Floating Elements - Optimized for Mobile */}
      <motion.div 
        animate={{ y: [0, -10, 0], rotate: [6, 8, 6] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-[15%] left-[5%] bg-pink-100 border-2 border-black px-3 md:px-6 py-1 md:py-2 font-black text-lg md:text-3xl shadow-md z-10"
      >
        tulips
      </motion.div>
      <motion.div 
        animate={{ y: [0, 15, 0], rotate: [-3, -5, -3] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-[35%] right-[5%] bg-white border-4 border-primary px-4 md:px-8 py-2 md:py-3 font-black text-2xl md:text-5xl text-primary shadow-xl z-10"
      >
        chai
      </motion.div>
      <motion.div 
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute bottom-[25%] left-[10%] bg-black text-white px-3 md:px-6 py-1 md:py-2 rotate-12 font-black text-sm md:text-2xl z-10"
      >
        boss girl aura
      </motion.div>
      <motion.div className="absolute top-[5%] right-[10%] lg:right-[25%] bg-yellow-200 border-2 border-black px-3 py-0.5 md:py-1 -rotate-6 font-headline font-bold text-sm md:text-xl italic shadow-sm z-10">
        sweet side
      </motion.div>
      <motion.div className="absolute bottom-[35%] right-[5%] lg:right-[20%] bg-secondary-container text-on-secondary-container px-3 md:px-6 py-1 md:py-2 rotate-2 font-black text-sm md:text-3xl z-10 shadow-lg">
        corporate but cute
      </motion.div>
      <motion.div className="absolute top-[55%] left-[5%] lg:left-[30%] bg-[#fefcff] border-2 border-black px-4 md:px-10 py-2 md:py-4 -rotate-12 font-black text-lg md:text-4xl underline decoration-pink-500 z-10 shadow-2xl">
        chaos but pretty
      </motion.div>

      {/* Central Collage - Responsive Sizing */}
      <div className="mx-auto max-w-2xl relative mt-16 md:mt-20 px-4">
        <motion.img 
          initial={{ rotate: 0 }}
          whileHover={{ rotate: 2 }}
          className="w-full sticker-border rotate-2 shadow-2xl" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAC7aWV0K7L7mpYyuuTiZlbq7b-xtBcIQ-_4IzyNHwtcj46tbOgixdlVYcFfV-VfAPETnNzqAxGlQsMz0AKOiLzBxVUI9BNZPIoyTLaVBMmCwLBU-ighp7HSBFNt9ylhPW8ygWFktmCpGs-jANBK1sSvC9R5vOudCtvcXjSSc8JH6axjIfTPgzJfQF4QDkIXJiuVY5C0lTj1lbh4vO88mha9_Bix4MLFDSkU6j5qosJhzG6cqGJKX6HyhpYhlYCFOoMcc9vDu713uM" 
          alt="Aesthetic layout" 
        />
        <motion.div 
          whileHover={{ scale: 1.2, rotate: -12 }}
          className="absolute -top-6 -left-6 md:-top-10 md:-left-10 w-24 h-24 md:w-40 md:h-40 bg-primary rotate-12 flex items-center justify-center border-4 border-black shadow-2xl hover:bg-pink-600 transition-colors"
        >
          <span className="text-white font-black text-4xl md:text-7xl font-headline">M</span>
        </motion.div>
      </div>
    </section>
  );
};

export const FinalSection = () => {
  return (
    <section className="py-20 md:py-32 text-center px-4 overflow-hidden">
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        className="max-w-3xl mx-auto scrapbook-card border-4 md:border-8 border-dotted border-primary p-6 md:p-16 -rotate-2 shadow-[20px_20px_0px_rgba(0,0,0,0.1)] relative"
      >
        <div className="absolute -top-8 md:-top-12 left-1/2 -translate-x-1/2 bg-white p-2 md:p-4 border-4 border-black rounded-full rotate-12 shadow-md">
          <Heart className="w-8 h-8 md:w-12 md:h-12 text-pink-500 fill-current" />
        </div>
        <p className="font-headline text-2xl md:text-5xl font-black leading-tight text-on-background italic">
          "This page is just proof that your vibe is way too cool to fit inside normal words."
        </p>
        <div className="mt-10 md:mt-16 flex flex-wrap justify-center gap-4 md:gap-6">
          <span className="bg-yellow-300 px-4 md:px-6 py-1 md:py-2 border-2 border-black rotate-6 font-black text-lg md:text-2xl shadow-sm">XOXO</span>
          <span className="bg-pink-400 text-white px-4 md:px-6 py-1 md:py-2 border-2 border-black -rotate-3 font-black text-lg md:text-2xl shadow-sm">Mahakverse Team</span>
        </div>
      </motion.div>
    </section>
  );
};
