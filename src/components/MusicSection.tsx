import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrapbookCard } from "./ui/ScrapbookCard";
import { Play, Pause, SkipBack, SkipForward, Shuffle, Repeat, Music } from "lucide-react";

export const MusicSection = () => {
  const songs = [
    { title: "DARKHAAST", artist: "Mithoon, Sunidhi Chauhan, Arijit Singh", color: "bg-zinc-800", coverUrl: "https://i.ytimg.com/vi/-3vUz7QPljM/maxresdefault.jpg", youtubeId: "-3vUz7QPljM" },
    { title: "Madira", artist: "Seedhe Maut, Hurricane, DL91 Era", color: "bg-pink-100", coverUrl: "https://i.ytimg.com/vi/CgK2iGxNy7M/maxresdefault.jpg", youtubeId: "CgK2iGxNy7M" },
    { title: "Bure Din", artist: "Seedhe Maut", color: "bg-secondary-container", coverUrl: "https://i.ytimg.com/vi/5UNU9nkQre0/maxresdefault.jpg", youtubeId: "5UNU9nkQre0" },
    { title: "Raat Akeli Thi", artist: "Pritam, Arijit Singh, Antara Mitra", color: "bg-yellow-200", coverUrl: "https://i.ytimg.com/vi/QbAJzzB1oBI/maxresdefault.jpg", youtubeId: "QbAJzzB1oBI" },
    { title: "Teri Yaad", artist: "Aditya Rikhari", color: "bg-primary-container", coverUrl: "https://i.ytimg.com/vi/LY2zVIljGIs/maxresdefault.jpg", youtubeId: "LY2zVIljGIs" },
    { title: "Haule Haule", artist: "Sukhwinder Singh", color: "bg-tertiary-container", coverUrl: "https://i.ytimg.com/vi/gLBoyzFnAdE/maxresdefault.jpg", youtubeId: "gLBoyzFnAdE" },
    { title: "Khat", artist: "Navjot Ahuja", color: "bg-orange-200", coverUrl: "https://i.ytimg.com/vi/KrJ5c-Egz-U/maxresdefault.jpg", youtubeId: "KrJ5c-Egz-U" },
    { title: "CHHAD DILA", artist: "Lehmber Hussainpuri, Sheera Jasvir", color: "bg-teal-200", coverUrl: "https://i.ytimg.com/vi/9RUEyuetpNs/maxresdefault.jpg", youtubeId: "9RUEyuetpNs" },
    { title: "Total", artist: "Rawme Hooda, Nishael", color: "bg-indigo-200", coverUrl: "https://i.ytimg.com/vi/KmzXCSyfQQo/maxresdefault.jpg", youtubeId: "KmzXCSyfQQo" },
    { title: "Meherbaan", artist: "Vishal-Shekhar, Ash King, Shilpa Rao", color: "bg-pink-300", coverUrl: "https://i.ytimg.com/vi/Qe18x3hETA0/maxresdefault.jpg", youtubeId: "Qe18x3hETA0" },
    { title: "Darmiyaan", artist: "Shafqat Amanat Ali, Clinton Cerejo", color: "bg-blue-300", coverUrl: "https://i.ytimg.com/vi/w2lNrHJ_1fM/maxresdefault.jpg", youtubeId: "w2lNrHJ_1fM" },
    { title: "Paaro", artist: "Aditya Rikhari", color: "bg-red-400", coverUrl: "https://i.ytimg.com/vi/gZ0vHQKfNH8/maxresdefault.jpg", youtubeId: "gZ0vHQKfNH8" },
  ];

  const [currentIdx, setCurrentIdx] = useState(3); // Default to Raat Akeli Thi
  const [isPlaying, setIsPlaying] = useState(false);
  const [player, setPlayer] = useState<any>(null);
  const [isPlayerReady, setIsPlayerReady] = useState(false);
  const currentSong = songs[currentIdx];

  useEffect(() => {
    // Robust YouTube IFrame API Loader
    const loadYT = () => {
      if (!window.YT) {
        const tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
        window.onYouTubeIframeAPIReady = () => initializePlayer();
      } else if (window.YT && window.YT.Player) {
        initializePlayer();
      }
    };

    loadYT();
  }, []);

  const initializePlayer = () => {
    if (player) return; // Don't re-init

    try {
      const newPlayer = new window.YT.Player('youtube-player', {
        height: '0',
        width: '0',
        videoId: songs[currentIdx].youtubeId,
        playerVars: {
          autoplay: 0,
          controls: 0,
          disablekb: 1,
          fs: 0,
          rel: 0,
          showinfo: 0,
          origin: window.location.origin
        },
        events: {
          onReady: () => {
            console.log("YT Player Ready");
            setIsPlayerReady(true);
          },
          onStateChange: (event: any) => {
            if (event.data === window.YT.PlayerState.PLAYING) {
              setIsPlaying(true);
            } else if (event.data === window.YT.PlayerState.PAUSED) {
              setIsPlaying(false);
            } else if (event.data === window.YT.PlayerState.ENDED) {
              handleNext();
            }
          },
        },
      });
      setPlayer(newPlayer);
    } catch (err) {
      console.error("Failed to init YT player:", err);
    }
  };

  useEffect(() => {
    if (player && player.loadVideoById && isPlayerReady) {
      player.loadVideoById(currentSong.youtubeId);
      if (!isPlaying) {
        player.pauseVideo();
      }
    }
  }, [currentIdx, isPlayerReady]);

  useEffect(() => {
    if (player && isPlayerReady) {
      if (isPlaying) {
        player.playVideo();
      } else {
        player.pauseVideo();
      }
    }
  }, [isPlaying, isPlayerReady]);

  const handleNext = () => setCurrentIdx((prev) => (prev + 1) % songs.length);
  const handlePrev = () => setCurrentIdx((prev) => (prev - 1 + songs.length) % songs.length);
  const togglePlay = () => {
    if (!isPlayerReady) {
      initializePlayer();
      return;
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <section id="music" className="py-8 md:py-16 overflow-hidden px-4">
      <div id="youtube-player" className="hidden"></div>
      
      <div className="flex flex-col md:flex-row items-center gap-6 mb-12">
        <h2 className="font-headline text-4xl md:text-8xl text-primary font-black uppercase whitespace-nowrap">MUSIC WALL</h2>
        <div className="h-1 md:h-4 w-full bg-black"></div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-3 md:gap-8 mb-24">
        {songs.map((song, i) => (
          <ScrapbookCard 
            key={i} 
            tilt={i % 2 === 0 ? "left" : "right"}
            className={`p-2 md:p-4 shadow-[4px_4px_0px_#000000] md:shadow-[6px_6px_0px_#000000] cursor-pointer group transition-all ${currentIdx === i ? 'border-primary ring-2 ring-primary' : ''}`}
            onClick={() => {
              if (currentIdx === i) {
                togglePlay();
              } else {
                setCurrentIdx(i);
                setIsPlaying(true);
              }
            }}
          >
            <div className={`w-full h-24 md:h-32 ${song.color} rounded mb-3 flex items-center justify-center p-2 relative overflow-hidden group`}>
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110 opacity-60 mix-blend-multiply" 
                style={{ backgroundImage: `url(${song.coverUrl})` }} 
              />
              <div className="w-full h-full border-2 border-black/20 rounded flex flex-col items-center justify-center gap-2 relative z-10 backdrop-blur-[1px] bg-white/10">
                <div className="flex gap-4">
                  <div className="w-5 h-5 md:w-8 md:h-8 rounded-full border-2 border-black/30 bg-white/20"></div>
                  <div className="w-5 h-5 md:w-8 md:h-8 rounded-full border-2 border-black/30 bg-white/20"></div>
                </div>
                <div className="w-12 md:w-20 h-1 md:h-2 bg-black/30 rounded"></div>
              </div>
              {currentIdx === i && isPlaying && (
                <div className="absolute inset-0 bg-primary/20 flex items-center justify-center backdrop-blur-[2px] z-20">
                   <div className="flex gap-1 items-end h-6 md:h-8">
                      {[1,2,3,4,5].map(j => (
                        <motion.div 
                          key={j}
                          animate={{ height: ["20%", "100%", "20%"] }}
                          transition={{ repeat: Infinity, duration: 0.5 + Math.random(), ease: "easeInOut" }}
                          className="w-1 md:w-1.5 bg-white shadow-sm"
                        />
                      ))}
                   </div>
                </div>
              )}
            </div>
            <div className="font-headline font-black text-center text-on-surface uppercase text-[10px] md:text-sm group-hover:text-primary transition-colors truncate">
              {song.title}
            </div>
            <div className="text-[8px] md:text-[11px] text-center font-bold opacity-60 truncate font-body">
              {song.artist}
            </div>
          </ScrapbookCard>
        ))}
      </div>

      <div className="flex justify-center">
        <motion.div 
          initial={{ rotate: -2 }}
          whileInView={{ rotate: 0 }}
          className="bg-primary text-white border-4 md:border-8 border-black p-5 md:p-8 shadow-[10px_10px_0px_#000000] md:shadow-[15px_15px_0px_#000000] max-w-md w-full relative"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-overlay -z-10" 
            style={{ backgroundImage: `url(${currentSong.coverUrl})` }} 
          />
          <div className="absolute -top-8 -right-8 bg-white text-primary rounded-full p-3 border-4 border-black rotate-12 shadow-lg hidden lg:block">
            <Music className="w-8 h-8" />
          </div>
          <div className="absolute -bottom-3 -left-8 md:-left-16 bg-yellow-300 text-black px-4 py-1 border-4 border-black -rotate-12 font-black text-xs md:text-xl shadow-md">
            RETRO VIBES
          </div>
          
          <div className="text-center mb-6 md:mb-8">
            <div className="flex flex-col items-center gap-2 mb-4">
               {!isPlayerReady && (
                 <motion.div 
                   animate={{ scale: [1, 1.1, 1] }}
                   transition={{ repeat: Infinity, duration: 2 }}
                   className="text-[10px] bg-yellow-300 text-black px-2 py-0.5 border-2 border-black font-black uppercase"
                 >
                   Player Loading...
                 </motion.div>
               )}
               <div className="text-[10px] font-black tracking-[0.2em] opacity-80 uppercase font-headline">Now playing</div>
            </div>
            <AnimatePresence mode="wait">
              <motion.div 
                key={currentSong.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex flex-col items-center cursor-pointer"
                onClick={togglePlay}
              >
                <div className="text-xl md:text-3xl font-black italic font-headline underline decoration-white/30 decoration-4 truncate w-full px-2">
                  {currentSong.title}
                </div>
                <div className="text-[10px] md:text-xs font-bold opacity-70 mt-2 font-body uppercase tracking-wider px-2 truncate w-full">
                  {currentSong.artist}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-end justify-center gap-1 h-10 md:h-16 mb-6 md:mb-8">
            {[0.4, 0.8, 0.3, 0.9, 0.5, 1, 0.6, 0.8, 0.4].map((h, i) => (
              <motion.div 
                key={i}
                animate={isPlaying ? { height: [ `${h*40}%`, `${(1-h)*100}%`, `${h*80}%` ] } : { height: '20%' }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.1 }}
                className="w-1.5 md:w-3 bg-white/60 rounded-t-sm"
              />
            ))}
          </div>

          <div className="flex items-center justify-between gap-2 md:gap-4">
            <button className="bg-black/20 p-1.5 md:p-2 hover:bg-black/40"><Shuffle className="w-4 h-4 md:w-5 md:h-5" /></button>
            <div className="flex items-center gap-3 md:gap-6">
              <button 
                onClick={handlePrev}
                className="hover:scale-110 transition-transform"><SkipBack className="w-6 h-6 md:w-8 md:h-8 fill-current" /></button>
              <button 
                onClick={togglePlay}
                className="bg-white text-primary w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center border-4 border-black shadow-[4px_4px_0px_#000000] hover:scale-105 active:translate-y-1">
                {isPlaying ? <Pause className="w-6 h-6 md:w-8 md:h-8 fill-current" /> : <Play className="w-6 h-6 md:w-8 md:h-8 fill-current ml-1" />}
              </button>
              <button 
                onClick={handleNext}
                className="hover:scale-110 transition-transform"><SkipForward className="w-6 h-6 md:w-8 md:h-8 fill-current" /></button>
            </div>
            <button className="bg-black/20 p-1.5 md:p-2 hover:bg-black/40"><Repeat className="w-4 h-4 md:w-5 md:h-5" /></button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
