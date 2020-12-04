import React, {useContext } from "react";
import {StoreContext} from "../store/index"

import Container from "react-bootstrap/Container";
import CourseIndex from "../components/course/CourseIndex";
import CourseForm from "../components/course/CourseForm";
import TrainingSessions from "./TrainingSessions";
import {Observer} from "mobx-react"

const Home = () => {
  console.log("Home")
  const store = useContext(StoreContext);
console.log(store)
  return (
    <div>
      <Container>
      <Observer>
        {() => store.currentUser?.role === "admin" && (<CourseForm/>)}
      </Observer>
      <CourseIndex />
      <TrainingSessions />
      </Container>
    </div>
  )
}

export default Home;
