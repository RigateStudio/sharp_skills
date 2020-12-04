import React, { useState, useContext } from "react";
import StoreContext from "../../../store"
import { Button, Form } from "react-bootstrap";
import CategoryList from "../../CategoryList";
import Cookies from "js-cookie"
import Teachers from '../../Teachers'
const CourseForm = () => {
  const [input, setInput] = useState({categories: []});
  const [token, setToken] = useState("");
  const store = useContext(StoreContext);

  const fetchUser = () => {
    console.log("fetchUser()")
    const data = {
      course: {
        name: input.name,
        teacher_id: input.teacher_id,
        category_ids: input.categories,
      },
    };
    console.log(data)
    fetch("/api/courses", {
      method: "post",
      headers: { "Content-Type": "application/json", Authorization: Cookies.get("token") },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
      });
  };

  const handleInputChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
    console.log(input);
  };

  return (
    <>
      <Form className="mt-5">
        <h1>Création d'une formation</h1>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Titre de la formation</Form.Label>
          <Form.Control
            name="name"
            type="text"
            placeholder="Entrez le titre de la formation..."
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Label>Choose if you are a Student or a Teacher</Form.Label>
        <Form.Control as="select" name="teacher_id" onChange={handleInputChange}>
          <Teachers setInput={setInput}/>
        </Form.Control>

          <div>
          <Form.Label>Catégorie(s)</Form.Label>
            <CategoryList setInput={setInput} input={input}/>
          </div>
      </Form>
      <Button className="mb-5" onClick={fetchUser} variant="primary" type="submit">
        Create
      </Button>
    </>
  );
};

export default CourseForm;
