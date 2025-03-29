import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import React from "react";

interface IProps {
  page: React.RefObject<HTMLDivElement | null>;
}

export const Reminder: React.FC<IProps> = ({ page }) => {
  const scrollTo = () => {
    page.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.button
      className="absolute bottom-6 flex animate-bounce cursor-pointer rounded-full bg-blue-600 px-4 py-2 text-white"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 1.3,
        ease: "easeOut",
      }}
      onClick={scrollTo}
    >
      <span className="mr-0.5">Reminders</span>{" "}
      <span className="">
        <ArrowDown />
      </span>
    </motion.button>
  );
};
