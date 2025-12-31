import { motion } from "framer-motion";
import { Settings, Users, GitBranch, MessageSquare } from "lucide-react";
import IconBox from "../IconBox";

const SlideAuditObjective = () => {
  return (
    <div className="slide-container bg-background">
      <div className="slide-content">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-balance-neutral-400 font-body text-sm uppercase tracking-widest mb-4"
        >
          Audit Scope
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="slide-title max-w-2xl"
        >
          What Was Reviewed
          <br />
          <span className="text-balance-neutral-400">Before Scaling</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="w-24 h-0.5 bg-balance-green mb-16 origin-left"
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-5xl">
          <IconBox
            icon={Settings}
            title="Technical & Data"
            description="Integration health and tracking validation"
            delay={0}
          />
          <IconBox
            icon={Users}
            title="Subscriber Capture"
            description="Sign-up forms and consent compliance"
            delay={1}
          />
          <IconBox
            icon={GitBranch}
            title="Customer Journey"
            description="Buying behaviour and lifecycle gaps"
            delay={2}
          />
          <IconBox
            icon={MessageSquare}
            title="Brand Voice"
            description="Messaging alignment and tone"
            delay={3}
          />
        </div>
      </div>
    </div>
  );
};

export default SlideAuditObjective;
