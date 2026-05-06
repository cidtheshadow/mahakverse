import { motion } from "framer-motion";
import { Sticker } from "./ui/Sticker";
import { Zap } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative pt-40 md:pt-48 pb-32 flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Decorative Stickers */}
      <Sticker
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDexNo359hkMZdqyAl-yWMtFLGWJvM8creWqeU1pThQoabH8t9ueTrT4mucwtfhQF6ozTZIdzetynu5sldQaPXvgkrNesUZ2QOw7MMxY6o53OINL99LRRDpJ730irKCDaZKBEhDnsH4a6AmXTNBRhX0rzZGRXQi6w5IYdFzh_wcU-lRc30CxhqJod4vrqd9g_A3jRlXPY818cQ8F-xJKR_PY6VO3nPjBehEtyBjPGm6I1KJscXR-eMFB9_fYiuqktGyfg-PQinxR-s"
        alt="Tulips"
        tilt="left"
        className="absolute top-10 left-10 hidden lg:block"
      />
      <Sticker
        src="/images/cold_coffee_sticker.png"
        alt="Cold Coffee"
        tilt="right"
        size="lg"
        className="absolute bottom-20 right-20 hidden lg:block rounded-full"
      />

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="relative inline-block mb-12 md:mb-16 px-4 w-full"
      >
        <h1 className="font-headline text-[13vw] md:text-[clamp(5rem,12vw,9rem)] leading-[0.9] text-primary drop-shadow-[4px_4px_0px_#000000] md:drop-shadow-[10px_10px_0px_#000000] relative z-20 font-black uppercase">
          AKSHYA <br className="md:hidden" /> SRIVASTAVA
        </h1>
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: 12 }}
          className="absolute top-0 right-4 md:-right-12 bg-yellow-300 text-black px-3 py-1 border-2 border-black font-black z-30 text-sm md:text-xl shadow-sm"
        >
          07/05/2008
        </motion.div>
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: -6 }}
          className="absolute -bottom-6 left-4 md:-left-12 bg-secondary-container text-on-secondary-container px-3 py-1 border-2 border-black font-bold z-30 text-sm md:text-2xl shadow-sm"
        >
          रानी 👑
        </motion.div>
      </motion.div>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="font-headline text-[6vw] md:text-5xl text-on-surface mb-12 max-w-4xl leading-tight font-extrabold px-6"
      >
        Looks cute when angry. <br className="hidden md:block" /> <span className="bg-pink-200 px-2 italic">Cold Coffee Lover.</span> <span className="underline decoration-yellow-400 decoration-8">Golgappe soul.</span>
      </motion.p>

      <motion.button
        whileHover={{ scale: 1.05, x: 8, y: 8, boxShadow: "2px 2px 0px #000" }}
        whileTap={{ scale: 0.95 }}
        className="bg-primary-container text-on-primary-container px-8 md:px-12 py-4 md:py-6 text-xl md:text-3xl font-black border-4 border-black shadow-[6px_6px_0px_0px_#000000] md:shadow-[10px_10px_0px_0px_#000000] flex items-center gap-4 group font-headline"
      >
        ENTER AKSHYAVERSE
        <Zap className="fill-current w-6 h-6 md:w-8 md:h-8 group-hover:animate-bounce" />
      </motion.button>
    </section>
  );
};
