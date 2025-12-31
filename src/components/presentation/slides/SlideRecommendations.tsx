import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const SlideRecommendations = () => {
  return (
    <div className="slide-container bg-primary">
      <div className="slide-content">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-primary-foreground/60 font-body text-xs md:text-sm uppercase tracking-widest mb-3 md:mb-4"
        >
          Recommendations
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-heading font-semibold tracking-tight leading-tight mb-4 md:mb-6 text-primary-foreground"
        >
          How We Scale
          <br />
          <span className="text-primary-foreground/60">Safely</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="w-16 md:w-24 h-0.5 bg-primary-foreground/40 mb-8 md:mb-12 origin-left"
        />

        <div className="max-w-xl space-y-3 md:space-y-4 mb-10 md:mb-16">
          {[
            "Finalise technical foundation before scaling",
            "Launch lifecycle flows first, campaigns second",
            "Prioritise education over discounts",
            "Scale volume based on engagement signals",
          ].map((text, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
              className="flex items-start gap-3 md:gap-4"
            >
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full mt-2 md:mt-2.5 flex-shrink-0 bg-primary-foreground/60" />
              <p className="text-base md:text-xl font-light leading-relaxed text-primary-foreground/90">
                {text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Process flow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="flex flex-wrap items-center gap-2 md:gap-4 text-primary-foreground/70"
        >
          <span className="text-sm md:text-lg font-heading font-medium">Audit</span>
          <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
          <span className="text-sm md:text-lg font-heading font-medium">Implementation</span>
          <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
          <span className="text-sm md:text-lg font-heading font-medium text-primary-foreground">
            Optimisation
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.5 }}
          className="absolute bottom-20 md:bottom-12 right-4 md:right-12 text-primary-foreground/30 text-xs md:text-sm font-body"
        >
          Balance Coffee × Email & SMS Strategy
        </motion.div>
      </div>
    </div>
  );
};

export default SlideRecommendations;
