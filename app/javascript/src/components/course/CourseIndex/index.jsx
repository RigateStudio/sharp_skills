import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const CourseIndex = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = () => {
    fetch("http://localhost:3000/api/courses")
      .then((response) => response.json())
      .then((response) => {
        setPosts(response);
      });
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="Posts">
      {posts.map((post) => {
        return <Post description={post.description} url={post.url} />;
      })}
    </div>
  );
};

export default CourseIndex;
 