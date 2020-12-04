import React, {useState, useEffect} from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import {Card} from 'react-bootstrap'
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
    <>
    <h1>Aviable Courses</h1>
    <Card className="Courses">
      {courses.map((course) => {
        return  (
        <Card.Header>
          <Link to="/">{course.name}</Link>
        </Card.Header>
        
        )
      })}
    </Card>
    </>
  );
};

export default CourseIndex;
