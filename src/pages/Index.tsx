import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import EventTimeline from '@/components/EventTimeline';
import FamilySection from '@/components/FamilySection';
import VenueSection from '@/components/VenueSection';
import MusicPlayer from '@/components/MusicPlayer';
import { wedding } from '@/wedding.config';

const Index = () => {
  return (
    <main className="relative">
      <Navigation />
      
      <div id="home">
        <HeroSection />
      </div>
      
      <div id="timeline">
        <EventTimeline />
      </div>
      
      <div id="families">
        <FamilySection />
      </div>
      
      <div id="venue">
        <VenueSection />
      </div>

      <footer className="bg-gradient-to-br from-wedding-purple to-wedding-rose text-white py-12 px-4">
        <div className="mx-auto max-w-4xl text-center space-y-6">
          <p className="font-serif text-3xl font-bold">
            {wedding.couple.partner1} & {wedding.couple.partner2}
          </p>
          <div className="h-px w-32 mx-auto bg-wedding-gold" />
          <p className="text-lg">
            {wedding.date}
          </p>
          <p className="text-white/80">
            {wedding.venue.name}, {wedding.venue.addressLine2}
          </p>
          {wedding.footer.blessingLine && (
            <p className="text-sm text-white/60 pt-6">{wedding.footer.blessingLine}</p>
          )}
        </div>
      </footer>

      {wedding.music.file && <MusicPlayer />}
    </main>
  );
};

export default Index;
