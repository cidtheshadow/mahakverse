import { ScrapbookCard } from "./ui/ScrapbookCard";

export const Favorites = () => {
  const favorites = [
    {
      title: "Tulips",
      desc: "Always blooming.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDgxFMQqzwtEBE9r8rofl-Qt4GQj6z8LKmLo3XlqsBFtCMCel9c3M-fGMD8fF7amb6QDq4M0e3P4FGgr8EGvGe0MpuM5_0SNimXpyIVZun_jul7PZU_40wTtAG9ByyFKAv2Phiqto4WrQf9nznz3H0MqyCQpTdxhlKtcx5wbSxgS7dx8szv42QwJTdQkqPC9t_CVsTRI8ww5YKeRRb8YYKcFOu9-c2Hzu2tSvT1rz-00I3L6RJJIDqblvWyQCdWrtQiYcX_DsW0Dus",
      tilt: "right" as const
    },
    {
      title: "Chai",
      desc: "Essential fuel.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBKNpW3KZq_cs3_yAH6xwOrqnSeoKKFfS5LaQG9Bxk4gy-dUqOrtk9e7qZWTdygAWyHZth8iHbiTTDSCngdNyy0_3qGHh47jhU9JvJupmrPIJeXOoZi-KWhllLfZFbjBcWQjRRhmvG75O6fFIXxGY8JZPclMwuCt64rUAbFhin72e2sD36AQfqBUuxYUOZnZnxr3yF7T7z--sSC9-jqrzQQj0Xr0b44Gl7aK2c-_hiCq7Py67LBq3MdPTZzzXsQB01iBzeChj1kTN0",
      tilt: "left" as const,
      overlap: true
    },
    {
      title: "Palette",
      desc: "Blue. Green. Pink.",
      tilt: "right" as const,
      isColors: true
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
            {item.isColors ? (
              <div className="grid grid-cols-3 w-full h-32 md:h-48 border-2 border-black mb-3 md:mb-4">
               <div className="bg-[#00696b]"></div>
               <div className="bg-[#006e70]"></div>
               <div className="bg-[#b40065]"></div>
              </div>
            ) : (
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
