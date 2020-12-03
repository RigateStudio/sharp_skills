import React, { useState, useEffect } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
const CourseIndex = (props) => {
  const [display, setDisplay] = useState(false);
  const [courses, setCourses] = useState([]);

  const fetchCourses = () => {
    fetch(`/api/courses/${props.id}`)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setCourses(response);
      });
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <Card>
      <Card.Header>
        <Card.Title>{courses.title}</Card.Title>
        {courses.categories.map((category) => {
          return <p>{category}</p>
        })}
      </Card.Header>
      <Card.Body>
        {courses.training_sessions.map((training_session) => {
          return <Link>{training_session.date}</Link>
        })}
      </Card.Body>
      <Card.Footer>
          <p>{courses.teacher.last_name}</p>
          <i>{courses.teacher.email}</i>
      </Card.Footer>
    </Card>
  );
};

export default CourseIndex;
