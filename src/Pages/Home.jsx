import { useEffect, useState } from "react";
import Users from "./Users";
import Posts from "./Posts";
import axios from "axios";
import "../App.css";
import Loading from "../Components/Loading";

const Home = () => {
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

  useEffect(() => {
    getData();
    getPost();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="bigContainer">
          <div className="main">
            <div className="Users">
              {data &&
                data.map((user, index) => {
                  return <Users key={index} user={user} />;
                })}
            </div>
            <div className="bigPostContainer">
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
          <div className="suggestYou">
            
          </div>
        </div>
      )}
    </>
  );
};
export default Home;
