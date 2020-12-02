import React, {useState, useEffect} from "react";
import { Button, Form } from "react-bootstrap";
import Cookies from "js-cookie";

const Registration = () => {
    const [input, setInput] = useState({});
    const [token, setToken] = useState("");
  
    const fetchUser = () => {
      const data = {
        user: {email: input.email, password: input.password, password_confirmation: input.password_confirmation}
      };
      fetch("/api/signup", {
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
  
  
    const clickFetch = () => {
      fetchUser()
    };
  
    const handleInputChange = (event) => {
      setInput({
        ...input,
        [event.target.name]: event.target.value,
      });
    };

    return (
        <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="First name" />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Last name" />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}

    export default Registration