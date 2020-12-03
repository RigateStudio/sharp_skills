import React from "react"
//import CourseForm from "../components/course/CourseForm"
import Container from "react-bootstrap/Container"
import Registration from "../components/Registration";
import CourseIndex from "../components/course/CourseIndex"

const Home = () => {
  return (
    <div>
      <h1>Bienvenue sur la Homepage</h1>
      <CourseIndex />
      <Registration />
    </div>
  )
}

export default Home