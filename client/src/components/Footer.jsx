import React from 'react';
import Clock from "./clock";

function Footer() {
    return (
        <div className=" border-t-2 border-opacity-50 border-korean_oak  font-abril py-1 text-bg_dark dark:text-font_dark sticky top-full flex justify-center">
            <Clock />
        </div>
    );
}

export default Footer;