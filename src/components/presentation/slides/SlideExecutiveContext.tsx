import { motion } from "framer-motion";
import { RefreshCw, GraduationCap, Heart } from "lucide-react";
import IconBox from "../IconBox";

const SlideExecutiveContext = () => {
  return (
    <div className="slide-container bg-balance-neutral-100">
      <div className="slide-content">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-balance-neutral-400 font-body text-sm uppercase tracking-widest mb-4"
        >
          Executive Context
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="slide-title"
        >
          Why Email & SMS Matter
          <br />
          <span className="text-balance-neutral-400">for Balance Coffee</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="w-24 h-0.5 bg-balance-green mb-16 origin-left"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 max-w-4xl">
          <IconBox
            icon={RefreshCw}
            title="Habit-Driven Category"
            description="Coffee is a repeat-purchase product with natural reorder cycles"
            delay={0}
          />
          <IconBox
            icon={GraduationCap}
            title="Education-Led Trust"
            description="Clean coffee benefits require explanation and credibility building"
            delay={1}
          />
          <IconBox
            icon={Heart}
            title="Retention Power"
            description="Email & SMS drive subscriptions and long-term customer value"
            delay={2}
          />
        </div>
      </div>
    </div>
  );
};

export default SlideExecutiveContext;
