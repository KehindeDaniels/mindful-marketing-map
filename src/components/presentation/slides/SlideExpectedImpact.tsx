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
          className="text-balance-neutral-400 font-body text-sm uppercase tracking-widest mb-4"
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
          <span className="text-balance-neutral-400">Looks Like</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="w-24 h-0.5 bg-balance-green mb-12 origin-left"
        />

        {/* Key outcomes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-3">
              <TrendingUp className="w-6 h-6 text-balance-green" />
              <span className="text-4xl font-heading font-semibold text-balance-green">
                20-30%
              </span>
            </div>
            <p className="text-balance-neutral-500 font-light">
              Revenue contribution from email
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-3">
              <Repeat className="w-6 h-6 text-balance-green" />
              <span className="text-4xl font-heading font-semibold text-balance-green">
                Higher
              </span>
            </div>
            <p className="text-balance-neutral-500 font-light">
              Repeat purchase rate
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-3">
              <Users className="w-6 h-6 text-balance-green" />
              <span className="text-4xl font-heading font-semibold text-balance-green">
                Increased
              </span>
            </div>
            <p className="text-balance-neutral-500 font-light">
              Subscription adoption
            </p>
          </motion.div>
        </div>

        {/* KPI indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          {metrics.map((metric, index) => (
            <div
              key={metric.label}
              className="flex items-center gap-3 px-5 py-3 bg-balance-neutral-100 rounded-xl"
            >
              <metric.icon className="w-5 h-5 text-balance-green" />
              <div>
                <span className="text-sm font-medium text-balance-neutral-600 block">
                  {metric.label}
                </span>
                <span className="text-xs text-balance-neutral-400">
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
