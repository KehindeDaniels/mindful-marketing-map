import { motion } from "framer-motion";
import coffeeHero from "@/assets/coffee-hero.jpg";

const SlideCover = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={coffeeHero}
          alt="Premium coffee in morning light"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/75 dark:bg-primary/85" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center px-4 sm:px-6 md:px-12 lg:px-24 py-8 pb-24">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            <h2 className="text-primary-foreground/80 font-heading text-base sm:text-xl md:text-2xl font-light tracking-wide mb-4 md:mb-6">
              Balance Coffee
            </h2>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="text-primary-foreground font-heading text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-semibold leading-tight mb-6 md:mb-8"
          >
            Email & SMS
            <br />
            Marketing Audit
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 80 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="h-0.5 bg-primary-foreground/40 mb-6 md:mb-8 md:w-[120px]"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-primary-foreground/70 font-body text-base sm:text-lg md:text-xl font-light max-w-xl leading-relaxed"
          >
            First-Month Growth Foundation
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-primary-foreground/50 font-body text-sm sm:text-base md:text-lg font-light mt-3 md:mt-4"
          >
            Building trust, habit, and repeat purchase before scaling
          </motion.p>
        </div>
      </div>

      {/* Bottom decorative element */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-20 md:bottom-12 right-4 md:right-12 text-primary-foreground/30 text-xs md:text-sm font-body"
      >
        Prepared by Michael Olusoji
      </motion.div>
    </div>
  );
};

export default SlideCover;
