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
        <div className="flex flex-row gap-4">
            <div className="flex sm:gap-1">
                <span className="hidden sm:block">Located in</span>
                <div>Toronto 🇨🇦, at {time.tz("America/Toronto").format("h:mm:ss A")}.</div>
            </div>
            <div className="flex sm:gap-1">
                <span className="hidden sm:block">Home belongs to</span>
                <div>Seoul 🇰🇷, at {time.tz("Asia/Seoul").format("h:mm:ss A")}.</div>
            </div>
        </div>
    );
}


