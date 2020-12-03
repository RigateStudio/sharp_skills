import React from "react"
import CourseIndex from "../components/course/CourseIndex"
import Container from "react-bootstrap/Container";

const Home = () => {
    return (
      <div>
      <Container className="mt-3">
          <h1>BEST PASTEK SOCIALE MEDIA EVER CREATED ON EARTH </h1>
          <p>Sucribe to start sharring you marvelouse life with the most influant pastek "in da world".</p>
      </Container>
      <CourseIndex />
      </div>
    );
  };
  export default Home;