import { Opener } from "./components/Opener";
import { Card } from "./components/Card";
import { useRef, useState } from "react";
import { Reminder } from "./components/ReminderBtn";
import { Sunnah } from "./components/Sunnah";
import { Takbeer } from "./components/Takbeer";
import { Links } from "./components/Links";
import { Etiquettes } from "./components/Etiquettes";
import { Dua } from "./components/Dua";
import { motion, useScroll } from "framer-motion";

export const App = () => {
  const [time, setTime] = useState(false);
  const [time2, setTime2] = useState(false);
  const [visible, setVisible] = useState(true);
  const sunnahRef = useRef<HTMLDivElement>(null);
  setTimeout(() => {
    setTime(true);
    setVisible(false);
  }, 6000);

  setTimeout(() => {
    setTime2(true);
  }, 7000);

  const { scrollYProgress } = useScroll();

  return (
    <>
      {time && (
        <motion.div
          style={{
            scaleX: scrollYProgress,
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            height: 8,
            originX: 0,
            zIndex: 10,
            backgroundColor: "white",
          }}
        />
      )}
      <div className="flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-[#020614] to-slate-950">
        {visible && <Opener />}
        {time && (
          <>
            <div className="flex flex-col">
              <div className="relative flex min-h-screen w-screen flex-col items-center justify-center">
                <Card />
                {time2 && <Reminder page={sunnahRef} />}
              </div>

              <div
                className="flex min-h-screen min-w-screen bg-gradient-to-b from-[#0b1628] to-slate-900"
                ref={sunnahRef}
              >
                <Sunnah />
              </div>
              <div className="my-10 flex min-h-screen min-w-screen bg-gradient-to-b from-[#020614] to-slate-950">
                <Etiquettes />
              </div>
              <div className="flex min-h-screen min-w-screen bg-gradient-to-b from-[#0b1628] to-slate-900">
                <Takbeer />
              </div>
              <div className="flex min-h-screen min-w-screen bg-gradient-to-b from-[#020614] to-slate-950">
                <Dua />
              </div>
              <div className="flex h-25 min-w-screen bg-gradient-to-b from-[#0b1628] to-slate-900">
                <Links />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};
