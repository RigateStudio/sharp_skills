import React, { useContext, useState, useEffect } from "react";
import { Container, Button, Form, Alert } from "react-bootstrap";
import Cookies from "js-cookie";
import { StoreContext } from "../../store/index.jsx";
///////////////////////
const LoginForm = () => {
  const [input, setInput] = useState({role:"student"});
  const [token, setToken] = useState("");
  const store = useContext(StoreContext);
  const [errors, setErrors] = useState([]);

  const fetchUser = () => {
    console.log("fetchUser()");
    console.log(input)
    const data = {
      user: {
        email: input.email,
        password: input.password,
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
          setErrors([]);
          store.setCurrentUser(response);
        } else {
          console.log("setErrors");
          setErrors(response.errors);
        }
        console.log("store is")
        console.log(store.currentUser)
      });
  };

  const clickFetch = () => {
    console.log("clickFetch()");
    console.log(input);
    fetchUser();
  };

  const handleInputChange = (event) => {
    console.log(input)
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
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={handleInputChange}
            name="email"
            type="email"
            placeholder="Enter email"
          />
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
        </Form>

      <Button onClick={clickFetch} variant="primary" type="submit">
        Submit
      </Button>
    </Container>
  );
};

export default LoginForm;
