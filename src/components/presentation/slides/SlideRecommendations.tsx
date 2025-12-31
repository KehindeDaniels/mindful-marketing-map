import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import BulletPoint from "../BulletPoint";

const SlideRecommendations = () => {
  return (
    <div className="slide-container bg-balance-green">
      <div className="slide-content">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-balance-white/60 font-body text-sm uppercase tracking-widest mb-4"
        >
          Recommendations
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold tracking-tight leading-tight mb-6 text-balance-white"
        >
          How We Scale
          <br />
          <span className="text-balance-white/60">Safely</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="w-24 h-0.5 bg-balance-white/40 mb-12 origin-left"
        />

        <div className="max-w-xl space-y-4 mb-16">
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
              className="flex items-start gap-4"
            >
              <div className="w-2 h-2 rounded-full mt-2.5 flex-shrink-0 bg-balance-white/60" />
              <p className="text-lg md:text-xl font-light leading-relaxed text-balance-white/90">
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
          className="flex items-center gap-4 text-balance-white/70"
        >
          <span className="text-lg font-heading font-medium">Audit</span>
          <ArrowRight className="w-5 h-5" />
          <span className="text-lg font-heading font-medium">Implementation</span>
          <ArrowRight className="w-5 h-5" />
          <span className="text-lg font-heading font-medium text-balance-white">
            Optimisation
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.5 }}
          className="absolute bottom-12 right-12 text-balance-white/30 text-sm font-body"
        >
          Balance Coffee × Email & SMS Strategy
        </motion.div>
      </div>
    </div>
  );
};

export default SlideRecommendations;
