import { Opener } from "./components/Opener";
import { Card } from "./components/Card";
import { useRef, useState } from "react";
import { Reminder } from "./components/ReminderBtn";
import { Sunnah } from "./components/Sunnah";
import { Takbeer } from "./components/Takbeer";
import { Links } from "./components/Links";

export const App = () => {
  const [time, setTime] = useState(false);
  const [visible, setVisible] = useState(true);
  const sunnahRef = useRef<HTMLDivElement>(null);
  setTimeout(() => {
    setTime(true);
    setVisible(false);
  }, 5300);

  return (
    <>
      <div className="flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-[#020614] to-slate-950">
        {visible && <Opener />}
        {time && (
          <>
            <div className="flex flex-col">
              <div className="flex min-h-screen w-screen items-center justify-center">
                <Card />
                <Reminder page={sunnahRef} />
              </div>
              <div
                className="flex min-h-screen min-w-screen bg-gradient-to-b from-[#0b1628] to-slate-900"
                ref={sunnahRef}
              >
                <Sunnah />
              </div>
              <div className="bbg-gradient-to-b flex min-h-screen min-w-screen from-[#020614] to-slate-950">
                <Takbeer />
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
