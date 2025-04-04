import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

interface IProps {
  page: React.RefObject<HTMLDivElement | null>;
}

export const Reminder: React.FC<IProps> = ({ page }) => {
  const scrollTo = () => {
    page.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };


  return (
    <motion.button
      className="absolute bottom-29 flex animate-bounce cursor-pointer rounded-full bg-blue-600 px-4 py-2 text-white"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 1.3,
        ease: "easeOut",
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 1.05 }}
      whileInView={{ y: 0, opacity: 1 }}
      onClick={scrollTo}
    >
      <span className="mr-0.5">Reminders</span>{" "}
      <span className="">
        <ArrowDown />
      </span>
    </motion.button>
  );
};
