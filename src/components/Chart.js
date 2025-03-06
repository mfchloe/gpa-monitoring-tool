import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Chart = ({ avgSemesterGpas, avgCumulativeGpas }) => {
  const data = {
    labels: [
      "Semester 1",
      "Semester 2",
      "Semester 3",
      "Semester 4",
      "Semester 5",
      "Semester 6",
      "Semester 7",
      "Semester 8",
    ],
    datasets: [
      {
        label: "Average Semester GPA",
        data: avgSemesterGpas,
        fill: false,
        borderColor: "rgba(75,192,192,1)",
        tension: 0.1,
      },
      {
        label: "Average Cumulative GPA",
        data: avgCumulativeGpas,
        fill: false,
        borderColor: "rgba(153,102,255,1)",
        tension: 0.1,
      },
    ],
  };

  return (
    <div>
      <h3 style={{ textAlign: "center" }}>Average GPA vs Cumulative GPA</h3>
      <Line data={data} />
    </div>
  );
};

export default Chart;
