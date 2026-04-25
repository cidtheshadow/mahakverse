import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

interface StickerProps {
  src: string;
  alt: string;
  className?: string;
  tilt?: "left" | "right" | "none";
  size?: "sm" | "md" | "lg";
}

export const Sticker = ({ src, alt, className, tilt = "none", size = "md" }: StickerProps) => {
  const tiltClass = tilt === "left" ? "-rotate-6" : tilt === "right" ? "rotate-6" : "";
  const sizeClass = size === "sm" ? "w-24 h-24" : size === "md" ? "w-32 h-32" : "w-48 h-48";

  return (
    <motion.div
      whileHover={{ scale: 1.1, rotate: tilt === "left" ? -8 : tilt === "right" ? 8 : 2 }}
      className={cn(
        "sticker-border bg-white p-2 inline-block relative z-10",
        tiltClass,
        className
      )}
    >
      <img src={src} alt={alt} className={cn("object-cover", sizeClass)} />
    </motion.div>
  );
};
