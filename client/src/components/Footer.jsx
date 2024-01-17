import React from 'react';
import Clock from "./clock";

function Footer() {
    return (
        <div className=" bg-neutral-100 bg-opacity-60 border-neutral-400 border-t border-opacity-50 font-sans py-4 text-bg_dark dark:text-font_dark sticky top-full flex justify-center">
            <Clock />
        </div>
    );
}

export default Footer;