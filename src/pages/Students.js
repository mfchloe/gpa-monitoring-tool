import React from "react";
import StudentTable from "../components/StudentTable";
import Chart from "../components/Chart";
import { students, everyone } from "../data/mockData";

function Students() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Students</h1>
      <StudentTable students={students} />
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

export default Students;
