import React from "react"

const CategoryList = () => {

    const [categories, setCategories] = useState([]);

    const fetchCategories = () => {
      fetch("/api/categories")
        .then((response) => response.json())
        .then((response) => {
          console.log(response)
          setCategories(response);
        });
    };
  
    useEffect(() => {
      fetchCategories();
    }, []);

    return (
        categories.map((category) => {
            return  <option>{category.name}</option>;
        })
    )
}

export default CategoryList;