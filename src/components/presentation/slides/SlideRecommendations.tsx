import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const SlideRecommendations = () => {
  return (
    <div className="slide-container bg-primary">
      <div className="slide-content">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-primary-foreground/60 font-body text-xs md:text-sm uppercase tracking-widest mb-3 md:mb-4"
        >
          Recommendations
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-heading font-semibold tracking-tight leading-tight mb-4 md:mb-6 text-primary-foreground"
        >
          How We Scale
          <br />
          <span className="text-primary-foreground/60">Safely</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="w-16 md:w-24 h-0.5 bg-primary-foreground/40 mb-8 md:mb-12 origin-left"
        />

        <div className="max-w-4xl space-y-6 md:space-y-8 mb-10 md:mb-16">
          {[
            {
              title: "Stabilise Technical Foundation First",
              desc: "Finalise Klaviyo–Shopify integration, validate event tracking, and ensure sign-up data is stored correctly",
            },
            {
              title: "Launch Lifecycle Flows Before Scaling",
              desc: "Prioritise Welcome, Abandoned Cart, Post-Purchase, and Replenishment flows",
            },
            {
              title: "Lead with Education Over Discounts",
              desc: "Focus on clean-coffee education, performance benefits, and habit formation",
            },
            {
              title: "Introduce Subscriptions Gradually",
              desc: "Position as convenience across welcome, post-purchase, and replenishment touchpoints",
            },
            {
              title: "Scale Based on Engagement Signals",
              desc: "Increase frequency only after strong open rates, click rates, and repeat purchase behaviour",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
              className="flex items-start gap-4 md:gap-6"
            >
              <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-semibold text-sm md:text-base">
                  {index + 1}
                </span>
              </div>
              <div>
                <h3 className="text-base md:text-xl font-heading font-semibold text-primary-foreground mb-1 md:mb-2">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base font-light leading-relaxed text-primary-foreground/70">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process flow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="flex flex-wrap items-center gap-2 md:gap-4 text-primary-foreground/70"
        >
          <span className="text-sm md:text-lg font-heading font-medium">
            Audit
          </span>
          <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
          <span className="text-sm md:text-lg font-heading font-medium">
            Implementation
          </span>
          <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
          <span className="text-sm md:text-lg font-heading font-medium text-primary-foreground">
            Optimisation
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.5 }}
          className="absolute bottom-20 md:bottom-12 right-4 md:right-12 text-primary-foreground/30 text-xs md:text-sm font-body"
        >
          Balance Coffee × Email & SMS Strategy
        </motion.div>
      </div>
    </div>
  );
};

export default SlideRecommendations;
