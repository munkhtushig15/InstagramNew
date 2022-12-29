import "./CreatePost.css";
import axios from "axios";
import { useState } from "react";
import "./Create.css";

const Create = () => {
  const [username, setUsername] = useState([]);
  const [title, setTitle] = useState([]);
  const [desc, setDesc] = useState([]);
  const [imageBG, setImageBG] = useState([]);
  const instance = axios.create({
    baseURL: "http://localhost:8000",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  const Post = async () => {
    const response = await instance.post("/posts", {
      username: username,
      title: title,
      description: desc,
      imageTwo: imageBG,
    });
    console.log(response);
  };
  // const Dlt = async () => {
  //   const response = await instance.delete("/posts", {});

  //   console.log(response);
  // };
  return (
    <div className="bigBack">
      <div className="createHiihHeseg">
        {/* <input placeholder="Name" onChange={(e) => setValue(e.target.value)} />
        <button onClick={Post}>
          CREATE
        </button>
        <input placeholder="Id" onChange={(e) => setValue(e.target.value)} />
        <button onClick={Dlt}>
          DELETE
        </button> */}
        <div className="box">
          <input
            placeholder="Username:"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            placeholder="Title:"
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            placeholder="Description:"
            onChange={(e) => setDesc(e.target.value)}
          />
          <input
            placeholder="BGImage:"
            onChange={(e) => setImageBG(e.target.value)}
          />
        </div>
        <button onClick={Post}>POST</button>
      </div>
    </div>
  );
};
export default Create;
