import React from 'react';
import Clock from "./clock";

function Footer() {
    return (
        <div className=" mt-10 light:bg-neutral-100 border-neutral-400 border-t border-opacity-50 font-sans py-4 sticky top-full flex justify-center">
            <Clock />
        </div>
    );
}

export default Footer;