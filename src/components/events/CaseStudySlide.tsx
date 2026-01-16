import { motion } from "framer-motion";
import { SectionWrapper } from "./SectionWrapper";
import cocktailBar from "@/assets/cocktail-bar.jpg";
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
          {/* Image */}
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
        }} className="relative aspect-[4/3] overflow-hidden rounded">
            <img src={cocktailBar} alt="Case Study - Coracho Tequila" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
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
              Christabel's Launch  <span className="text-gold">​with</span> Coracho Tequila
            </h2>
            <p className="text-muted-foreground font-body mb-8">Winter 2025</p>

            <div className="space-y-6 mb-10">
              <div>
                <h4 className="font-body text-sm text-gold tracking-widest uppercase mb-2">Objective</h4>
                <p className="text-muted-foreground font-body">Launch Christabel's premium tequila range to London's taste-making crowd with an immersive brand experience.</p>
              </div>

              <div>
                <h4 className="font-body text-sm text-gold tracking-widest uppercase mb-2">Execution</h4>
                <p className="text-muted-foreground font-body">Full cocktail menu takeover featuring bespoke creations, live acoustic performance from The Molotovs, guided tasting by Brett Watterton, and exclusive member access.</p>
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
      </div>
    </SectionWrapper>;
};