import { motion } from "framer-motion";
import { SectionWrapper } from "./SectionWrapper";
import privateDining from "@/assets/private-dining-new.jpg";
const hireOptions = [{
  title: "Full Venue",
  capacity: "150 standing / 80 seated",
  description: "Complete exclusivity for your event"
}, {
  title: "Private Dining",
  capacity: "25–30 seated",
  description: "Intimate dinner experience"
}];
export const PrivateHireSlide = () => {
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
          Hire Options
        </motion.span>

        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-16 text-center">
          Private <span className="italic text-gradient-gold">Hire</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
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
        }} className="relative aspect-[4/3] overflow-hidden rounded order-2 lg:order-1">
            <img src={privateDining} alt="Private Dining at Christabel's" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-background/40 to-transparent" />
          </motion.div>

          {/* Options */}
          <div className="space-y-6 order-1 lg:order-2">
            {hireOptions.map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="p-6 border border-gold/20 rounded bg-card/30"
              >
                <h3 className="font-display text-2xl text-foreground mb-2">{option.title}</h3>
                <p className="text-gold text-sm font-body tracking-wide mb-2">{option.capacity}</p>
                <p className="text-muted-foreground font-body">{option.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
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
      }} className="text-center space-y-4">
          <p className="text-muted-foreground font-body">
            <span className="text-foreground">Typical hire windows:</span> 6pm – 4am
          </p>
          <p className="text-muted-foreground font-body">
            <span className="text-foreground">Day-to-night formats available</span> for extended programming
          </p>
          <p className="text-gold font-body text-sm tracking-wide mt-8">
            Pricing available on request — tailored to format & production requirements
          </p>
        </motion.div>
      </div>
    </SectionWrapper>;
};