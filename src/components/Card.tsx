import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export const Card = () => {
  const messages = ["Eid Mubarak", "عيد مبارك"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="flex h-[200px] cursor-pointer flex-col items-center justify-center overflow-hidden rounded-xl border border-slate-700 bg-slate-900 px-4 text-center shadow-xl sm:w-[300px] md:w-[500px]"
      initial={{ y: 200, opacity: 0}}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.3, ease: "easeOut" }}
    >
      <AnimatePresence mode="wait">
        <motion.p
          key={messages[index]}
          className="text-3xl font-bold text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: .5 }}
        >
          {messages[index]}
        </motion.p>
      </AnimatePresence>
      <label className="mt-2 cursor-pointer text-xl text-white">
        May Allah Bless You And Your Family
      </label>
    </motion.div>
  );
};
