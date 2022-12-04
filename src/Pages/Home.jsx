import { useEffect, useState } from "react";
import Users from "./Users";
import Posts from "./Posts";
import axios from "axios";
import "../App.css";
import Loading from "../Components/Loading";
import { Link } from "react-router-dom";
import Suggest from "../Components/Suggest";

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
            <Link
              to="/5"
              className="text-decoration-none suggestProContainerSuga"
              style={{ display: "flex", color: "black" }}
            >
              <div className="suggestProContainer">
                <img
                  src="https://robohash.org/adverovelit.png"
                  alt=""
                  className="suggestProfile"
                />
                <div className="negNeg">
                  <span>Yundt</span>
                  <span className="grayTexts">Mavix</span>
                </div>
              </div>
              <p id="switch">Switch</p>
            </Link>
            <div id="gantshanContainer">
              <span id="suggestions">Suggestions For You</span>
              <span id="seeAll">See All</span>
            </div>
            <div className="suggestCONTAINS">
              <Suggest
                image={"https://robohash.org/perferendisideveniet.png"}
                name="Abshire"
                follower="Smitham"
                number="10"
              />
              <Suggest
                image={"https://robohash.org/amettemporeea.png"}
                name="Koepp"
                follower="Smitham"
                number="5"
              />
              <Suggest
                image={"https://robohash.org/consequunturabnon.png"}
                name="xisherwoodr"
                follower="Smitham"
                number="13"
              />
              <Suggest
                image={"https://robohash.org/nequeodiosapiente.png"}
                name="Wuckert"
                follower="Smitham"
                number="1"
              />
              <Suggest
                image={
                  "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg"
                }
                name="wiecznyx"
                follower="shroud"
                number="69"
              />
            </div>
            <p id="damnTexts">© 2022 INSTAGRAM FROM META</p>
          </div>
        </div>
      )}
    </>
  );
};
export default Home;
