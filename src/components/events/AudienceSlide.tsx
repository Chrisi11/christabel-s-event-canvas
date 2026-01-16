import { motion } from "framer-motion";
import { SectionWrapper } from "./SectionWrapper";
const audienceTypes = ["Creative Directors", "Founders", "Artists", "Tastemakers", "Fashion", "Music", "Media", "Culture"];
export const AudienceSlide = () => {
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
          Our Members
        </motion.span>

        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-10">
          The <span className="italic text-gradient-gold">Christabel's</span> Community
        </h2>

        <p className="text-muted-foreground font-body text-lg md:text-xl leading-relaxed mb-12 max-w-2xl mx-auto">A highly engaged late-night audience with strong cultural influence. Our members are the city's most connected creatives from the film, music and media industries.</p>

        {/* Audience Tags */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {audienceTypes.map((type, index) => <motion.span key={type} initial={{
          opacity: 0,
          y: 10
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.4,
          delay: index * 0.05
        }} className="px-5 py-2 bg-card border border-border text-foreground text-sm font-body tracking-wide rounded">
              {type}
            </motion.span>)}
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="text-center">
            <span className="block text-5xl md:text-6xl font-display text-gold mb-2">25-45</span>
            <span className="text-sm text-muted-foreground font-body tracking-wide uppercase">Age Range</span>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.1
        }} className="text-center">
            <span className="block text-5xl md:text-6xl font-display text-gold mb-2">500+</span>
            <span className="text-sm text-muted-foreground font-body tracking-wide uppercase">Active Members</span>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} className="text-center">
            <span className="block text-5xl md:text-6xl font-display text-gold mb-2">85%</span>
            <span className="text-sm text-muted-foreground font-body tracking-wide uppercase">Industry Leaders</span>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>;
};