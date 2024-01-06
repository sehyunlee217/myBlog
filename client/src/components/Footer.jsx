import React from 'react';
import Clock from "./clock";

function Footer() {
    return (
        <div className="bg-primary_dark font-nunito text-font_dark sticky top-full flex justify-center">
            <Clock />
        </div>
    );
}

export default Footer;