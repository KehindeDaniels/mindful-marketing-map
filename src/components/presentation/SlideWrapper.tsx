import { motion, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";

interface SlideWrapperProps {
  children: ReactNode;
  slideKey: number;
  className?: string;
}

const SlideWrapper = ({ children, slideKey, className = "" }: SlideWrapperProps) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={slideKey}
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -40 }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0, 0.2, 1],
        }}
        className={`slide-container ${className}`}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default SlideWrapper;
