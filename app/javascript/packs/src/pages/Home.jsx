import React from "react"
//import CourseForm from "../components/course/CourseForm"
import Container from "react-bootstrap/Container";
import Registration from "../components/Registration";
import CourseIndex from "../components/course/CourseIndex"
import "./home.scss";

const Home = () => {
  return (
      <div>
        <h1 className="welcome">Bienvenue sur la Homepage</h1>
        <div className="search-bar">
          <h1> Je recherche </h1>
            <div className="category"> insert filters</div>
        </div>
        <CourseIndex />
        <Registration />
      </div>
  )
}

export default Home
