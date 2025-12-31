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
      className="fixed bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 md:gap-6 bg-card/80 backdrop-blur-md px-4 py-2 md:px-6 md:py-3 rounded-full border border-border shadow-soft"
    >
      <button
        onClick={onPrevious}
        disabled={currentSlide === 0}
        className="w-9 h-9 md:w-12 md:h-12 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
      >
        <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
      </button>

      <div className="flex items-center gap-1 md:gap-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <div
            key={index}
            className={`h-1 md:h-1.5 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "w-4 md:w-8 bg-primary"
                : "w-1 md:w-1.5 bg-muted-foreground/30"
            }`}
          />
        ))}
      </div>

      <button
        onClick={onNext}
        disabled={currentSlide === totalSlides - 1}
        className="w-9 h-9 md:w-12 md:h-12 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
      >
        <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
      </button>

      <span className="hidden md:block ml-2 text-sm font-body text-muted-foreground">
        {currentSlide + 1} / {totalSlides}
      </span>
    </motion.div>
  );
};

export default SlideNavigation;
