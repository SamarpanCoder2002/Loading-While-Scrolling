import LowerComponent from "./lowersection";
import UpperSide from "./upperside";

function CommonSection() {
  return (
    <div className="common-section">
      <UpperSide />
      <LowerComponent />
    </div>
  );
}

export default CommonSection;
