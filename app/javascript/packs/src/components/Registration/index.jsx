import React, { useContext, useState, useEffect } from "react";
import { Container, Button, Form, Alert } from "react-bootstrap";
import Cookies from "js-cookie";
import { StoreContext } from "../../store/index.jsx";
///////////////////////
const Registration = () => {
  const [input, setInput] = useState({ role: "student" });
  const [token, setToken] = useState("");
  const store = useContext(StoreContext);
  const [errors, setErrors] = useState([]);

  const fetchUser = () => {
    console.log("fetchUser()");
    console.log(input);
    const data = {
      user: {
        first_name: input.first_name,
        last_name: input.last_name,
        email: input.email,
        role: input.role,
        password: input.password,
        password_confirmation: input.password_confirmation,
      },
    };
    fetch("/api/signup", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => {
        for (var pair of response.headers.entries()) {
          if (pair[0] === "authorization") {
            Cookies.set("token", pair[1]);
          }
        }
        return response.json();
      })
      .then((response) => {
        console.log(response);
        console.log(Cookies.get("token"));
        if (!response.errors) {
          //console.log(response.errors)
          setErrors([]);
          Cookies.set("currentUser", JSON.stringify(response))
          store.setCurrentUser(response);
        } else {
          console.log("setErrors");
          setErrors(response.errors);
        }
        console.log("store is");
        console.log(store.currentUser);
      });
  };

  const clickFetch = () => {
    console.log("clickFetch()");
    console.log(input);
    fetchUser();
  };

  const handleInputChange = (event) => {
    console.log(input);
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Container>
      {errors.map((error) => (
        <Alert variant="warning">{error.detail}</Alert>
      ))}
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            onChange={handleInputChange}
            name="first_name"
            type="text"
            placeholder="First name"
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            onChange={handleInputChange}
            name="last_name"
            type="text"
            placeholder="Last name"
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={handleInputChange}
            name="email"
            type="email"
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={handleInputChange}
            name="password"
            type="password"
            placeholder="Password"
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password confirmation</Form.Label>
          <Form.Control
            onChange={handleInputChange}
            name="password_confirmation"
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Label>Choose if you are a Student or a Teacher</Form.Label>
        <Form.Control as="select" name="role" onChange={handleInputChange}>
          <option>student</option>
          <option>teacher</option>
        </Form.Control>
      </Form>

      <Button onClick={clickFetch} variant="primary" type="submit">
        Submit
      </Button>
    </Container>
  );
};

export default Registration;
