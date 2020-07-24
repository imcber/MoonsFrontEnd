import React from "react";

const LabelChart = ({ data: { name, percent, value, color } }) => {
  return (
    <div className="px-4">
      <p style={{ color }} className="font-semibold">
        {name}
      </p>
      <div className={"flex"}>
        <p
          className="pr-2 text-sm font-medium"
          style={{ color }}
        >{`${percent}%`}</p>
        <p className={"text-sm"} style={{ color, opacity: ".7" }}>
          {commaSeparateNumber(value)}
        </p>
      </div>
    </div>
  );
};

function commaSeparateNumber(val) {
  while (/(\d+)(\d{3})/.test(val.toString())) {
    val = val.toString().replace(/(\d+)(\d{3})/, "$1" + "," + "$2");
  }
  return val;
}

export default LabelChart;
