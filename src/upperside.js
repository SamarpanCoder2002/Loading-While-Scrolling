import AOS from 'aos';
import "aos/dist/aos.css";
import React, {useEffect} from 'react';
import "./common.css";

export default function UpperSide() {

    useEffect(() => {
        AOS.init();
    })

    return (
        <div className="upperside">
            <p data-aos="zoom-in" data-aos-duration="3000">Loading While Scrolling</p>
        </div>
    )
}
