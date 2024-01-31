import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CourseList from "./CourseList";
import CourseDetails from "./CourseDetails";
import StudentDashboard from "./StudentDashboard";

export default function App() {
  const userIDs = ["Alice_Johnson", "Charlie_Brown"];

  return (
    <Router>
      <Routes>
        <Route path="/courses/:id?" element={<CourseList />} />
        <Route path="/course-details/:id" element={<CourseDetails />} />
        {userIDs.map((userId) => (
          <Route
            key={userId}
            path={`/student-dashboard/${userId}`}
            element={<StudentDashboard userId={userId} />}
          />
        ))}
        <Route path="*" element={<p>Page not found</p>} />
      </Routes>
    </Router>
  );
}
