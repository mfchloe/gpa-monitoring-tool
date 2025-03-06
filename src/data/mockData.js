// Helper function to calculate average GPA
function calculateAverageGPA(gpas) {
  if (gpas.length === 0) return 0;
  const totalGPA = gpas.reduce((acc, gpa) => acc + gpa, 0);
  return (totalGPA / gpas.length).toFixed(2);
}

// Helper function to calculate cumulative GPA
function calculateCumulativeGPA(gpas) {
  let cumulativeGPA = 0;
  return gpas.map((gpa, index) => {
    cumulativeGPA += gpa;
    return (cumulativeGPA / (index + 1)).toFixed(2);
  });
}

const students = [
  {
    id: 1,
    name: "Jolie Ng",
    semester_gpas: [3.8, 3.6, 3.7, 3.9, 4.0, 3.8, 3.6, 3.7], // Semester-wise GPA
    cumulative_gpas: calculateCumulativeGPA([
      3.8, 3.6, 3.7, 3.9, 4.0, 3.8, 3.6, 3.7,
    ]), // Cumulative GPAs
    last_semester_gpa: 3.8,
    cumulative_gpa: 3.64,
    picture_url: "/GirlStudent.png",
  },
  {
    id: 2,
    name: "Clarice Wong",
    semester_gpas: [4.0, 3.8, 3.9, 4.0, 3.8, 3.9, 4.0, 3.9], // Semester-wise GPA
    cumulative_gpas: calculateCumulativeGPA([
      4.0, 3.8, 3.9, 4.0, 3.8, 3.9, 4.0, 3.9,
    ]), // Cumulative GPAs
    last_semester_gpa: 4.0,
    cumulative_gpa: 3.87,
    picture_url: "/GirlStudent.png",
  },
  {
    id: 3,
    name: "Chloe Tan",
    semester_gpas: [3.7, 3.8, 3.6, 3.5, 3.7, 3.8, 3.6, 3.6], // Semester-wise GPA
    cumulative_gpas: calculateCumulativeGPA([
      3.7, 3.8, 3.6, 3.5, 3.7, 3.8, 3.6, 3.6,
    ]), // Cumulative GPAs
    last_semester_gpa: 3.7,
    cumulative_gpa: 3.32,
    picture_url: "/GirlStudent.png",
  },
  {
    id: 4,
    name: "Shannen Kwek",
    semester_gpas: [4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0], // Semester-wise GPA
    cumulative_gpas: calculateCumulativeGPA([
      4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0,
    ]), // Cumulative GPAs
    last_semester_gpa: 4.0,
    cumulative_gpa: 3.8,
    picture_url: "/GirlStudent.png",
  },
  {
    id: 5,
    name: "Lawrence Gan",
    semester_gpas: [3.9, 3.8, 3.7, 3.9, 3.8, 3.9, 4.0, 3.9], // Semester-wise GPA
    cumulative_gpas: calculateCumulativeGPA([
      3.9, 3.8, 3.7, 3.9, 3.8, 3.9, 4.0, 3.9,
    ]), // Cumulative GPAs
    last_semester_gpa: 3.9,
    cumulative_gpa: 3.75,
    picture_url: "/BoyStudent.png",
  },
  {
    id: 6,
    name: "Ryan Lim",
    semester_gpas: [4.0, 3.9, 4.0, 3.9, 4.0, 3.9, 4.0, 4.0], // Semester-wise GPA
    cumulative_gpas: calculateCumulativeGPA([
      4.0, 3.9, 4.0, 3.9, 4.0, 3.9, 4.0, 4.0,
    ]), // Cumulative GPAs
    last_semester_gpa: 4.0,
    cumulative_gpa: 3.65,
    picture_url: "/BoyStudent.png",
  },
  {
    id: 7,
    name: "Chris Tan",
    semester_gpas: [3.8, 3.7, 3.8, 3.9, 3.6, 3.7, 3.8, 3.7], // Semester-wise GPA
    cumulative_gpas: calculateCumulativeGPA([
      3.8, 3.7, 3.8, 3.9, 3.6, 3.7, 3.8, 3.7,
    ]), // Cumulative GPAs
    last_semester_gpa: 3.8,
    cumulative_gpa: 3.43,
    picture_url: "/BoyStudent.png",
  },
  {
    id: 8,
    name: "Sophia Lee",
    semester_gpas: [4.0, 3.9, 3.8, 4.0, 4.0, 4.0, 4.0, 4.0], // Semester-wise GPA
    cumulative_gpas: calculateCumulativeGPA([
      4.0, 3.9, 3.8, 4.0, 4.0, 4.0, 4.0, 4.0,
    ]), // Cumulative GPAs
    last_semester_gpa: 4.0,
    cumulative_gpa: 3.85,
    picture_url: "/GirlStudent.png",
  },
  {
    id: 9,
    name: "Ethan Zhang",
    semester_gpas: [3.7, 3.6, 3.8, 3.7, 3.5, 3.6, 3.7, 3.6], // Semester-wise GPA
    cumulative_gpas: calculateCumulativeGPA([
      3.7, 3.6, 3.8, 3.7, 3.5, 3.6, 3.7, 3.6,
    ]), // Cumulative GPAs
    last_semester_gpa: 3.7,
    cumulative_gpa: 3.35,
    picture_url: "/BoyStudent.png",
  },
  {
    id: 10,
    name: "Olivia Wang",
    semester_gpas: [4.0, 4.0, 4.0, 4.0, 3.9, 4.0, 3.9, 4.0], // Semester-wise GPA
    cumulative_gpas: calculateCumulativeGPA([
      4.0, 4.0, 4.0, 4.0, 3.9, 4.0, 3.9, 4.0,
    ]), // Cumulative GPAs
    last_semester_gpa: 4.0,
    cumulative_gpa: 3.85,
    picture_url: "/GirlStudent.png",
  },
];

const teachers = [
  {
    id: 101,
    name: "Ms. Pearl Lam",
    avg_last_semester_gpa: calculateAverageGPA([3.8, 4.0, 3.7, 3.8, 3.9]),
    avg_cumulative_gpa: calculateAverageGPA([3.64, 3.87, 3.32, 3.75, 3.8]),
    semester_gpas: [4.0, 4.0, 4.0, 4.0, 3.9, 4.0, 3.9, 4.0], // Semester-wise GPA
    cumulative_gpas: calculateCumulativeGPA([
      4.0, 4.0, 4.0, 4.0, 3.9, 4.0, 3.9, 4.0,
    ]), // Cumulative GPAs
    picture_url: "/WomanTeacher.jpg",
    students_ids: [1, 2, 3, 4, 5],
  },
  {
    id: 102,
    name: "Mr. Benjamin Leow",
    avg_last_semester_gpa: calculateAverageGPA([3.6, 3.9, 3.7, 3.6, 3.5]),
    avg_cumulative_gpa: calculateAverageGPA([3.64, 3.87, 3.32, 3.55, 3.6]),
    semester_gpas: [3.7, 3.6, 3.8, 3.7, 3.5, 3.6, 3.7, 3.6], // Semester-wise GPA
    cumulative_gpas: calculateCumulativeGPA([
      3.7, 3.6, 3.8, 3.7, 3.5, 3.6, 3.7, 3.6,
    ]), // Cumulative GPAs
    picture_url: "/ManTeacher.jpg",
    students_ids: [6, 7, 8, 9, 10],
  },
];

const everyone = [
  {
    avg_semester_gpas: [3.5, 3.7, 3.6, 3.8, 3.7, 3.9, 3.8, 3.85],
    avg_cumulative_gpas: [3.5, 3.6, 3.62, 3.675, 3.72, 3.75, 3.77, 3.8],
  },
];

export { students, teachers, everyone };
