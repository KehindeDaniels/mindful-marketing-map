import { motion } from "framer-motion";
import coffeeHero from "@/assets/coffee-hero.jpg";

const SlideCover = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={coffeeHero}
          alt="Premium coffee in morning light"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-balance-green/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-16 lg:px-24">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            <h2 className="text-balance-white/80 font-heading text-xl md:text-2xl font-light tracking-wide mb-6">
              Balance Coffee
            </h2>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="text-balance-white font-heading text-4xl md:text-5xl lg:text-7xl font-semibold leading-tight mb-8"
          >
            Email & SMS
            <br />
            Marketing Audit
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 120 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="h-0.5 bg-balance-white/40 mb-8"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-balance-white/70 font-body text-lg md:text-xl font-light max-w-xl leading-relaxed"
          >
            First-Month Growth Foundation
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-balance-white/50 font-body text-base md:text-lg font-light mt-4"
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
        className="absolute bottom-12 right-12 text-balance-white/30 text-sm font-body"
      >
        Prepared by Michael Olusoji
      </motion.div>
    </div>
  );
};

export default SlideCover;
