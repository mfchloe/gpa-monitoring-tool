import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/table.css";

function TeacherTable({ teachers }) {
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

  // Filter teachers based on search query
  const filteredTeachers = teachers.filter((teacher) =>
    teacher.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Sort teachers based on selected field and order
  const sortedTeachers = [...filteredTeachers].sort((a, b) => {
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
          <option value="subject">Sort by Cumulative GPA</option>
          <option value="experience">Sort by Last Semester GPA</option>
        </select>
      </div>

      {/* Table */}
      <table className="person-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Average Cumulative GPA</th>
            <th>Average Last Semester GPA</th>
          </tr>
        </thead>
        <tbody>
          {sortedTeachers.map((teacher) => (
            <tr key={teacher.id}>
              <td>
                <Link to={`/teachers/${teacher.id}`}>{teacher.name}</Link>
              </td>
              <td>{teacher.avg_cumulative_gpa}</td>
              <td>{teacher.avg_last_semester_gpa}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TeacherTable;
