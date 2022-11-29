import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Users from "./Users";
import Posts from "./Posts";
import axios from "axios";
import "../App.css";
const Home = () => {
  const styles = {
    hidden: {
      width: 0,
    },
    block: {
      width: 100,
    },
  };

  // false === 'hidden'
  // true === 'block'
  const [data, setData] = useState([]);
  const [post, setPost] = useState([]);
  const [isInput, setIsInput] = useState(false);
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
  const searchHandler = () => {
    if (isInput === false) {
      setIsInput(true);
    } else {
      setIsInput(false);
    }
  };
  useEffect(() => {
    getData();
    getPost();
  }, []);
  return (
    <div className="bigContainer">
      <div className="sideBars">
        <div className="menus" style={isInput ? styles.block : styles.hidden}>
          <Button onClick={getData}>Home</Button>
          <Button onClick={searchHandler}>Search</Button>
        </div>
        <div
          className="srchInput"
          style={isInput ? styles.hidden : styles.block}
        >
          <input type="text" />
        </div>
      </div>

      <div className="main">
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
    </div>
  );
};
export default Home;
