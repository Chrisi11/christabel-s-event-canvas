import { motion } from "framer-motion";
import { Mail, Phone, Instagram, MapPin } from "lucide-react";

export const ContactSlide = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-background relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold/10 blur-[120px]" />
      </div>

      <div className="max-w-3xl text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground mb-4">
            Christabel's
          </h2>
          <p className="text-gold text-sm tracking-[0.3em] uppercase font-body mb-16">
            Events & Partnerships
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6 mb-16"
        >
          <a 
            href="mailto:events@christabels.club" 
            className="flex items-center justify-center gap-3 text-foreground font-body text-lg hover:text-gold transition-colors duration-300"
          >
            <Mail className="w-5 h-5" />
            events@christabels.club
          </a>
          
          <a 
            href="tel:+442071234567" 
            className="flex items-center justify-center gap-3 text-foreground font-body text-lg hover:text-gold transition-colors duration-300"
          >
            <Phone className="w-5 h-5" />
            +44 (0) 20 7123 4567
          </a>

          <a 
            href="https://instagram.com/christabelsclub" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 text-foreground font-body text-lg hover:text-gold transition-colors duration-300"
          >
            <Instagram className="w-5 h-5" />
            @christabelsclub
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex items-center justify-center gap-2 text-muted-foreground font-body text-sm"
        >
          <MapPin className="w-4 h-4" />
          <span>24 Romilly Street, Soho, London W1D 5AH</span>
        </motion.div>

        {/* Decorative Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-16"
        />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-muted-foreground text-xs font-body tracking-widest uppercase mt-8"
        >
          Where the Night Comes Alive
        </motion.p>
      </div>
    </section>
  );
};
