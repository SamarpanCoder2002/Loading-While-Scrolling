import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function UpperSide() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className="upper-side"
      data-aos="zoom-in-down"
      data-aos-duration="3000"
    >
      Loading While Scrolling
    </div>
  );
}

export default UpperSide;
