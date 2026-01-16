import { motion } from "framer-motion";
import { SectionWrapper } from "./SectionWrapper";

export const JamesonStocksSlide = () => {
  return (
    <SectionWrapper className="bg-gradient-section">
      <div className="max-w-6xl w-full">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-gold text-sm tracking-[0.3em] uppercase font-body mb-8 block text-center"
        >
          Private Chef
        </motion.span>

        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-16 text-center">
          Jameson <span className="italic text-gradient-gold">Stocks</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="text-muted-foreground font-body leading-relaxed text-lg">
              Our in-house Private Chef brings culinary artistry to every Christabel's event, crafting bespoke menus that complement our atmosphere of creative rebellion.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed">
              From intimate private dining experiences to large-scale event catering, Jameson creates menus tailored to each occasion—whether an elegant seated dinner or curated canapés for a cocktail reception.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed">
              With a focus on seasonal ingredients and bold flavours, every dish is designed to surprise and delight, elevating the Christabel's experience beyond the ordinary.
            </p>
          </motion.div>

          {/* Placeholder for image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-square overflow-hidden rounded bg-muted/20 flex items-center justify-center"
          >
            <div className="text-center p-8">
              <span className="text-gold text-sm tracking-widest uppercase font-body block mb-2">Private Chef</span>
              <p className="text-foreground font-display text-2xl">Jameson Stocks</p>
              <p className="text-muted-foreground text-sm mt-4 font-body">Image coming soon</p>
            </div>
            <div className="absolute inset-0 border border-gold/20 rounded pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
};
