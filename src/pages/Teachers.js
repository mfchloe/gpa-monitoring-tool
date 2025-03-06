import React from "react";
import TeacherTable from "../components/TeacherTable";
import Chart from "../components/Chart";
import { teachers, everyone } from "../data/mockData";

function Teachers() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Teachers</h1>
      <TeacherTable teachers={teachers} />
      <br />
      <div
        style={{
          width: "80%",
          height: "400px",
          margin: "auto",
        }}
      >
        {everyone.map((data, index) => (
          <Chart
            key={index}
            avgSemesterGpas={data.avg_semester_gpas}
            avgCumulativeGpas={data.avg_cumulative_gpas}
          />
        ))}
      </div>
    </div>
  );
}

export default Teachers;
