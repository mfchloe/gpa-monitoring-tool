# GPA Monitoring Tool

## Overview
This project is a frontend web application built with React that aims to automate the process of reviewing student and teacher performance data. It allows school admin staff to efficiently analyze student and teacher data through an interactive web portal. This tool helps to identify top-performing students, low-performing students, and track cohort performance, as well as provide insights into teaching staff's effectiveness.

## Features
- **Students Page**: Displays a table of all students with their name, cumulative GPA, and last semester’s GPA. Allows sorting by any field and includes a line chart comparing average semester GPA and cumulative GPA across 8 semesters.
- **Student Page**: Provides detailed information about a selected student, including their semester and cumulative GPA across 8 semesters.
- **Teachers Page**: Displays a table of all teachers with their name, average semester GPA of students last semester, and average cumulative GPA of students. Includes a line chart showing the same GPA comparison across 8 semesters.
- **Teacher Page**: Provides detailed information about a selected teacher and their students' performance over the last 8 semesters.

## Technologies Used
- **Frontend**: React.js
- **Charting Library**: Chart.js
- **State Management**: React State

## Setup Instructions
1. Clone the repository to your local machine:
   `git clone https://github.com/mfchloe/gpa-monitoring-tool`

2. Navigate to the project directory:
   `cd gpa-monitoring-tool`

3. Install dependencies:
   `npm install`
   
4. Run the application:
   `npm start`

   This will start the application on http://localhost:3000.

## Pages Breakdown
### Students Page
- Displays a table with the following columns: Name, Cumulative GPA, Last Semester’s GPA
- The table is sortable by name, cumulative GPA, or last semester’s GPA.
- Displays a line chart with two series: Average semester GPA of all students across 8 semesters and Average cumulative GPA of all students across 8 semesters
- Clicking a student's name redirects to the Student Page.

### Student Page
- Displays the following information: Student's name, Cumulative GPA, Last Semester’s GPA
- Displays a line chart showing: Semester GPA for each of the last 8 semesters and Cumulative GPA over the last 8 semesters

### Teachers Page
- Displays a table with the following columns: Name, Average Semester GPA of students last semester, Average Cumulative GPA of students
- The table is sortable by name, average semester GPA, or average cumulative GPA.
- Displays a line chart with two series: Average semester GPA of all students across 8 semesters and Average cumulative GPA of all students across 8 semesters
- Clicking a teacher's name redirects to the Teacher Page.

### Teacher Page
- Displays the following information: Teacher's name, Average semester GPA of students, Average cumulative GPA of students
- Displays a line chart showing: Average semester GPA of students taught by the teacher over 8 semesters and Average cumulative GPA of students taught by the teacher

### Home page
- A welcome page with image carousel for aesthetic purposes

## Assumptions
- The school has 10 students and 2 teachers.
- The GPA data for each student is calculated based on mock data.
- No authentication is required.
- The data is not stored in a database; it's mocked in the application for simplicity.

## Future Improvements
- Implementing real-time data fetching through APIs and integrating with a backend service.
- Adding authentication for admin users since school data is important
- Enhancing the UI with additional information and styling.
- Refactor the Teacher Table and Student Table into a single, generic table component that accepts different column configurations and data structures. This will makes the tables more reusable across various pages and features.
- Add a feature that allows bulk data uploads using Excel sheets. Since the school initially used Excel for data entry, this will make it easier to transition and populate the application with existing data quickly.
- Add more functionalities such as reminders, addition of users, data analytics, etc.
