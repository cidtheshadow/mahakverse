import { motion } from "framer-motion";
import { Menu } from "lucide-react";

export const Header = () => {
  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4 pointer-events-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">
        <motion.div 
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="font-headline font-black text-xl md:text-2xl bg-primary text-white px-4 py-2 border-4 border-black shadow-[4px_4px_0px_#000000] -rotate-2 hidden sm:block"
        >
          MAHAKVERSE
        </motion.div>
        
        <div className="flex gap-2 md:gap-8 items-center bg-white border-4 border-black p-2 md:p-3 shadow-[6px_6px_0px_#000000] rotate-1 mx-auto sm:mx-0">
          <a className="font-headline font-black uppercase text-[10px] md:text-sm text-black hover:bg-yellow-300 px-2 py-1 transition-colors" href="#about">About</a>
          <div className="w-1 h-1 bg-black rounded-full" />
          <a className="font-headline font-black uppercase text-[10px] md:text-sm text-black hover:bg-pink-100 px-2 py-1 transition-colors" href="#music">Music</a>
          <div className="w-1 h-1 bg-black rounded-full" />
          <a className="font-headline font-black uppercase text-[10px] md:text-sm text-black hover:bg-teal-100 px-2 py-1 transition-colors" href="#archive">Archive</a>
        </div>

        <motion.button 
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="bg-yellow-300 p-2 md:p-3 border-4 border-black shadow-[4px_4px_0px_#000000] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all hidden sm:block"
        >
          <Menu className="w-6 h-6" />
        </motion.button>
      </div>
    </header>
  );
};
