import { motion } from "framer-motion";
import { SectionWrapper } from "./SectionWrapper";

export const StorySlide = () => {
  return (
    <SectionWrapper className="bg-gradient-section">
      <div className="max-w-3xl text-center">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-gold text-sm tracking-[0.3em] uppercase font-body mb-8 block"
        >
          The Story
        </motion.span>

        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-10 leading-tight">
          The definition of
          <span className="block text-gradient-gold italic">Creative Chaos</span>
        </h2>

        <div className="space-y-6 text-muted-foreground font-body text-lg leading-relaxed">
          <p>Born in 2020 in the historic Fulham Town Hall, Christabel's emerged from lockdown as London's avant-garde antidote to conventional, affluence-obsessed members' clubs.</p>

          <p>A stage for revolution, romance, and musical mayhem, it has hosted politicians, princesses, rockstars, and poets with life imitating art at every turn.</p>

          <p>From Fitzrovia to Soho, including a secret club beneath the historic Windmill Theatre, Christabel's has become a sanctuary for musicians, artists, filmmakers and bohemians rebelling against cultural homogenisation.</p>

          <p>Past performers and guests include: The Molotovs, Black Sabbath, Babyshambles, The Kooks, Shane McGowan, Dexy's Midnight Runners, Paul Oakenfold…</p>

          <p>Now, in the heart of London just by Oxford Circus, with a full band stage and late-night liquor licence, Christabel's is open again for London's wild, creative, and bohemian spirits to pick up the beat.</p>
        </div>

        <div className="mt-16 flex items-center justify-center gap-8 text-muted-foreground text-sm tracking-widest uppercase font-body">
          <span>Music</span>
          <span className="w-1 h-1 rounded-full bg-gold" />
          <span>MEDIA</span>
          <span className="w-1 h-1 rounded-full bg-gold" />
          <span>Art</span>
          <span className="w-1 h-1 rounded-full bg-gold" />
          <span>Culture</span>
        </div>
      </div>
    </SectionWrapper>
  );
};
