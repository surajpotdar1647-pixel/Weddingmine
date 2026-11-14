import { MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { wedding } from '@/wedding.config';

const { venue } = wedding;
const query = encodeURIComponent(venue.mapSearch || `${venue.name}, ${venue.addressLine2}`);
const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${query}`;
const MAP_EMBED_URL = `https://maps.google.com/maps?q=${query}&output=embed`;

const VenueSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-wedding-cream to-background">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center animate-slide-up">
          <h2 className="font-serif text-5xl font-bold text-primary md:text-6xl mb-4">
            Venue
          </h2>
          <div className="mx-auto h-1 w-24 rounded-full gradient-gold" />
        </div>
        <Card className="overflow-hidden border-2 border-wedding-gold/20 shadow-elegant">
          <CardContent className="p-0">
            <div className="grid gap-0 md:grid-cols-2">
              <div className="bg-gradient-to-br from-wedding-purple/5 to-wedding-rose/5 p-12">
                <div className="space-y-8 text-center md:text-left">
                  <div>
                    <h3 className="font-serif text-4xl font-bold text-primary mb-6">
                      {venue.name}
                    </h3>
                    <div className="space-y-4 text-lg">
                      <div className="flex items-start gap-3 justify-center md:justify-start">
                        <MapPin className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-foreground">{venue.addressLine1}</p>
                          <p className="text-muted-foreground">{venue.addressLine2}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-wedding-gold/20">
                    <Button 
                      variant="outline" 
                      className="w-full border-wedding-gold/30 hover:bg-wedding-gold/10 hover:border-wedding-gold transition-smooth"
                      onClick={() => window.open(MAPS_URL, '_blank', 'noopener,noreferrer')}
                    >
                      <MapPin className="mr-2 h-4 w-4" />
                      Open in Google Maps
                    </Button>
                  </div>
                </div>
              </div>

              <div className="relative h-[400px] md:h-auto">
                <iframe
                  src={MAP_EMBED_URL}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-[400px] md:h-full"
                  title={`${venue.name} location`}
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default VenueSection;
