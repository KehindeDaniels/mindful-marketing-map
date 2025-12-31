import { motion } from "framer-motion";
import { RefreshCw, GraduationCap, Heart } from "lucide-react";
import IconBox from "../IconBox";

const SlideExecutiveContext = () => {
  return (
    <div className="slide-container bg-muted">
      <div className="slide-content">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-muted-foreground font-body text-xs md:text-sm uppercase tracking-widest mb-3 md:mb-4"
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
          <span className="text-muted-foreground">for Balance Coffee</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="w-16 md:w-24 h-0.5 bg-primary mb-10 md:mb-16 origin-left"
        />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-16 max-w-4xl">
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
