import React from 'react';
import Clock from "./clock";

function Footer() {
    return (
        <div className=" font-abril bg-primary_dark bg-opacity-80 dark:bg-font_dark dark:text-bg_dark text-font_dark sticky top-full flex justify-center">
            <Clock />
        </div>
    );
}

export default Footer;