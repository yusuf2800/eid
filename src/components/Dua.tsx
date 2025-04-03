import { motion } from "framer-motion";
export const Dua = () => {
  return (
    <>
      <motion.div
        className="relative flex min-h-screen min-w-screen flex-col items-center justify-center text-center"
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <div className="w-[300px] sm:w-[500px]">
          <h1 className="text-3xl leading-9 font-[500] text-white">
            تَقَبَّلَ اللهُ مِنَّا وَمِنكُم
          </h1>
          <p className="mt-5 text-white">May Allah Accept Our Good Deeds</p>
        </div>
      </motion.div>
    </>
  );
};
