import React, {useState, useEffect} from "react";
import { Button, Form } from "react-bootstrap";
import CategoryList from "../category/CategoryList.jsx"

const CourseForm = () => {
    const [input, setInput] = useState({});
    const [token, setToken] = useState("");
  
    const fetchUser = () => {
      const data = {
        course: {name: input.name, teacher_id: input.password, password_confirmation: input.password_confirmation}
      };
      fetch("http://localhost:3000/api/signup", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      .then((response) => {
        for (var pair of response.headers.entries()) { // accessing the entries
          console.log(pair)
          if (pair[0] === "authorization") { // key I'm looking for in this instance
          Cookies.set("token", pair[1])        }
        }
        return response.json()
      })
      .then((response) => {
        console.log(response)
        console.log(Cookies.get("token"))
      })
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
        <Form.Group controlId="exampleForm.ControlSelect2">
            <Form.Label>Example multiple select</Form.Label>
            <Form.Control as="select" multiple>
                <CategoryList />
            </Form.Control>
        </Form.Group>
      </Form>
      <Button
        className="mb-5"
        onClick={() => clickFetch()}
        variant="primary"
        type="submit"
      >
        Sign up
      </Button>
    </>
  );
};

export default CourseForm;
