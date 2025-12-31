import { motion } from "framer-motion";
import { Database, Zap, GraduationCap, Repeat } from "lucide-react";

const SlideMonth1Focus = () => {
  const phases = [
    {
      icon: Database,
      title: "Validate Data",
      description: "Integration & tracking",
      week: "Week 1-2",
    },
    {
      icon: Zap,
      title: "Launch Core Flows",
      description: "Welcome, Cart, Post-Purchase",
      week: "Week 2-3",
    },
    {
      icon: GraduationCap,
      title: "Lead with Education",
      description: "Not discounts",
      week: "Week 3-4",
    },
    {
      icon: Repeat,
      title: "Introduce Subscriptions",
      description: "Through value",
      week: "Week 4+",
    },
  ];

  return (
    <div className="slide-container bg-background">
      <div className="slide-content">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-muted-foreground font-body text-xs md:text-sm uppercase tracking-widest mb-3 md:mb-4"
        >
          Strategic Focus
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="slide-title max-w-2xl"
        >
          First Month:
          <br />
          <span className="text-muted-foreground">Build the Revenue Foundation</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="w-16 md:w-24 h-0.5 bg-primary mb-10 md:mb-16 origin-left"
        />

        {/* Timeline */}
        <div className="relative max-w-5xl">
          {/* Connection line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="absolute top-5 md:top-7 left-5 md:left-7 right-5 md:right-7 h-0.5 bg-secondary origin-left hidden md:block"
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.15, duration: 0.5 }}
                className="relative"
              >
                <div className="icon-container mb-3 md:mb-5 relative z-10">
                  <phase.icon />
                </div>
                <span className="text-[10px] md:text-xs font-body text-primary uppercase tracking-widest mb-1 md:mb-2 block">
                  {phase.week}
                </span>
                <h3 className="text-sm md:text-lg font-heading font-medium text-foreground mb-0.5 md:mb-1">
                  {phase.title}
                </h3>
                <p className="text-muted-foreground font-light text-xs md:text-sm">
                  {phase.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideMonth1Focus;
