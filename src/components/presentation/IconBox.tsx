import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface IconBoxProps {
  icon: LucideIcon;
  title: string;
  description?: string;
  delay?: number;
  variant?: "default" | "compact";
}

const IconBox = ({
  icon: Icon,
  title,
  description,
  delay = 0,
  variant = "default",
}: IconBoxProps) => {
  if (variant === "compact") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 + delay * 0.1, duration: 0.5 }}
        className="flex items-center gap-3 md:gap-4"
      >
        <div className="icon-container flex-shrink-0">
          <Icon />
        </div>
        <span className="text-sm md:text-lg font-body font-light text-balance-neutral-600">
          {title}
        </span>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 + delay * 0.15, duration: 0.5 }}
      className="flex flex-col items-center text-center"
    >
      <div className="icon-container mb-3 md:mb-5">
        <Icon />
      </div>
      <h3 className="text-sm md:text-lg font-heading font-medium text-balance-neutral-600 mb-1 md:mb-2">
        {title}
      </h3>
      {description && (
        <p className="text-balance-neutral-400 font-light text-xs md:text-sm leading-relaxed max-w-[180px] md:max-w-[200px]">
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default IconBox;
