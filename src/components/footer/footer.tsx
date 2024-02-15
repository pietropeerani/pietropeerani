import { useEffect, useState } from "react";
import ThemeChanger from "./theme-changer";
import { Link } from "react-router-dom";

export default function Footer() {
  const [time, setTime] = useState<string>("");

  const updateTime = () => {
    const currentTime = new Date();
    const hours = currentTime.getHours().toString().padStart(2, "0");
    const minutes = currentTime.getMinutes().toString().padStart(2, "0");
    setTime(`${hours}:${minutes}`);
  };

  useEffect(() => {
    updateTime();

    const intervalId = setInterval(() => {
      updateTime();
    }, 10000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <footer className="flex-shrink-0 pt-2 select-none text-sm flex">
      <div className="w-full">
        By Pietro Peerani | {time} | <ThemeChanger />
      </div>
      <div className="w-fit whitespace-nowrap max-md:hidden">
        <Link to="/about" className="text-txLink">:help</Link> for commands
      </div>
    </footer>
  )
}