import moment from "moment";
import { tz } from "moment-timezone";
import { useState, useEffect } from "react";

function useTime() {
    const [time, setTime] = useState(moment());
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(moment());
        }, 1000);
        return () => clearInterval(interval);
    });
    return time;
}

export default function Clock() {
    const time = useTime();

    return (
        <div className="flex " >Located in Toronto 🇨🇦 at {time.tz("America/Toronto").format("h:mm:ss A")}. Home belongs to Seoul 🇰🇷 at {time.tz("Asia/Seoul").format("MMM Do, h:mm:ss A")}  </div>
    );
}


