export const Marquee = () => {
  const items = [
    "STAY DRAMATIC", "★", "GOOD VIBES ONLY", "★",
    "COFFEE POWER", "★", "MUSIC THERAPY", "★"
  ];

  return (
    <div className="bg-black text-white py-2 md:py-4 -mx-2 md:-mx-10 rotate-1 border-y-4 border-primary overflow-hidden">
      <div className="marquee font-black uppercase text-xl md:text-2xl flex gap-8 md:gap-12 whitespace-nowrap">
        {[...items, ...items, ...items, ...items, ...items].map((item, i) => (
          <span key={i} className={item === "★" ? "text-pink-500" : "flex-shrink-0"}>{item}</span>
        ))}
      </div>
    </div>
  );
};
