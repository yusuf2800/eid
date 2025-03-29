import { motion, AnimatePresence } from "framer-motion";
import { Repeat } from "lucide-react";
import { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";

export const Card = () => {
  const messages = ["Eid Mubarak", "عيد مبارك"];
  const [index, setIndex] = useState(0);
  const [timer, setTimer] = useState(false);

  setTimeout(() => {
    setTimer(true);
  }, 3000);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="flex h-[200px] cursor-pointer flex-col items-center justify-center overflow-hidden rounded-xl border border-slate-700 bg-slate-900 px-4 text-center shadow-xl sm:w-[300px] md:w-[500px]"
      initial={{ y: 200, opacity: 0 }}
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
          transition={{ duration: 0.5 }}
        >
          {messages[index]}
        </motion.p>
      </AnimatePresence>
      {timer && (
        <TypeAnimation
          sequence={[
            "May Allah Bless You And Your Family",
            1500,
            "May Allah Accept Your Good Deeds",
            1500,
            "May Allah Forgive Your Sins",
            1500,
            "May Allah Increase Your Iman",
            1500,
            "May Allah Shower His Mercy Upon You",
            1500,
            "May Allah Save Us From The Hell Fire",
            1500,
          ]}
          speed={20}
          repeat={Infinity}
          deletionSpeed={20}
          className="mt-2 cursor-pointer text-xl text-white"
        ></TypeAnimation>
      )}
    </motion.div>
  );
};
