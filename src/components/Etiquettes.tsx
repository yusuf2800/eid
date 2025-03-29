import { motion } from "framer-motion";

export const Etiquettes = () => {
  const sunnahs = [
    "To Wake Up Early",
    "To Clean The Teeth With The Miswak",
    "To Do Ghusl",
    "To Use Itr",
    "To Eat An Odd Number Of Dates",
    "To Go Early To Eid Salah",
    "To Go walking To Eid Salah",
    "To Give Sadaqah Fitr Before Eid Salah",
    "To Use Different Routes To And From The Place Of Eid Salah",
  ];

  return (
    <>
      <div className="relative flex min-h-screen w-screen flex-col items-center justify-center overflow-hidden">
        <motion.h1
          className="mt-15 mb-4 text-3xl font-bold text-white"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1.05 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          Etiquettes For Eid
        </motion.h1>
        {sunnahs.map((sunnah, i) => (
          <motion.div
            key={i}
            className="relative mx-2 my-4 flex w-[350px] cursor-pointer flex-col items-center justify-center rounded-lg bg-slate-800/50 p-5 text-center font-semibold text-white shadow-2xl hover:bg-slate-700 md:w-[500px]"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1.05 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            <label className="cursor-pointer">{sunnah}</label>
          </motion.div>
        ))}
      </div>
    </>
  );
};
