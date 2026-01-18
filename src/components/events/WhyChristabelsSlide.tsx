import { motion } from "framer-motion";
import { SectionWrapper } from "./SectionWrapper";
const reasons = ["Central London location, nestled between Fitzrovia, Soho and Mayfair (nearest tube: Oxford Circus)", "Late late licence until 4am — with possibility to extend to 6am", "Late licence for live music until 3am", "Press and Media Connections", "Discreet but influential", "Cultural credibility", "Late-night energy", "Highly curated guestlist", "A fully bespoke hosted experience", "London's cult members club"];
export const WhyChristabelsSlide = () => {
  return <SectionWrapper className="bg-gradient-section">
      <div className="max-w-4xl text-center">
        <motion.span initial={{
        opacity: 0
      }} whileInView={{
        opacity: 1
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="text-gold text-sm tracking-[0.3em] uppercase font-body mb-8 block">
          The Difference
        </motion.span>

        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-16">
          Why <span className="italic text-gradient-gold">Christabel's</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {reasons.map((reason, index) => <motion.div key={reason} initial={{
          opacity: 0,
          x: index % 2 === 0 ? -30 : 30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: index * 0.1
        }} className="flex items-center gap-4 p-6 bg-gradient-card border border-border rounded">
              <span className="w-2 h-2 rounded-full bg-gold flex-shrink-0" />
              <span className="text-foreground font-body text-lg">{reason}</span>
            </motion.div>)}
        </div>

        <motion.p initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.8,
        delay: 0.6
      }} className="font-display text-2xl md:text-3xl text-muted-foreground italic leading-relaxed">"Christabel's is renowned for its evenings of avant garde entertainment and indulgence, live music and burlesque geared towards the most creative and eccentric of London's social sets." — <strong className="text-foreground not-italic">Luxury London</strong>
        </motion.p>
      </div>
    </SectionWrapper>;
};
