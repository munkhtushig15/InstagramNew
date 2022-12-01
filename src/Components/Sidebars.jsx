import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import "../App.css";
import axios from "axios";
import Loading from "./Loading";

const Sidebars = () => {
  const [expanded, setExpanded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

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

  useEffect(() => {
    getData();
  }, []);

  const searchHandler = () => {
    if (expanded === false) {
      setExpanded(true);
      console.log(expanded);
    } else if (expanded === true) {
      setExpanded(false);
      console.log(expanded);
    }
  };
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <div className="sideBars">
            <div className="menus">
              <div style={{ padding: "50px" }}>
                {!expanded ? (
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1280px-Instagram_logo.svg.png"
                    alt=""
                    height={"50px"}
                    width={"150px"}
                  />
                ) : (
                  <img
                    src="data:image/png;base64,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"
                    alt=""
                    height={50}
                    width={50}
                  />
                )}
              </div>
              <Button
                style={{
                  backgroundColor: "white",
                  color: "black",
                  borderRadius: "100px",
                  width: "300px",
                  height: "50px",
                  fontFamily: "rockwell",
                  fontSize: "30px",
                  border: "1px solid white",
                  display: "flex",
                  justifyContent: "flex-start",
                  padding: "50px",
                }}
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1946/1946436.png"
                  alt=""
                  style={{ width: "50px", height: "50px" }}
                />
                <div style={{ marginTop: "10px" }}>
                  &nbsp;{!expanded && "Home"}
                </div>
              </Button>
              <Button
                onClick={searchHandler}
                style={{
                  backgroundColor: "white",
                  color: "black",
                  borderRadius: "100px",
                  width: "300px",
                  height: "50px",
                  fontFamily: "rockwell",
                  fontSize: "30px",
                  border: "1px solid white",
                  display: "flex",
                  justifyContent: "flex-start",
                  padding: "50px",
                }}
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/149/149852.png"
                  alt=""
                  style={{ width: "50px", height: "50px" }}
                />
                <div style={{ marginTop: "5px" }}>
                  &nbsp;{!expanded && "Search"}
                </div>
              </Button>
            </div>
          </div>
          <div
            className="searchmenu"
            style={{
              background: "white",
              height: "100vh",
              width: "500px",
              display: expanded ? "block" : "none",
              position: "fixed",
              left: "9%",
              zIndex: 100,
              border: "1px solid black",
            }}
          >
            <p className="SearchP" style={{ marginLeft: "20px" }}>
              Search{" "}
            </p>
            <div>
              <input
                type="search"
                style={{
                  width: "400px",
                  height: "50px",
                  borderRadius: "100px",
                  marginLeft: "20px",
                }}
              />
              <button
                style={{
                  width: "70px",
                  height: "50px",
                  background: "#F3EFE0",
                  color: "black",
                  border: "1px solid white",
                  borderRadius: "100px",
                }}
              >
                GET
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Sidebars;
