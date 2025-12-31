import { motion } from "framer-motion";
import { TrendingUp, Repeat, Users, Activity, DollarSign, Clock } from "lucide-react";

const SlideExpectedImpact = () => {
  const metrics = [
    { icon: Activity, label: "Engagement Health", sublabel: "Open & click rates" },
    { icon: DollarSign, label: "Flow Revenue", sublabel: "Automation contribution" },
    { icon: Clock, label: "Time to 2nd Purchase", sublabel: "Retention velocity" },
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
          Expected Impact
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="slide-title max-w-2xl"
        >
          What Success
          <br />
          <span className="text-muted-foreground">Looks Like</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="w-16 md:w-24 h-0.5 bg-primary mb-8 md:mb-12 origin-left"
        />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 max-w-4xl mb-10 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-2 md:gap-3 mb-2 md:mb-3">
              <TrendingUp className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              <span className="text-2xl md:text-4xl font-heading font-semibold text-primary">
                20-30%
              </span>
            </div>
            <p className="text-muted-foreground font-light text-sm">
              Revenue contribution from email
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-2 md:gap-3 mb-2 md:mb-3">
              <Repeat className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              <span className="text-2xl md:text-4xl font-heading font-semibold text-primary">
                Higher
              </span>
            </div>
            <p className="text-muted-foreground font-light text-sm">
              Repeat purchase rate
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-2 md:gap-3 mb-2 md:mb-3">
              <Users className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              <span className="text-2xl md:text-4xl font-heading font-semibold text-primary">
                Increased
              </span>
            </div>
            <p className="text-muted-foreground font-light text-sm">
              Subscription adoption
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="flex flex-wrap gap-3 md:gap-4 justify-center"
        >
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="flex items-center gap-2 md:gap-3 px-3 md:px-5 py-2 md:py-3 bg-muted rounded-lg md:rounded-xl"
            >
              <metric.icon className="w-4 h-4 md:w-5 md:h-5 text-primary" />
              <div>
                <span className="text-xs md:text-sm font-medium text-foreground block">
                  {metric.label}
                </span>
                <span className="text-[10px] md:text-xs text-muted-foreground">
                  {metric.sublabel}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SlideExpectedImpact;
