import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/table.css";

function StudentTable({ students }) {
  const [sortField, setSortField] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");
  const [searchQuery, setSearchQuery] = useState("");

  // Function to handle sorting
  const handleSort = (event) => {
    const newSortField = event.target.value;
    setSortOrder((prevOrder) =>
      sortField === newSortField && prevOrder === "asc" ? "desc" : "asc"
    );
    setSortField(newSortField);
  };

  // Function to handle search
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter students based on search query
  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Sort students based on selected field and order
  const sortedStudents = [...filteredStudents].sort((a, b) => {
    const fieldA = a[sortField];
    const fieldB = b[sortField];

    if (fieldA < fieldB) return sortOrder === "asc" ? -1 : 1;
    if (fieldA > fieldB) return sortOrder === "asc" ? 1 : -1;
    return 0;
  });

  return (
    <div className="table-container">
      {/* Search and Sorting */}
      <div className="search-sort-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search by name"
          value={searchQuery}
          onChange={handleSearch}
        />
        <select className="sort-select" value={sortField} onChange={handleSort}>
          <option value="name">Sort by Name</option>
          <option value="cumulative_gpa">Sort by Cumulative GPA</option>
          <option value="last_semester_gpa">Sort by Last Semester GPA</option>
        </select>
      </div>

      {/* Table */}
      <table className="person-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Cumulative GPA</th>
            <th>Last Semester GPA</th>
          </tr>
        </thead>
        <tbody>
          {sortedStudents.map((student) => (
            <tr key={student.id}>
              <td>
                <Link to={`/students/${student.id}`} className="person-link">
                  {student.name}
                </Link>
              </td>
              <td>{student.cumulative_gpa}</td>
              <td>{student.last_semester_gpa}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentTable;
