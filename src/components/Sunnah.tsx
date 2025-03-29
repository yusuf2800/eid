import { motion } from "framer-motion";
import { Scale } from "lucide-react";

export const Sunnah = () => {
  const hadiths = [
    {
      path: "https://sunnah.com/bulugh/2/425",
      content:
        "On an 'Eid day, Allah's Messenger ﷺ would return by a different road from the one he had taken when going out (for the 'Eid prayer.).",
    },
    {
      path: "https://sunnah.com/bulugh/2/424",
      content:
        "Allah's Apostle never proceeded (for the prayer) on the Day of `Id-ul-Fitr unless he had eaten some dates. Anas also narrated: The Prophet used to eat odd number of dates.",
    },
    {
      path: "https://sunnah.com/ibnmajah:1098",
      content:
        "The Messenger of Allah ﷺ said: 'This day is an 'Eid (festival) which Allah has ordained for the Muslims. Whoever comes to Friday (prayer), let him take a bath and if he has perfume then let him put some on. And upon you (I urge to use) is the tooth stick.",
    },
  ];

  return (
    <div className="relative flex min-h-screen w-screen flex-col items-center justify-center">
      {hadiths.map(({ path, content }, i) => (
        <motion.a
          href={path}
          target="_blank"
          key={i}
          className="relative mx-2 my-3 flex cursor-pointer flex-col items-center justify-center rounded-lg bg-slate-800/50 p-5 text-center font-semibold text-white shadow-2xl hover:bg-slate-700 sm:w-[300px] md:w-[500px]"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1.05 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <label className="cursor-pointer">{content}</label>
        </motion.a>
      ))}
    </div>
  );
};
