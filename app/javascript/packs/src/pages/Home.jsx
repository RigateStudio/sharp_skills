import React from "react"

import Container from "react-bootstrap/Container";
import CourseIndex from "../components/course/CourseIndex";
import CourseForm from "../components/course/CourseForm";
import TrainingSessions from "./TrainingSessions";

const Home = () => {
  return (
    <div>
      <CourseForm/>
      <CourseIndex />
      <TrainingSessions />
    </div>
  )
}

export default Home;