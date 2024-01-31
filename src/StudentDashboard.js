import React, { useState } from "react";

const StudentDashboard = ({ userId }) => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  // Static data for different users
  const userStaticData = {
    Alice_Johnson: [
      {
        id: 1,
        name: "Introduction to React Native",
        instructor: "John Doe",
        completed: false,
        dueDate: "2022-12-31",
        progress: 50,
      },
      {
        id: 2,
        name: "Advanced JavaScript",
        instructor: "Jane Smith",
        completed: false,
        dueDate: "2022-11-30",
        progress: 65,
      },
    ],
    Charlie_Brown: [
      {
        id: 3,
        name: "Python Fundamentals",
        instructor: "Alex Turner",
        completed: false,
        dueDate: "2022-10-31",
        progress: 75,
      },
      {
        id: 4,
        name: "Web Development Bootcamp",
        instructor: "Samuel Johnson",
        completed: false,
        dueDate: "2022-09-30",
        progress: 25,
      },
    ],
  };

  // Get the static data for the current user
  const userCourses = userStaticData[userId] || [];

  const markAsCompleted = (courseId) => {
    // Simulating updating completion status in the frontend
    // This won't persist in the static data, and it's just for demonstration
    // In a real application, you'd update this data in your backend
    // or use a state management solution
    const updatedCourses = userCourses.map((course) =>
      course.id === courseId ? { ...course, completed: true } : course
    );
    // Simulating setting the updated data in the state
    setEnrolledCourses(updatedCourses);
  };

  return (
    <div>
      <h1>Student Dashboard</h1>
      {userCourses.length === 0 ? (
        <p>No enrolled courses found.</p>
      ) : (
        <ul>
          {userCourses.map((course) => (
            <li key={course.id}>
              <h2>{course.name}</h2>
              <p>Instructor: {course.instructor}</p>
              <button onClick={() => markAsCompleted(course.id)}>
                Mark as Completed
              </button>
              {course.completed ? (
                <p>Course Completed</p>
              ) : (
                <>
                  <p>Due Date: {course.dueDate}</p>
                  <div>
                    <p>Progress:</p>
                    <progress value={course.progress} max="100">
                      {course.progress}%
                    </progress>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default StudentDashboard;
