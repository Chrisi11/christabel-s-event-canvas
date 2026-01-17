import { motion } from "framer-motion";
import heroImage from "@/assets/hero-club.jpg";
import christabelsLogo from "@/assets/christabels-logo.png";
export const CoverSlide = () => {
  return <section className="print-slide relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${heroImage})`
    }} />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 1,
        delay: 0.3
      }}>
          <img src={christabelsLogo} alt="Christabel's" className="h-32 md:h-48 lg:h-64 w-auto mb-6 mx-auto" />
        </motion.div>
        
        <motion.p initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.6
      }} className="font-body text-lg md:text-xl text-muted-foreground tracking-widest uppercase mb-8">
          Late-Night Members Club & Cultural Salon
        </motion.p>
        
        <motion.p initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        duration: 0.8,
        delay: 0.9
      }} className="font-body text-sm md:text-base text-gold tracking-wider uppercase mb-12">
          Private Events & Brand Collaborations
        </motion.p>

        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        duration: 0.8,
        delay: 1.2
      }} className="space-y-2 text-muted-foreground font-body text-sm tracking-wide">
          <p>4 Winsley Street</p>
          <p>London W1W 8HF  
www.christabels.com
        </p>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      duration: 1,
      delay: 1.5
    }} className="absolute bottom-10 left-1/2 -translate-x-1/2" data-print-hide>
        <motion.div animate={{
        y: [0, 10, 0]
      }} transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }} className="w-px h-16 bg-gradient-to-b from-gold to-transparent" />
      </motion.div>
    </section>;
};