import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Users from "./Users";
import Posts from "./Posts";
import axios from "axios";
import "../App.css";

const menuStyle = document.querySelectorAll(".menus");
const searchInputStyle = document.querySelectorAll(".srchInput");

const Home = () => {
  // false === 'hidden'
  // true === 'block'
  const [data, setData] = useState([]);
  const [post, setPost] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const instance = axios.create({
    baseURL: "https://dummyjson.com/",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  const getData = async () => {
    setIsLoading(true);
    const response = await instance.get("https://dummyjson.com/users");
    console.log(response.data.users);
    setData(response.data.users);
    setIsLoading(false);
  };
  const getPost = async () => {
    setIsLoading(true);
    const response = await instance.get("https://dummyjson.com/posts");
    console.log(response.data.posts);
    setPost(response.data.posts);
    setIsLoading(false);
  };

  let expanded = false;
  const searchHandler = () => {
    if (expanded === false) {
      menuStyle.style.animation = "expand 1s linear infinite";
      expanded = true;
      console.log(expanded);
    } else if (expanded === true) {
      menuStyle.style.animation = "dexpand 1s linear infinite";
      expanded = false;
      console.log(expanded);
    }
  };

  useEffect(() => {
    getData();
    getPost();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="homePageContainer">
          <div className="menu">
            <div className="sideBars">
              <Button onClick={getData}>Home</Button>
              <Button onClick={searchHandler}>Search</Button>
            </div>
            <div className="srchInput">
              <input type="text" />
            </div>
          </div>

          <div className="main">
            <div className="bigBox">
              <div className="mainOne">
                <div className="usersContainer">
                  <div className="users">
                    {data &&
                      data.map((user, id) => {
                        return (
                          <div>
                            <Users key={id} user={user} />
                          </div>
                        );
                      })}
                  </div>
                </div>
                <div className="postsContainer">
                  <div className="posts">
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
              <div className="mainTwo">

              </div>
            </div>
            
            
          </div>
        </div>
      )}
    </>

    
  );
};
export default Home;
