import React from "react";
import { useParams } from "react-router-dom";
import { teachers } from "../data/mockData";
import Chart from "../components/Chart";

function TeacherDetail() {
  const { id } = useParams();
  const teacher = teachers.find((teacher) => teacher.id === parseInt(id));

  if (!teacher) return <div>teacher not found</div>;

  return (
    <div style={styles.container}>
      {/* Teacher Info Section */}
      <div style={styles.infoSection}>
        <div style={styles.imageContainer}>
          <img
            src={teacher.picture_url}
            alt={teacher.name}
            style={styles.profileImage}
          />
          <h2 style={styles.name}>{teacher.name}</h2>
        </div>

        <div style={styles.gpaDetails}>
          <p>
            <strong>Average Last Semester GPA:</strong>{" "}
            {teacher.avg_last_semester_gpa}
          </p>
          <p>
            <strong>Average Cumulative GPA:</strong>{" "}
            {teacher.avg_cumulative_gpa}
          </p>
        </div>
      </div>

      {/* GPA Chart Section */}
      <div style={styles.chartSection}>
        <Chart
          avgSemesterGpas={teacher.semester_gpas}
          avgCumulativeGpas={teacher.cumulative_gpas}
        />
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
  },
  infoSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  imageContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "20px",
  },
  profileImage: {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    marginBottom: "10px",
  },
  name: {
    fontSize: "24px",
    fontWeight: "600",
    margin: "0",
  },
  gpaDetails: {
    textAlign: "center",
    fontSize: "16px",
  },
  chartSection: {
    width: "100%",
    maxWidth: "800px",
    marginTop: "40px",
  },
};

export default TeacherDetail;
