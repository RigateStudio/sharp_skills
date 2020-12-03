import React from "react"
import CourseIndex from "../components/course/CourseIndex"
import Container from "react-bootstrap/Container";
import RegisterForm from "../components/Registration"
const Home = () => {
    return (
      <div>
      <Container className="mt-3">
      <RegisterForm />
      </Container>
      </div>
    );
  };
  export default Home;