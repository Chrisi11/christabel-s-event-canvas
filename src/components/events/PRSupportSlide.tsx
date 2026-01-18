import { motion } from "framer-motion";
import { SectionWrapper } from "./SectionWrapper";
import { Camera, Newspaper, Users, Star } from "lucide-react";

const prServices = [
  {
    icon: Camera,
    title: "Image Agency Attendance",
    description: "<strong>Getty Images</strong> & <strong>Shutterstock</strong> photographer coverage",
    isHtml: true
  },
  {
    icon: Newspaper,
    title: "PR Support",
    description: "Press links with <strong>Daily Mail</strong>, <strong>Evening Standard</strong> and <strong>Metro</strong>",
    isHtml: true
  },
  {
    icon: Users,
    title: "Influencer Marketing",
    description: "Strategic partnerships with key influencers and content creators",
    isHtml: false
  },
  {
    icon: Star,
    title: "Celebrity Guestlisting",
    description: "Access to our network of celebrity contacts and talent booking",
    isHtml: false
  }
];

export const PRSupportSlide = () => {
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
          Amplify Your Event
        </motion.span>

        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 text-center">
          PR & <span className="italic text-gradient-gold">Publicity</span>
        </h2>

        <p className="text-muted-foreground font-body text-lg text-center mb-16 max-w-2xl mx-auto">
          Maximize your event's visibility with our established press relationships and professional photography coverage.
        </p>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {prServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8 bg-gradient-card border border-border rounded group hover:border-gold/40 transition-colors duration-300"
            >
              <service.icon className="w-8 h-8 text-gold mb-4" />
              <h3 className="font-display text-2xl text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground font-body" dangerouslySetInnerHTML={{ __html: service.description }} />
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};
