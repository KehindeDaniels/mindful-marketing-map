import { motion } from "framer-motion";
import BulletPoint from "../BulletPoint";
import coffeeWellness from "@/assets/coffee-wellness.jpg";

const SlideWhatsWorking = () => {
  return (
    <div className="slide-container bg-background">
      <div className="absolute right-0 top-0 w-1/3 h-full hidden lg:block">
        <img
          src={coffeeWellness}
          alt="Wellness coffee moment"
          className="w-full h-full object-cover opacity-60 dark:opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
      </div>

      <div className="slide-content relative z-10">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-primary font-body text-xs md:text-sm uppercase tracking-widest mb-3 md:mb-4"
        >
          Strengths Identified
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="slide-title max-w-xl"
        >
          Strong Foundations
          <br />
          <span className="text-muted-foreground">Already in Place</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="w-16 md:w-24 h-0.5 bg-primary mb-8 md:mb-12 origin-left"
        />

        <div className="max-w-xl space-y-1 md:space-y-2">
          <BulletPoint delay={0} variant="positive">
            Clear clean-coffee positioning with science-backed claims
          </BulletPoint>
          <BulletPoint delay={1} variant="positive">
            Goal-based sign-up form capturing customer intent
          </BulletPoint>
          <BulletPoint delay={2} variant="positive">
            Health & performance messaging alignment
          </BulletPoint>
          <BulletPoint delay={3} variant="positive">
            Natural repeat-purchase potential built into category
          </BulletPoint>
        </div>
      </div>
    </div>
  );
};

export default SlideWhatsWorking;
