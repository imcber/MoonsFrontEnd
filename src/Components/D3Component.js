import React, { useState, useEffect, useRef } from "react";
import * as d3 from "d3";

const D3Component = ({ data, flip = false, total, name }) => {
  //Ref del contenedor del chart
  const d3Container = useRef(null);
  //tamaño de la grafica, se ocupara para varias cosas
  const widthChart = 200;
  const heightChart = 200;

  //Contruyo data para la grafica
  const dataChart = {};
  const colors = [];
  data.map(({ name, percent, color }) => {
    dataChart[name] = percent;
    colors.push(color);
  });

  //Se dibuja la grafica
  const drawChart = () => {
    const margin = 20;
    const radius = Math.min(widthChart, heightChart) / 2 - margin;
    //Seleccionamos nuestro dom
    let svg = d3.select(d3Container.current);

    //Set colors
    const color = d3.scaleOrdinal().domain(dataChart).range(colors);
    const pie = d3.pie().value((d) => {
      return d.value;
    });

    const data_ready = pie(d3.entries(dataChart));

    const arc = d3
      .arc()
      .innerRadius(90) // Tamaño del hoyo
      .outerRadius(radius);

    svg
      .selectAll("whatever")
      .data(data_ready)
      .enter()
      .append("path")
      .attr("transform", flip ? "scale(-1,1)" : "")
      .attr("d", arc)
      .attr("fill", function (d) {
        return color(d.data.key);
      });

    svg
      .append("text")
      .attr("fontSize", "17px")
      .attr("fill", "#adb5bd")
      .attr("text-anchor", "middle")
      .style("font-size", "20px")
      .text(name);
    svg
      .append("text")
      .attr("fontSize", "25px")
      .attr("fill", "#495057")
      .attr("text-anchor", "middle")
      .attr("y", 20)
      .style("font-size", "20px")
      .text(commaSeparateNumber(total));
  };

  useEffect(() => {
    if (d3Container.current) drawChart();
  }, [d3Container.current]);
  return (
    <svg className="d3-component" width={widthChart} height={heightChart}>
      <g
        ref={d3Container}
        transform={`translate(${widthChart / 2},${heightChart / 2})`}
      ></g>
    </svg>
  );
};

function commaSeparateNumber(val) {
  while (/(\d+)(\d{3})/.test(val.toString())) {
    val = val.toString().replace(/(\d+)(\d{3})/, "$1" + "," + "$2");
  }
  return val;
}

export default D3Component;
