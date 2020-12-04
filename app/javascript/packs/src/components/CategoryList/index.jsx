import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
const CategoryList = (props) => {
  const [categories, setCategories] = useState([]);

  const fetchCategories = () => {
    fetch("/api/categories")
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setCategories(response);
      });
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleInputChange = (event) => {
    const input = props.input;
    const name = event.target.name;
    if (input.categories.find(id => id === name)) {
      props.setInput({
        ...input,
        categories: input.categories.filter((id) => id !== name),
      });
    } else {
      props.setInput({
        ...input,
        categories: input.categories.concat(name),
      });
    }
    console.log(input);
    console.log(name);
    console.log(input[name]);
  };

  return categories.map((category) => {
    return (
      <Form.Check
        type={"checkbox"}
        name={`${category.id}`}
        label={`${category.name}`}
        onChange={handleInputChange}
      />
    );
  });
};

export default CategoryList;
