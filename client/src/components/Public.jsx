import { Link, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import Clock from "./clock";

export default function Home() {

    return (
        <div className='flex'>
            <div className="flex flex-col">
                <div>Second-year Industrial engineering student.</div>
                <div>
                    <Clock location={"America/Toronto"} />
                </div>
                <div>
                    <Clock location={"Asia/Seoul"} />
                </div>
            </div>
        </div>
    );
}



