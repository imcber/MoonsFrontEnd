import React, { useState, useEffect } from "react";
import "./App.css";
import CardChart from "./Components/CardChart";

const dataDummy = [
  {
    name: "Revenue",
    data: [
      { name: "Tablet", value: 120000, color: "#55a630" },
      { name: "Smarthphone", value: 80000, color: "#bfd200" },
    ],
    invert: true,
  },
  {
    name: "Impresions",
    data: [
      { name: "Tablet", value: 10, color: "#2ec4b6" },
      { name: "Tablet2", value: 20, color: "#011627" },
      { name: "Tablet3", value: 20, color: "#ff5400" },
    ],
  },
  {
    name: "Visits",
    data: [
      { name: "Tablet", value: 480000000, color: "#ffbd00" },
      { name: "Smarthphone", value: 120000000, color: "#ff5400" },
    ],
    invert: true,
  },
];

function App() {
  const calcTotal = (data) => {
    const totalArray = data.map((item) => {
      return item.value;
    });
    const total = totalArray.reduce((t, n) => t + n);
    return total;
  };
  return (
    <div className="flex justify-center items-center h-screen w-screen bg-gray-200">
      <div className="h-auto w-3/4 flex justify-between items-center px-5 xl:flex-row flex-col">
        {dataDummy.map((item, indx) => (
          <CardChart response={item} total={calcTotal(item.data)} key={indx} />
        ))}
      </div>
    </div>
  );
}

export default App;
