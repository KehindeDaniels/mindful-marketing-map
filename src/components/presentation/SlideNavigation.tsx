import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

interface SlideNavigationProps {
  currentSlide: number;
  totalSlides: number;
  onPrevious: () => void;
  onNext: () => void;
}

const SlideNavigation = ({
  currentSlide,
  totalSlides,
  onPrevious,
  onNext,
}: SlideNavigationProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-6"
    >
      <button
        onClick={onPrevious}
        disabled={currentSlide === 0}
        className="w-12 h-12 rounded-full bg-balance-white border border-balance-neutral-200 flex items-center justify-center text-balance-neutral-500 hover:text-balance-green hover:border-balance-green transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed shadow-soft"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <div className="flex items-center gap-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <div
            key={index}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "w-8 bg-balance-green"
                : "w-1.5 bg-balance-neutral-300"
            }`}
          />
        ))}
      </div>

      <button
        onClick={onNext}
        disabled={currentSlide === totalSlides - 1}
        className="w-12 h-12 rounded-full bg-balance-white border border-balance-neutral-200 flex items-center justify-center text-balance-neutral-500 hover:text-balance-green hover:border-balance-green transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed shadow-soft"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      <span className="ml-4 text-sm font-body text-balance-neutral-400">
        {currentSlide + 1} / {totalSlides}
      </span>
    </motion.div>
  );
};

export default SlideNavigation;
