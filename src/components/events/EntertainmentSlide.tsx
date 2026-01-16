import { motion } from "framer-motion";
import { SectionWrapper } from "./SectionWrapper";
import djImage from "@/assets/dj-entertainment.jpg";
import liveMusic from "@/assets/live-music.jpg";
const entertainmentTypes = ["Live Musicians", "Resident & Guest DJs", "Spoken Word Artists", "Cultural Performances", "Walk-Through Tastings"];
export const EntertainmentSlide = () => {
  return <SectionWrapper className="bg-gradient-section">
      <div className="max-w-6xl w-full">
        <motion.span initial={{
        opacity: 0
      }} whileInView={{
        opacity: 1
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="text-gold text-sm tracking-[0.3em] uppercase font-body mb-8 block text-center">
          Programming
        </motion.span>

        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-16 text-center">
          Entertainment & <span className="italic text-gradient-gold">DJs</span>
        </h2>

        {/* Image Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <motion.div initial={{
          opacity: 0,
          scale: 0.95
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }} className="relative aspect-square overflow-hidden rounded">
            <img src={djImage} alt="DJ at Christabel's" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6">
              <span className="text-gold text-sm tracking-widest uppercase font-body">DJs & Selectors</span>
              <p className="text-foreground font-display text-2xl mt-1">Curated Sound</p>
            </div>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          scale: 0.95
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} className="relative aspect-square overflow-hidden rounded">
            <img src={liveMusic} alt="Live Music Performance" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6">
              <span className="text-gold text-sm tracking-widest uppercase font-body">Live Performance</span>
              <p className="text-foreground font-display text-2xl mt-1">Intimate Showcases</p>
            </div>
          </motion.div>
        </div>

        {/* Entertainment Types */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {entertainmentTypes.map((type, index) => <motion.span key={type} initial={{
          opacity: 0,
          y: 10
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.4,
          delay: index * 0.1
        }} className="px-6 py-3 border border-gold/30 text-foreground text-sm font-body tracking-wide rounded-full">
              {type}
            </motion.span>)}
        </div>

        {/* Beverage Director */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.8
      }} className="p-8 bg-gradient-card border border-border rounded text-center max-w-2xl mx-auto">
          <span className="text-gold text-sm tracking-widest uppercase font-body mb-4 block">
            Beverage Director
          </span>
          <h3 className="font-display text-3xl text-foreground mb-4">Brett Watterton</h3>
          <p className="text-muted-foreground font-body leading-relaxed">With over a decade of global experience as a bar founder and consultant, Brett curates story-led cocktail programming that transforms each evening into a sensory journey. 

 A bar founder, consultant, and creative force, Brett has launched multiple acclaimed venues, including one nominated for the World’s 50 Best Bars, and collaborated with prestigious clubs such as Soho House and The RAC Club.

Known for his innovative, culturally attuned approach, Brett combines technical mastery with creative instinct, crafting drinks that are both thoughtful and quietly disruptive. Setting the tone for Christabel’s as a late-night destination for culture, creativity, and exceptional cocktails.
        </p>
        </motion.div>
      </div>
    </SectionWrapper>;
};