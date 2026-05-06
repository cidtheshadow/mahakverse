import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="w-full py-12 md:py-20 px-6 md:px-8 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12 bg-pink-600 border-t-8 border-black text-white">
      <div className="text-3xl md:text-4xl font-black italic font-headline uppercase drop-shadow-[2px_2px_0px_#000]">
        AKSHYA-ASHISH
      </div>

      <div className="flex flex-wrap justify-center gap-6 md:gap-12 font-headline font-black text-lg md:text-xl uppercase">
        <a className="hover:text-yellow-300 hover:scale-110 transition-all underline decoration-4 decoration-yellow-300 underline-offset-8" href="https://www.instagram.com/aapkifuljhadiii" target="_blank" rel="noopener noreferrer">insta</a>
        <a className="hover:text-yellow-300 hover:scale-110 transition-all underline decoration-4 decoration-yellow-300 underline-offset-8" href="https://open.spotify.com/user/316j2hokzf4n3ftqkkg7jeofbjjm" target="_blank" rel="noopener noreferrer">Spotify</a>
      </div>

      <div className="text-center md:text-right font-headline font-bold text-xs md:text-sm uppercase opacity-90 max-w-xs leading-loose">
        © 2026 AKSHYA-ASHISH. <br />
        STAY DRAMATIC. <br />
        MADE WITH CHAI AND CHAOS.
      </div>
    </footer>
  );
};

export const FAB = () => {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-[60] bg-yellow-300 border-4 border-black p-3 md:p-4 shadow-[4px_4px_0px_#000000] md:shadow-[8px_8px_0px_#000000] hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_#000] transition-all rotate-12 group"
    >
      <ArrowUp className="w-6 h-6 md:w-8 md:h-8 text-black group-hover:-translate-y-1 transition-transform" />
    </button>
  );
};
