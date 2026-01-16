import { motion } from "framer-motion";
import { SectionWrapper } from "./SectionWrapper";
import { 
  Settings, 
  Users, 
  Volume2, 
  ClipboardList, 
  Clock,
  Shield
} from "lucide-react";

const productionServices = [
  { icon: Settings, title: "Event Production", description: "End-to-end event management and coordination" },
  { icon: Users, title: "Staffing", description: "Professional bar, floor, and security teams" },
  { icon: Volume2, title: "Sound & Lighting", description: "State-of-the-art AV equipment and technicians" },
  { icon: ClipboardList, title: "Guestlist Management", description: "Curated door policy and RSVP handling" },
  { icon: Clock, title: "Run of Show", description: "Detailed timeline planning and execution" },
  { icon: Shield, title: "Security", description: "Discreet, professional door management" },
];

export const ProductionSlide = () => {
  return (
    <SectionWrapper className="bg-background">
      <div className="max-w-5xl w-full">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-gold text-sm tracking-[0.3em] uppercase font-body mb-8 block text-center"
        >
          For Agencies
        </motion.span>

        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 text-center">
          Production & <span className="italic text-gradient-gold">Support</span>
        </h2>

        <p className="text-muted-foreground font-body text-lg text-center mb-16 max-w-2xl mx-auto">
          We understand the demands of agency and brand events. 
          Our team provides comprehensive production support to ensure flawless execution.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {productionServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-6 bg-gradient-card border border-border rounded group hover:border-gold/40 transition-colors duration-300"
            >
              <service.icon className="w-6 h-6 text-gold mb-4" />
              <h3 className="font-display text-xl text-foreground mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground font-body">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};
