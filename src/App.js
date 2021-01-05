import React, { useEffect, useRef, useState } from "react";
import Chartjs from "chart.js";
import "./styles.css";

const chartConfig = {
  type: "radar",
  data: {
    labels: [
      "TV Action & Adventure",
      "TV Comedies",
      "TV Dramas",
      "CrimeTV Shows",
      "Kids'TV",
      "RomanticTV Shows"
    ],
    datasets: [
      {
        label: "# of TV-Shows in Israel",
        data: [3, 1, 5, 3, 0, 0],

        backgroundColor: [
          "rgba(54, 162, 235, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(54, 162, 235, 0.2)"
        ],
        borderColor: [
          "rgba(54, 162, 235, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(54, 162, 235,1)",
          "rgba(54, 162, 235, 1)"
        ],

        borderWidth: 1
      },
      {
        label: "# of TV-Shows in Japan",
        data: [3, 6, 19, 12, 13, 17],

        backgroundColor: [
          "rgba(255, 206, 86, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(255, 206, 86, 0.2)"
        ],
        borderColor: [
          "rgba(255, 206, 86, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(255, 206, 86, 1)"
        ],
        borderWidth: 1
      },
      {
        label: "# of TV-Shows in United Kingdom",
        data: [3, 35, 22, 42, 12, 9],

        backgroundColor: [
          "rgba(75, 192, 192, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(75, 192, 192, 0.2)"
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(75, 192, 192, 1)"
        ],
        borderWidth: 1
      },
      {
        label: "# of TV-Shows in United States",
        data: [65, 188, 169, 99, 138, 23],

        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 99, 132, 0.2)"
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(255, 99, 132, 1)"
        ],
        borderWidth: 1
      }
    ]
  },
  options: {
    scale: {
      angleLines: {
        display: false
      },
      ticks: {
        suggestedMin: 50,
        suggestedMax: 100
      }
    }
  }
};

const Chart = () => {
  const chartContainer = useRef(null);
  const [chartInstance, setChartInstance] = useState(null);

  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      const newChartInstance = new Chartjs(chartContainer.current, chartConfig);
      setChartInstance(newChartInstance);
    }
  }, [chartContainer]);

  const updateDataset = (datasetIndex, newData) => {
    chartInstance.data.datasets[datasetIndex].data = newData;
    chartInstance.update();
  };

  return (
    <div>
      <h1 className="x">Number of TV-Shows in Netflix</h1>
      <canvas ref={chartContainer} />
    </div>
  );
};

export default Chart;
