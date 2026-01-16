import { motion } from "framer-motion";
import { SectionWrapper } from "./SectionWrapper";
import micalefEvent1 from "@/assets/micalef-event-1.jpg";
import micalefEvent2 from "@/assets/micalef-event-2.jpg";
import micalefPerfume from "@/assets/micalef-perfume.jpg";
const outcomes = [{
  metric: "150+",
  label: "Guests Attended"
}, {
  metric: "50K+",
  label: "Social Impressions"
}, {
  metric: "12",
  label: "Press Mentions"
}, {
  metric: "100%",
  label: "Brand Recall"
}];
const portraitImages = [{
  src: micalefEvent1,
  alt: "Maison Micalef Launch Event"
}, {
  src: micalefEvent2,
  alt: "Maison Micalef Event Guests"
}];
export const CaseStudySlide = () => {
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
          Case Study
        </motion.span>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Gallery */}
          <motion.div initial={{
          opacity: 0,
          x: -40
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }} className="space-y-3">
            {/* Two portrait images side by side */}
            <div className="grid grid-cols-2 gap-3">
              {portraitImages.map((image, index) => <div key={index} className="relative aspect-[3/4] overflow-hidden rounded">
                  <img src={image.src} alt={image.alt} className="w-full h-full object-contain sepia-[15%] saturate-[1.1] brightness-[0.95] contrast-[1.05]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-orange-500/5" />
                </div>)}
            </div>
          </motion.div>

          {/* Content */}
          <motion.div initial={{
          opacity: 0,
          x: 40
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }}>
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-2">
              Christabel's Launch  <span className="text-gold">x</span> Maison Micalef Parfums  
            </h2>
            <p className="text-muted-foreground font-body mb-8">Winter 2025</p>

            <div className="space-y-6 mb-10">
              <div>
                <h4 className="font-body text-sm text-gold tracking-widest uppercase mb-2">Objective</h4>
                <p className="text-muted-foreground font-body">Premium perfumers Maison Micalef approached Christabel’s to launch their perfume Notorious XOXO, inspired by London’s members’ clubs. We welcomed an exclusive, scene-savvy guestlist with gifting to celebrities and influencers.

Execution


 </p>
              </div>

              <div>
                <h4 className="font-body text-sm text-gold tracking-widest uppercase mb-2">Execution</h4>
                <p className="text-muted-foreground font-body">Full cocktail menu takeover featuring bespoke creations, prominent brand displays including backdrop and fireplace scent station. Live acoustic performance from The Molotovs, guided tasting by Brett Watterton, and exclusive member/celebrity access.</p>
              </div>
            </div>

            {/* Outcomes */}
            <div className="grid grid-cols-2 gap-4">
              {outcomes.map((outcome, index) => <motion.div key={outcome.label} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.4,
              delay: 0.4 + index * 0.1
            }} className="p-4 bg-gradient-card border border-border rounded text-center">
                  <span className="block text-2xl font-display text-gold mb-1">{outcome.metric}</span>
                  <span className="text-xs text-muted-foreground font-body uppercase tracking-wide">{outcome.label}</span>
                </motion.div>)}
            </div>
          </motion.div>
        </div>

        {/* Perfume product image at bottom of slide */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.8,
        delay: 0.4
      }} className="mt-12 relative aspect-[21/9] overflow-hidden rounded">
          <img src={micalefPerfume} alt="Maison Micalef Perfume" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
        </motion.div>
      </div>
    </SectionWrapper>;
};