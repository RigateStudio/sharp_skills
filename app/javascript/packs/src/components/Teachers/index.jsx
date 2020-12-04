import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
const Teachers = (props) => {
  const [users, setUsers] = useState([]);

  const fetchUsers = () => {
    fetch("/api/users")
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setUsers(response);
        props.setInput({teacher_id : response[0].id})
      });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return users.filter((user)=>user.role == "teacher").map((user) => {
    return (
    <option value={user.id}>{`${user.first_name} ${user.last_name}`}</option>
    );
  });
};

export default Teachers;
