import React from "react"
import CourseForm from "../components/course/CourseForm"
import Container from "react-bootstrap/Container"
import Registration from "../components/Registration";
import Header from "../components/Header";

const CreateShow = () => {
    return (
      <div>
      <Container className="mt-3">
          <h1>BEST PASTEK SOCIALE MEDIA EVER CREATED ON EARTH </h1>
          <p>Sucribe to start sharring you marvelouse life with the most influant pastek "in da world".</p>
      </Container>
      <CourseForm />
      </div>
    );
  };
  export default CreateShow;