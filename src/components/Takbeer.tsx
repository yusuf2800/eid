import { motion } from "framer-motion";
export const Takbeer = () => {
  return (
    <>
      <motion.div className="relative flex min-h-screen min-w-screen flex-col items-center justify-center text-center" initial={{y: 100, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 1.5, ease: "easeInOut"}}>
        <div className="w-[300px] sm:w-[500px]">
          <h1 className="text-3xl leading-12 font-[500] text-white">
            اللَّهُ أَكْبَرُ اللَّهُ أَكْبَرُ لَا إلَهَ إلَّا اللَّهُ.
            وَاَللَّهُ أَكْبَرُ اللَّهُ أَكْبَرُ وَلِلَّهِ الْحَمْدُ
          </h1>
          <p className="mt-5 text-white">
            Allah is the greatest, Allah is the greatest, there is no god but
            Allah. And Allah is the greatest, Allah is the greatest and to Allah
            belongs all praise.
          </p>
        </div>
      </motion.div>
    </>
  );
};
