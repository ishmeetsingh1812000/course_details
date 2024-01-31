import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import CourseDetails from "./CourseDetails";

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const { id } = useParams();

  useEffect(() => {
    // Fetch the list of courses from the server
    fetch("http://localhost:4000/courses")
      .then((response) => response.json())
      .then((data) => setCourses(data))
      .catch((error) => console.error("Error fetching courses:", error));
  }, []);

  const filteredCourses = courses.filter(
    (course) =>
      course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Course List</h1>
      <input
        type="text"
        placeholder="Search by course name or instructor"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {id ? (
        // If course id is present in the URL, show CourseDetails
        <CourseDetails courses={courses} />
      ) : (
        // Otherwise, show the list of courses
        <ul>
          {filteredCourses.length === 0 ? (
            <p>No matching courses found.</p>
          ) : (
            filteredCourses.map((course) => (
              <li key={course.id}>
                <Link to={`/courses/${course.id}`}>
                  <h2>{course.name}</h2>
                </Link>
                <p>Instructor: {course.instructor}</p>
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
};

export default CourseList;
