import { motion } from "framer-motion";
import { Check, AlertCircle } from "lucide-react";

interface BulletPointProps {
  children: string;
  delay?: number;
  variant?: "default" | "positive" | "alert";
}

const BulletPoint = ({
  children,
  delay = 0,
  variant = "default",
}: BulletPointProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.4 + delay * 0.1, duration: 0.4 }}
      className="bullet-item"
    >
      {variant === "positive" ? (
        <div className="w-6 h-6 rounded-full bg-balance-green-light flex items-center justify-center flex-shrink-0 mt-0.5">
          <Check className="w-3.5 h-3.5 text-balance-green" />
        </div>
      ) : variant === "alert" ? (
        <div className="w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-0.5">
          <AlertCircle className="w-3.5 h-3.5 text-destructive" />
        </div>
      ) : (
        <div className="bullet-dot" />
      )}
      <p className="bullet-text">{children}</p>
    </motion.div>
  );
};

export default BulletPoint;
