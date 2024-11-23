import { useEffect, useState } from "react";
import ThemeChanger from "./theme-changer";

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
        <footer className="flex-shrink-0 pt-2 select-none">
            By Pietro Peerani | {time} | <ThemeChanger />
        </footer>
    )
}