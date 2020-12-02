import React, {useState, useEffect} from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const CourseIndex = () => {
  const [courses, setCourses] = useState([]);

  const fetchCourses = () => {
    fetch("/api/courses")
      .then((response) => response.json())
      .then((response) => {
        console.log(response)
        setCourses(response);
      });
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div className="Courses">
      {courses.map((course) => {
        return  <h4>{course.name}</h4>;
      })}
    </div>
  );
};

export default CourseIndex;
