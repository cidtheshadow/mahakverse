import { ScrapbookCard } from "./ui/ScrapbookCard";

export const Favorites = () => {
  const favorites = [
    {
      title: "Ashish",
      desc: "Always by her side.",
      img: "/images/ashish.jpg",
      tilt: "right" as const
    },
    {
      title: "Cold Coffee",
      desc: "Essential fuel.",
      img: "/images/cold_coffee_sticker.png",
      tilt: "left" as const,
      overlap: true
    },
    {
      title: "Golgappe",
      desc: "Sweet & Spicy.",
      tilt: "right" as const,
      img: "/images/golgappe.jpg"
    },
    {
      title: "Spicy Food",
      desc: "Certified heat.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAYm05yEjd_ZfXm_Ahy_P3HsgnZpEj_Ffc7xPhPQlNqvtrVqEcTu6FFw9nRjjcMc06HPCGw9DSQffIXkXJLYyKBc0t-3GY6n-zkAn1xCzDsk0wNx3XKLb90N_kdqpcDx4apHgoOCofA2XBlWjF0NZ4PtIUJKxYeFRY64aaVX1-lab48wkomoOhU0dgyS0S13k6Bg-svq1_1h1YE3uFKxljYWcydEC4Pekx-EpmxhUMI1e5EtaDTLdX2Xl3niLGX4eBSl2Pfp8jNuA0",
      tilt: "left" as const,
      margin: "mt-8"
    }
  ];

  return (
    <section className="py-8 md:py-16">
      <h2 className="font-headline text-[12vw] md:text-8xl text-center mb-10 md:mb-16 underline decoration-pink-500 decoration-4 md:decoration-8 font-black uppercase px-2">
        FAVORITES
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 px-3 md:px-4">
        {favorites.map((item, i) => (
          <ScrapbookCard 
            key={i} 
            tilt={item.tilt} 
            className={`p-2 md:p-4 shadow-[4px_4px_0px_#000000] md:shadow-[8px_8px_0px_#000000] flex flex-col items-center ${item.overlap ? 'lg:-mt-12' : ''} ${item.margin || ''}`}
          >
            {item.img && (
              <img 
                className="w-full h-32 md:h-48 object-cover border-2 border-black mb-3 md:mb-4" 
                src={item.img} 
                alt={item.title} 
              />
            )}
            <h3 className="font-headline font-black text-lg md:text-2xl uppercase italic">{item.title}</h3>
            <p className="font-body text-[10px] md:text-sm font-bold opacity-70 text-center">{item.desc}</p>
          </ScrapbookCard>
        ))}
      </div>
    </section>
  );
};
