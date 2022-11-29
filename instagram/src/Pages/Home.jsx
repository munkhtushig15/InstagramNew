import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Users from "./Users";
import Posts from "./Posts";
import axios from "axios";
const Home = () => {
  const [data, setData] = useState([]);
  const [post, setPost] = useState([]);
  const instance = axios.create({
    baseURL: "https://dummyjson.com/",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  const getData = async () => {
    const response = await instance.get("https://dummyjson.com/users");
    console.log(response.data.users);
    setData(response.data.users);
  };
  const getPost = async () => {
    const response = await instance.get("https://dummyjson.com/posts");
    console.log(response.data.posts);
    setPost(response.data.posts);
  };
  useEffect(() => {
    getData();
    getPost();
  }, []);
  return (
    <div className="container">
      <div>
        <Button onClick={getData}>Home</Button>
        <Button>Search</Button>
      </div>
      <div className="Users rounded-5" style={{ display: "flex" }}>
        {data &&
          data.map((user, id) => {
            return (
              <div>
                <Users key={id} user={user} />
              </div>
            );
          })}
      </div>
      <div>
        {post &&
          post.map((post, id) => {
            return (
              <div>
                <Posts key={id} post={post} />
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default Home;
