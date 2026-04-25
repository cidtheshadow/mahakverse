import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

interface ScrapbookCardProps {
  children: React.ReactNode;
  className?: string;
  tilt?: "left" | "right" | "none";
  hasTape?: boolean;
}

export const ScrapbookCard = ({ 
  children, 
  className, 
  tilt = "none",
  hasTape = false 
}: ScrapbookCardProps) => {
  const tiltClass = tilt === "left" ? "tilt-left" : tilt === "right" ? "tilt-right" : "";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className={cn(
        "scrapbook-card p-6 border-4 border-black relative",
        hasTape && "tape-effect",
        tiltClass,
        className
      )}
    >
      {children}
    </motion.div>
  );
};
