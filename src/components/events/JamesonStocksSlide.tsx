import { motion } from "framer-motion";
import { SectionWrapper } from "./SectionWrapper";
import jamesonImage from "@/assets/jameson-stocks.jpg";

const sampleMenu = [
  { category: "Canapés", item: "Chicken nuggets & Caviar" },
  { category: "Canapés", item: "Truffle eclair / shaven fresh winter Truffle" },
  { category: "Starter", item: "Large pan fried hand dived scallop / Jerusalem artichoke textures" },
  { category: "Starter or Main", item: "Fillet of Cornish cod / braised cime di rapa / chili / garlic / St Austell bay mussels / sauce Maltaise" },
  { category: "Main", item: "Pork 2 ways / loin / black apples / ravioli of belly / winter vegetables" },
  { category: "Main", item: "Fillet of beef cooked pink / wild mushrooms / spinach / red wine sauce / Foie gras" },
  { category: "Dessert", item: "Crème caramel / golden raisins and Sauternes" },
  { category: "Dessert", item: "Pan fried panettone / panettone ice cream / orange foam" },
  { category: "", item: "Coffee / Tea & petit fours" },
];

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
          Michelin-Starred Celebrity Chef
        </motion.span>

        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-16 text-center">
          Jameson <span className="italic text-gradient-gold">Stocks</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="text-muted-foreground font-body leading-relaxed text-lg">
              Recognised by GQ as one of the world's leading culinary talents, Jameson Stocks is a Michelin-starred chef celebrated for his inventive, boundary-pushing approach to modern cuisine.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed">
              With a career spanning elite kitchens across Europe and North America, he has become a sought-after chef for high-profile events, cooking for celebrities including Jeff Bezos and the Kardashians.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed">
              Jameson's style blends technical precision with playful creativity, producing dishes that are as visually stunning as they are unforgettable.
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-square overflow-hidden rounded"
          >
            <img
              src={jamesonImage}
              alt="Jameson Stocks"
              className="w-full h-full object-cover sepia-[15%] saturate-[1.1] brightness-[0.95] contrast-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-orange-500/5" />
            <div className="absolute bottom-6 left-6">
              <span className="text-gold text-sm tracking-widest uppercase font-body">Private Chef</span>
              <p className="text-foreground font-display text-2xl mt-1">Jameson Stocks</p>
            </div>
          </motion.div>
        </div>

        {/* Sample Menu */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="border border-gold/20 rounded p-8 bg-card/30"
        >
          <h3 className="font-display text-2xl text-foreground mb-6 text-center">
            Sample <span className="italic text-gradient-gold">Menu</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {sampleMenu.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                className="flex gap-3"
              >
                {item.category && (
                  <span className="text-gold text-sm font-body tracking-wide shrink-0 w-28">
                    {item.category}
                  </span>
                )}
                <span className={`text-muted-foreground font-body text-sm ${!item.category ? 'text-center w-full text-gold' : ''}`}>
                  {item.item}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};
