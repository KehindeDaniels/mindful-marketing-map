import { useState, useCallback, useEffect } from "react";
import SlideNavigation from "./SlideNavigation";
import SlideWrapper from "./SlideWrapper";
import ThemeToggle from "./ThemeToggle";
import SlideCover from "./slides/SlideCover";
import SlideExecutiveContext from "./slides/SlideExecutiveContext";
import SlideAuditObjective from "./slides/SlideAuditObjective";
import SlideWhatsWorking from "./slides/SlideWhatsWorking";
import SlideGaps from "./slides/SlideGaps";
import SlideMonth1Focus from "./slides/SlideMonth1Focus";
import SlideCoreFlows from "./slides/SlideCoreFlows";
import SlideExpectedImpact from "./slides/SlideExpectedImpact";
import SlideRecommendations from "./slides/SlideRecommendations";
import { useSwipe } from "@/hooks/useSwipe";

const slides = [
  SlideCover,
  SlideExecutiveContext,
  SlideAuditObjective,
  SlideWhatsWorking,
  SlideGaps,
  SlideMonth1Focus,
  SlideCoreFlows,
  SlideExpectedImpact,
  SlideRecommendations,
];

const PresentationDeck = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToNext = useCallback(() => {
    setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
  }, []);

  const goToPrevious = useCallback(() => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  }, []);

  // Swipe handlers for mobile
  const swipeHandlers = useSwipe({
    onSwipeLeft: goToNext,
    onSwipeRight: goToPrevious,
  });

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        goToNext();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        goToPrevious();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToNext, goToPrevious]);

  const CurrentSlideComponent = slides[currentSlide];

  return (
    <div
      className="relative w-full h-screen overflow-hidden bg-background"
      {...swipeHandlers}
    >
      <ThemeToggle />
      
      <SlideWrapper slideKey={currentSlide}>
        <CurrentSlideComponent />
      </SlideWrapper>

      <SlideNavigation
        currentSlide={currentSlide}
        totalSlides={slides.length}
        onPrevious={goToPrevious}
        onNext={goToNext}
      />
    </div>
  );
};

export default PresentationDeck;
