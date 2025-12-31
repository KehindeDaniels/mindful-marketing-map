import { motion } from "framer-motion";
import { Mail, ShoppingCart, BookOpen, RefreshCw } from "lucide-react";

const SlideCoreFlows = () => {
  const flows = [
    {
      icon: Mail,
      title: "Welcome Series",
      emails: "5 emails",
      description: "Brand intro, education, social proof, subscription positioning",
    },
    {
      icon: ShoppingCart,
      title: "Abandoned Cart",
      emails: "3 emails",
      description: "Performance benefits, objection handling, confidence urgency",
    },
    {
      icon: BookOpen,
      title: "Post-Purchase Education",
      emails: "4 emails",
      description: "What to expect, brewing tips, habit-building, subscription intro",
    },
    {
      icon: RefreshCw,
      title: "Replenishment",
      emails: "3 emails",
      description: "Dynamic timing based on SKU, convenience messaging",
    },
  ];

  return (
    <div className="slide-container bg-muted">
      <div className="slide-content">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-muted-foreground font-body text-xs md:text-sm uppercase tracking-widest mb-3 md:mb-4"
        >
          Core Automations
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="slide-title max-w-2xl"
        >
          Automations That Do
          <br />
          <span className="text-muted-foreground">the Heavy Lifting</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="w-16 md:w-24 h-0.5 bg-primary mb-8 md:mb-12 origin-left"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-4xl">
          {flows.map((flow, index) => (
            <motion.div
              key={flow.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
              className="bg-background rounded-xl md:rounded-2xl p-4 md:p-6 border border-border shadow-soft"
            >
              <div className="flex items-start gap-3 md:gap-4">
                <div className="icon-container flex-shrink-0">
                  <flow.icon />
                </div>
                <div>
                  <div className="flex items-center gap-2 md:gap-3 mb-1 md:mb-2">
                    <h3 className="text-sm md:text-lg font-heading font-medium text-foreground">
                      {flow.title}
                    </h3>
                    <span className="text-[10px] md:text-xs font-body px-2 py-0.5 bg-secondary text-primary rounded-full">
                      {flow.emails}
                    </span>
                  </div>
                  <p className="text-muted-foreground font-light text-xs md:text-sm leading-relaxed">
                    {flow.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SlideCoreFlows;
