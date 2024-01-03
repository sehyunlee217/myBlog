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

export default function Clock({ lang, location }) {
    const time = useTime();

    if (location === "America/Toronto") {
        return (
            <span >{time.tz("America/Toronto").format("h:mm:ss A")}</span>
        );
    }
    else if (location === "Asia/Seoul") {
        return (
            <span>{time.tz("Asia/Seoul").format("MMMM Do, h:mm:ss A")}</span>
        );
    }

}