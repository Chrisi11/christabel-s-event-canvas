import { motion } from "framer-motion";
import { SectionWrapper } from "./SectionWrapper";
import brettImage from "@/assets/brett-watterton.jpg";

export const BrettWattertonSlide = () => {
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
          Beverage Director
        </motion.span>

        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-16 text-center">
          Brett <span className="italic text-gradient-gold">Watterton</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center md:grid-flow-dense">
          {/* Image with filter */}
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="text-muted-foreground font-body leading-relaxed text-lg">
              With over a decade of global experience as a bar founder and consultant, Brett curates story-led cocktail programming that transforms each evening into a sensory journey.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed">
              A bar founder, consultant, and creative force, Brett has launched multiple acclaimed venues, including one nominated for the <strong>World's 50 Best Bars</strong>, and collaborated with prestigious clubs such as <strong>Soho House</strong> and <strong>The RAC Club</strong>.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed">
              Known for his innovative, culturally attuned approach, Brett combines technical mastery with creative instinct, crafting drinks that are both thoughtful and quietly disruptive. Setting the tone for Christabel's as a late-night destination for culture, creativity, and exceptional cocktails.
            </p>
          </motion.div>

          {/* Image with filter */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-square overflow-hidden rounded md:col-start-2"
          >
            <img
              src={brettImage}
              alt="Brett Watterton"
              className="w-full h-full object-cover sepia-[15%] saturate-[1.1] brightness-[0.95] contrast-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-orange-500/5" />
            <div className="absolute bottom-6 left-6">
              <span className="text-gold text-sm tracking-widest uppercase font-body">Beverage Director</span>
              <p className="text-foreground font-display text-2xl mt-1">Brett Watterton</p>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
};
