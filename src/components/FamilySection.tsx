import { Fragment } from 'react';
import { Heart } from 'lucide-react';
import { wedding } from '@/wedding.config';

const cardTints = [
  'from-wedding-purple/5',
  'from-wedding-rose/5',
];

const FamilySection = () => {
  const { sectionIntro, groups, elders } = wedding.families;

  return (
    <section className="py-20 px-4 bg-background">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 text-center animate-slide-up">
          <h2 className="font-serif text-5xl font-bold text-primary md:text-6xl mb-4">
            Our Families
          </h2>
          <div className="mx-auto h-1 w-24 rounded-full gradient-primary mb-6" />
          <p className="text-xl text-muted-foreground font-serif italic">
            {sectionIntro}
          </p>
        </div>

        <div className="space-y-12">
          {groups.map((group, index) => (
            <Fragment key={group.title + index}>
              {index > 0 && (
                <div className="flex justify-center">
                  <Heart className="h-8 w-8 text-wedding-rose fill-wedding-rose/20" />
                </div>
              )}
              <div
                className={`text-center space-y-6 p-8 rounded-2xl bg-gradient-to-br ${cardTints[index % cardTints.length]} to-transparent`}
              >
                <div className="space-y-3">
                  <p className="text-sm uppercase tracking-widest text-wedding-gold font-semibold">
                    {group.title}
                  </p>
                  <h3 className="font-serif text-3xl font-bold text-primary">{group.names}</h3>
                  {group.message && <p className="text-muted-foreground">{group.message}</p>}
                </div>
                {group.extraNames && (
                  <div className="pt-4 border-t border-wedding-gold/20">
                    {group.extraTitle && (
                      <p className="text-sm text-muted-foreground mb-2">{group.extraTitle}</p>
                    )}
                    <p className="text-foreground font-semibold">{group.extraNames}</p>
                  </div>
                )}
              </div>
            </Fragment>
          ))}

          {elders.names.length > 0 && (
            <div className="mt-12 pt-12 border-t border-wedding-gold/20">
              <div className="max-w-md mx-auto">
                <div className="bg-card rounded-2xl p-6 shadow-elegant border border-wedding-gold/10">
                  <div className="text-center mb-6">
                    <p className="font-serif text-lg text-muted-foreground italic mb-4">
                      {elders.heading}
                    </p>
                    <div className="space-y-2">
                      {elders.names.map((name) => (
                        <p key={name} className="text-foreground font-semibold">
                          {name}
                        </p>
                      ))}
                    </div>
                  </div>

                  {elders.photo && (
                    <div className="flex justify-center">
                      <div className="relative w-48 rounded-xl overflow-hidden shadow-glow">
                        <img
                          src={elders.photo}
                          alt={elders.names.join(' & ')}
                          className="w-full h-full object-cover object-center"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FamilySection;
