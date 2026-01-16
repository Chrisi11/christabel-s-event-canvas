import { motion } from "framer-motion";
import { SectionWrapper } from "./SectionWrapper";
import { Check } from "lucide-react";

const partnershipTypes = [
  "Premium Spirits & Champagne",
  "Fashion & Beauty Houses",
  "Music Labels & Artists",
  "Media & Publishing",
  "Lifestyle Brands",
];

const collaborationOfferings = [
  "Bespoke cocktail creation",
  "Co-branded menu takeovers",
  "Naming rights & visibility",
  "Product sampling experiences",
  "Content capture opportunities",
  "Exclusive member access",
  "Celebrity Gifting & VIP Goodybags",
];

export const BrandCollaborationsSlide = () => {
  return (
    <SectionWrapper className="bg-gradient-section">
      <div className="max-w-5xl w-full">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-gold text-sm tracking-[0.3em] uppercase font-body mb-8 block text-center"
        >
          Partnerships
        </motion.span>

        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 text-center">
          Brand <span className="italic text-gradient-gold">Collaborations</span>
        </h2>

        <p className="text-muted-foreground font-body text-lg text-center mb-16 max-w-2xl mx-auto">
          We partner with brands that share our commitment to craft, 
          culture, and creating memorable experiences.
        </p>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Partnership Types */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <h3 className="font-display text-2xl text-foreground mb-6">Who We Work With</h3>
            {partnershipTypes.map((type, index) => (
              <motion.div
                key={type}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                className="flex items-center gap-3 text-muted-foreground font-body"
              >
                <span className="w-2 h-2 rounded-full bg-gold" />
                {type}
              </motion.div>
            ))}
          </motion.div>

          {/* Offerings */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="font-display text-2xl text-foreground mb-6">What We Offer</h3>
            {collaborationOfferings.map((offering, index) => (
              <motion.div
                key={offering}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="flex items-center gap-3 text-muted-foreground font-body"
              >
                <Check className="w-4 h-4 text-gold flex-shrink-0" />
                {offering}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
};
