import { Calendar, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { wedding } from '@/wedding.config';

const EventTimeline = () => {
  const { events, dateWithDay } = wedding;

  return (
    <section className="bg-gradient-to-b from-background to-wedding-cream py-20 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center animate-slide-up">
          <h2 className="font-serif text-5xl font-bold text-primary md:text-6xl mb-4">
            Wedding Timeline
          </h2>
          <div className="mx-auto h-1 w-24 rounded-full gradient-gold mb-6" />
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <Calendar className="h-5 w-5" />
            <p className="text-xl">{dateWithDay}</p>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {events.map((event, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden border-2 border-wedding-gold/20 bg-card shadow-elegant transition-smooth hover:shadow-glow hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="absolute top-0 left-0 h-1 w-full gradient-gold" />
              <CardContent className="p-0">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    loading="lazy"
                    src={event.image} 
                    alt={event.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-8 text-center">
                  <h3 className="font-serif text-3xl font-bold text-primary mb-3">
                    {event.name}
                  </h3>
                  <div className="mb-4 flex items-center justify-center gap-2 text-secondary">
                    <Clock className="h-5 w-5" />
                    <p className="text-xl font-semibold">{event.time}</p>
                  </div>
                  <p className="text-muted-foreground">{event.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventTimeline;
