import { motion } from "framer-motion";
import BulletPoint from "../BulletPoint";

const SlideGaps = () => {
  return (
    <div className="slide-container bg-balance-neutral-200">
      <div className="slide-content">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-destructive font-body text-sm uppercase tracking-widest mb-4"
        >
          Gaps & Opportunities
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="slide-title max-w-2xl"
        >
          Where Revenue Is
          <br />
          <span className="text-balance-neutral-500">Being Left on the Table</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="w-24 h-0.5 bg-destructive/60 mb-12 origin-left"
        />

        <div className="max-w-xl space-y-2">
          <BulletPoint delay={0} variant="alert">
            Subscriber data under-utilised for personalisation
          </BulletPoint>
          <BulletPoint delay={1} variant="alert">
            No core automated flows capturing high-intent actions
          </BulletPoint>
          <BulletPoint delay={2} variant="alert">
            Subscription value under-communicated to customers
          </BulletPoint>
          <BulletPoint delay={3} variant="alert">
            Replenishment and reordering not systemised
          </BulletPoint>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="mt-12 p-6 bg-background/60 backdrop-blur-sm rounded-2xl max-w-lg border border-balance-neutral-300"
        >
          <p className="text-balance-neutral-500 font-body text-sm leading-relaxed">
            <span className="text-balance-green font-medium">High upside, low complexity:</span>{" "}
            With no legacy issues, best practices can be implemented cleanly from day one.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default SlideGaps;
