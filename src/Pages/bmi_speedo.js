import React from "react";
import ReactSpeedometer from "react-d3-speedometer";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const BMISPEEDO = () => {
  let { bmi } = useParams();
  let res = "OK";
  if (bmi < 18.5) {
    res = "Under wieght";
  } else if (bmi > 18.5 && bmi < 24.9) {
    res = "Normal weight";
  } else if (bmi > 25 && bmi < 29.9) {
    res = "Over weight";
  } else {
    res = "Obesity";
  }
  return (
    <div className="entry bg-light">
      <ReactSpeedometer
        value={Number(bmi)}
        needleColor="green"
        startColor="yellow"
        endColor="red"
        needleHeightRatio={0.5}
        currentValueText={res}
        textColor="black"
        maxSegmentLabels={5}
        segments={5555}
        maxValue="50"
      />
      <b className="text-dark">Your BMI score is {bmi}</b>
      <Link
        to="/bmi"
        style={{ fontSize: "25px" }}
        className="btn btn-outline-warning"
      >
        🔙
      </Link>
    </div>
  );
};

export default BMISPEEDO;
