import { useEffect, useRef } from 'react';
import { wedding } from '@/wedding.config';

const HeroSection = () => {
  const { hero, couple, date } = wedding;
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Video autoplay prevented:", error);
      });
    }
  }, []);

  return (
    <section className="relative lg:min-h-screen w-full overflow-hidden">
      {hero.video ? (
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          poster={hero.image || undefined}
          className="absolute inset-0 w-full lg:h-full object-cover lg:min-h-screen h-[100%]"
        >
          <source src={hero.video} type="video/mp4" />
        </video>
      ) : (
        <img
          src={hero.image}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
      
      <div className="relative z-10 flex md:min-h-screen md:h-full flex-col items-center justify-center px-4 py-20 text-center">
        <div className="animate-fade-in space-y-4 md:space-y-6">
          {hero.blessing && (
            <p className="font-serif text-xl text-white/90 md:text-3xl font-bold">
              {hero.blessing}
            </p>
          )}
          
          <h1 className="font-serif text-5xl font-bold text-white drop-shadow-lg md:text-8xl">
            {couple.partner1} <span className="text-gradient-gold">&</span> {couple.partner2}
          </h1>
          
          <div className="mx-auto h-1 w-32 rounded-full bg-gradient-to-r from-transparent via-wedding-gold to-transparent" />
          
          <p className="text-lg text-white/95 md:text-2xl font-bold">
            {date}
          </p>
          
          {hero.quote && (
            <p className="max-w-2xl mx-auto font-serif text-base italic text-white/90 md:text-lg px-4 font-bold">
              "{hero.quote}"
            </p>
          )}
        </div>
        
        <div className="absolute bottom-12 animate-float">
          <svg
            className="h-8 w-8 text-white/70"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
