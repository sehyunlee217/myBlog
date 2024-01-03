import React from 'react';
import Clock from "./clock";

function Footer() {
    return (
        <div className=" bg-primary_dark text-font_dark flex align-middle justify-center">
            In Toronto at <Clock location={"America/Toronto"} />, but home belongs to Seoul, Korea at <Clock location={"Asia/Seoul"} />
        </div>
    );
}

export default Footer;