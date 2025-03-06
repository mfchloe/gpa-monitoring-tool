import React from "react";
import { useParams } from "react-router-dom";
import { students } from "../data/mockData";
import Chart from "../components/Chart";

function StudentDetail() {
  const { id } = useParams();
  const student = students.find((student) => student.id === parseInt(id));

  if (!student) return <div>Student not found</div>;

  return (
    <div style={styles.container}>
      {/* Student Info Section */}
      <div style={styles.infoSection}>
        <div style={styles.imageContainer}>
          <img
            src={student.picture_url}
            alt={student.name}
            style={styles.profileImage}
          />
          <h2 style={styles.name}>{student.name}</h2>
        </div>

        <div style={styles.gpaDetails}>
          <p>
            <strong>Last Semester GPA:</strong> {student.last_semester_gpa}
          </p>
          <p>
            <strong>Cumulative GPA:</strong> {student.cumulative_gpa}
          </p>
        </div>
      </div>

      {/* GPA Chart Section */}
      <div style={styles.chartSection}>
        <Chart
          avgSemesterGpas={student.semester_gpas}
          avgCumulativeGpas={student.cumulative_gpas}
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

export default StudentDetail;
