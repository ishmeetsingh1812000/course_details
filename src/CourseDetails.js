// CourseDetails.js
import React from "react";
import { useParams } from "react-router-dom";

const CourseDetails = ({ courses }) => {
  const { id } = useParams();
  const courseId = parseInt(id);
  const course = courses.find((course) => course.id === courseId);

  if (!course) {
    return <p>Course not found.</p>;
  }

  return (
    <div>
      <h2>{course.name}</h2>
      <p>
        <strong>Instructor:</strong> {course.instructor}
      </p>
      <p>
        <strong>Description:</strong> {course.description}
      </p>
      <p>
        <strong>Enrollment Status:</strong> {course.enrollmentStatus}
      </p>
      <p>
        <strong>Course Duration:</strong> {course.duration}
      </p>
      <p>
        <strong>Schedule:</strong> {course.schedule}
      </p>
      <p>
        <strong>Location:</strong> {course.Online}
      </p>
      <p>
        <strong>Pre-requisites:</strong> {course.prerequisites.join(", ")}
      </p>
      <p>
        <strong>Syllabus as an expandable item:</strong>
        {course.syllabus.map((item) => (
          <div key={item.week}>
            <p>
              Week {item.week}: {item.topic}
            </p>
            <p>{item.content}</p>
          </div>
        ))}
      </p>
    </div>
  );
};

export default CourseDetails;
