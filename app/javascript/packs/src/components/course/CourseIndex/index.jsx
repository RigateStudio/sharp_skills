import React, {useState, useEffect} from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

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
        return  <Link to>{course.name}</Link>;
      })}
    </div>
  );
};

export default CourseIndex;
