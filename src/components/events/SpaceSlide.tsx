import { motion } from "framer-motion";
import { SectionWrapper } from "./SectionWrapper";
import loungeGlamour from "@/assets/lounge-glamour.jpg";
import vipGuests from "@/assets/vip-guests.jpg";
const spaceDetails = [{
  label: "Standing Capacity",
  value: "150/200"
}, {
  label: "Seated Capacity",
  value: "80"
}, {
  label: "Bar Area",
  value: "40"
}, {
  label: "Stage Area",
  value: "Live Ready"
}];
const atmosphereDescriptors = ["Candlelit", "Intimate", "Late-Night", "Discreet"];
export const SpaceSlide = () => {
  return <SectionWrapper className="bg-background">
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
          The Space
        </motion.span>

        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-16 text-center">
          A Theatre of <span className="italic text-gradient-gold">Greatness</span>
        </h2>

        {/* Image Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <motion.div initial={{
          opacity: 0,
          x: -30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }} className="relative aspect-[4/3] overflow-hidden rounded">
            <img src={loungeGlamour} alt="Christabel's Lounge" className="w-full h-full object-cover sepia-[0.15] contrast-[1.05]" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            <span className="absolute bottom-4 left-4 font-body text-sm text-foreground tracking-wide">
              The Lounge
            </span>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          x: 30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} className="relative aspect-[4/3] overflow-hidden rounded">
            <img src={vipGuests} alt="VIP Area" className="w-full h-full object-cover sepia-[0.15] contrast-[1.05]" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            <span className="absolute bottom-4 left-4 font-body text-sm text-foreground tracking-wide">
              VIP Seating
            </span>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {spaceDetails.map((detail, index) => <motion.div key={detail.label} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: index * 0.1
        }} className="text-center p-6 bg-gradient-card rounded border border-border">
              <span className="block text-3xl md:text-4xl font-display text-gold mb-2">
                {detail.value}
              </span>
              <span className="text-sm text-muted-foreground font-body tracking-wide uppercase">
                {detail.label}
              </span>
            </motion.div>)}
        </div>

        {/* Atmosphere Tags */}
        <div className="flex flex-wrap justify-center gap-4">
          {atmosphereDescriptors.map((descriptor, index) => <motion.span key={descriptor} initial={{
          opacity: 0,
          scale: 0.9
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.4,
          delay: 0.4 + index * 0.1
        }} className="px-6 py-2 border border-gold/30 text-gold text-sm font-body tracking-widest uppercase rounded-full">
              {descriptor}
            </motion.span>)}
        </div>

        {/* Tech Specs */}
        <motion.div initial={{
        opacity: 0
      }} whileInView={{
        opacity: 1
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6,
        delay: 0.6
      }} className="mt-12 text-center text-muted-foreground text-sm font-body">
          <p>Full sound system • Professional DJ setup • Stage lighting • Wireless microphones</p>
        </motion.div>
      </div>
    </SectionWrapper>;
};