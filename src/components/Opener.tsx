import { TypeAnimation } from "react-type-animation";
import { motion } from "motion/react";
import { useState } from "react";

export const Opener = () => {
  const [typingDone, setTypingDone] = useState(false);

  return (
    <>
      <motion.div
        className="fixed flex h-screen w-screen items-center justify-center"
        initial={{ y: 0, opacity: 1 }}
        animate={typingDone ? { y: 50, opacity: 0 } : {}}
        transition={{
          duration: 1.3,
          ease: "easeInOut",
          delay: typingDone ? 1.2 : 0,
        }}
      >
        <TypeAnimation
          sequence={[
            "السلام عليكم ورحمة الله وبركاته",
            () => setTypingDone(true),
          ]}
          wrapper="span"
          speed={30}
          className="font-[700] bg-gradient-to-r from-sky-500 from-10% to-emerald-500 to-90% bg-clip-text text-2xl text-transparent"
          cursor={true}
        />
      </motion.div>
    </>
  );
};
