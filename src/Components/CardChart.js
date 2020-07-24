import React from "react";
import D3Component from "./D3Component";
import LabelChart from "./LabelChart";

const CardChart = ({ response: { name, data, invert }, total }) => {
  const dataChart = data.map((item) => {
    const { value } = item;
    const percent = (value * 100) / parseFloat(total);
    return { ...item, percent };
  });
  return (
    <div className="w-auto h-auto border-b-2 pb-5 mb-3 border-gray-300 max-w-sm flex flex-col justify-center items-center">
      <D3Component data={dataChart} flip={invert} total={total} name={name} />
      <div className="flex justify-between">
        {dataChart.map((item, indx) => (
          <LabelChart data={item} key={indx} />
        ))}
      </div>
    </div>
  );
};

export default CardChart;
