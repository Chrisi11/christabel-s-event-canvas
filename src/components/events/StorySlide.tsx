import { motion } from "framer-motion";
import { SectionWrapper } from "./SectionWrapper";
export const StorySlide = () => {
  return <SectionWrapper className="bg-gradient-section">
      <div className="max-w-3xl text-center">
        <motion.span initial={{
        opacity: 0
      }} whileInView={{
        opacity: 1
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="text-gold text-sm tracking-[0.3em] uppercase font-body mb-8 block">
          The Story
        </motion.span>
        
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-10 leading-tight">
          Where the Night
          <span className="block text-gradient-gold italic">Comes Alive</span>
        </h2>
        
        <div className="space-y-6 text-muted-foreground font-body text-lg leading-relaxed">
          <p>Relaunched in November 2024, Christabel's is a members-led cultural club where music, cocktails, art, and conversation intertwine after dark.</p>
          <p>
            We are a sanctuary for night-time tastemakers, creatives, and cultural 
            leaders—a place where ideas spark over candlelight and the city's 
            most interesting minds gather.
          </p>
        </div>

        <div className="mt-16 flex items-center justify-center gap-8 text-muted-foreground text-sm tracking-widest uppercase font-body">
          <span>Music</span>
          <span className="w-1 h-1 rounded-full bg-gold" />
          <span>Cocktails</span>
          <span className="w-1 h-1 rounded-full bg-gold" />
          <span>Art</span>
          <span className="w-1 h-1 rounded-full bg-gold" />
          <span>Culture</span>
        </div>
      </div>
    </SectionWrapper>;
};