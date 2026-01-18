import { motion } from "framer-motion";
import { SectionWrapper } from "./SectionWrapper";
import { Instagram, Camera, Users, Newspaper, Share2 } from "lucide-react";

const amplificationPoints = [
  { icon: Instagram, title: "Social Coverage", description: "Real-time content across our channels" },
  { icon: Users, title: "Talent Attendance", description: "Influential members and guests" },
  { icon: Share2, title: "Organic Reach", description: "Amplification through member networks" },
  { icon: Camera, title: "Content Capture", description: "Professional photo & video available" },
  { icon: Newspaper, title: "Press Potential", description: "Media connections and coverage" },
  { icon: Camera, title: "Paparazzi & Image Agencies", description: "<strong>Getty Images</strong>, <strong>Shutterstock</strong> & press photography partners", isHtml: true },
];

export const AmplificationSlide = () => {
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
          Reach
        </motion.span>

        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 text-center">
          Content & <span className="italic text-gradient-gold">Amplification</span>
        </h2>

        <p className="text-muted-foreground font-body text-lg text-center mb-16 max-w-2xl mx-auto">
          Your event doesn't end at the door. We help you capture and amplify 
          the moments that matter.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amplificationPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full border border-gold/30 flex items-center justify-center mx-auto mb-4">
                <point.icon className="w-7 h-7 text-gold" />
              </div>
              <h3 className="font-display text-xl text-foreground mb-2">{point.title}</h3>
              {'isHtml' in point && point.isHtml ? (
                <p className="text-sm text-muted-foreground font-body" dangerouslySetInnerHTML={{ __html: point.description }} />
              ) : (
                <p className="text-sm text-muted-foreground font-body">{point.description}</p>
              )}
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 grid md:grid-cols-3 gap-8 text-center"
        >
          <div>
            <span className="block text-4xl md:text-5xl font-display text-gold mb-2">25K+</span>
            <span className="text-sm text-muted-foreground font-body uppercase tracking-wide">Social Following</span>
          </div>
          <div>
            <span className="block text-4xl md:text-5xl font-display text-gold mb-2">500K+</span>
            <span className="text-sm text-muted-foreground font-body uppercase tracking-wide">Avg. Event Reach</span>
          </div>
          <div>
            <span className="block text-4xl md:text-5xl font-display text-gold mb-2">50+</span>
            <span className="text-sm text-muted-foreground font-body uppercase tracking-wide">Media Partners</span>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};
