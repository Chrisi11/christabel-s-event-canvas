import { motion } from "framer-motion";
import { SectionWrapper } from "./SectionWrapper";
import { 
  Sparkles, 
  Music, 
  Mic2, 
  Users, 
  Camera, 
  Wine, 
  Palette,
  Radio
} from "lucide-react";

const eventFormats = [
  { icon: Sparkles, title: "Brand Launches", description: "Make your debut unforgettable" },
  { icon: Wine, title: "Film Premiere Afterparties", description: "Discreet Central London for after parties" },
  { icon: Music, title: "Live Music & Listening Parties", description: "Intimate artist performances & album premieres" },
  { icon: Mic2, title: "Panel Talks & Podcasts", description: "Cultural conversations" },
  { icon: Palette, title: "Fashion & Beauty Launches", description: "Activations with impact" },
  { icon: Users, title: "Private Dinners", description: "Exclusive seated experiences by Celebrity Chef Jameson Stocks" },
  { icon: Camera, title: "Press & Influencer Events", description: "Industry nights with reach" },
  { icon: Radio, title: "Fashion Week Parties", description: "Exclusive after-show celebrations" },
];

export const EventFormatsSlide = () => {
  return (
    <SectionWrapper className="bg-background">
      <div className="max-w-6xl w-full">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-gold text-sm tracking-[0.3em] uppercase font-body mb-8 block text-center"
        >
          What We Host
        </motion.span>

        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-16 text-center">
          Event <span className="italic text-gradient-gold">Formats</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {eventFormats.map((format, index) => (
            <motion.div
              key={format.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="group p-6 bg-gradient-card border border-border rounded hover:border-gold/50 transition-colors duration-300"
            >
              <format.icon className="w-8 h-8 text-gold mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-display text-xl text-foreground mb-2">{format.title}</h3>
              <p className="text-sm text-muted-foreground font-body">{format.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};
