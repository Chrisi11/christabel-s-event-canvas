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
          <p className="">


Christabel’s was founded in 2020 in the former Mayor’s Parlour of the historic Fulham Town Hall as an avant-garde alternative to London’s affluence-enamoured members-only establishments.

Forged from the creative fires of the London lockdown, Christabel’s encouraged revolutionary discourse, romance, and musical mayhem. Guests; politicians, princesses and rockstars, became players on a stage where life imitated art, and poetry pervaded every corner.

Christabel’s survived the lockdown and expanded to locations in Fitzrovia and Soho, including a secret club beneath the historic Windmill Theatre before it closed down.

A throwback to London’s rock and roll era, Christabel's brings together musicians, poets, artists, dandies, and dilettantes to revel in rebellion against cultural homogenisation.
The Club has hosted an array of musicians and performers, including The Molotovs, Black Sabbath, Babyshambles, The Kooks, Shane McGowan from The Pogues, Visage, Dexy’s Midnight Runners, The Only Ones, The Mystery Jets, Razorlight, Jammer BBK, The Gulps, and Paul Oakenfold. 

November 2025 marks the reopening of Christabel's in central London just off Oxford Circus, offering a full band set-up designed for musicians to leap up on stage whenever they feel so inspired.

With a late night live music and liquor licence, London's wild, creative and boheme are now free to pick up the beat in the heart of the city...


        </p>
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