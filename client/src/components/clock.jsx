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

    if (lang === "kr") {
        if (location === "America/Toronto") {
            return (
                <span className="">현재 <b>토론토</b>에 거주하며, 현지 시간은 {time.tz("America/Toronto").format("h:mm:ss A")}.</span>
            );
        }
        else if (location === "Asia/Seoul") {
            return (
                <span className="">집은 <b>서울</b>이며, <b>서울</b>은 현재 {time.tz("Asia/Seoul").format(" h:mm:ss A")}.</span>
            );
        }
    }
    else {
        if (location === "America/Toronto") {
            return (
                <span className="">Located in <b>Toronto, Canada</b>, at {time.tz("America/Toronto").format("h:mm:ss A")}.</span>
            );
        }
        else if (location === "Asia/Seoul") {
            return (
                <span className="">Home belongs to <b>Seoul, Korea</b>, currently at {time.tz("Asia/Seoul").format("MMMM Do, h:mm:ss A")}.</span>
            );
        }
    }
}