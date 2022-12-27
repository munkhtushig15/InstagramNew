import "./CreatePost.css";
import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";

const Create = () => {
  const [value, setValue] = useState([]);
  const instance = axios.create({
    baseURL: "http://localhost:8000",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  const Post = async () => {
    const response = await instance.post("/posts", {
      username: value,
    });
    console.log(response);
  };
  const Dlt = async () => {
    const response = await instance.delete("/posts", {
        
    });

    console.log(response);
  };
  return (
    <div>
      <center>
        <input onChange={(e) => setValue(e.target.value)} />

        <button style={{ width: 200, height: 40 }} onClick={Post}>
          CREATE
        </button>
        <input onChange={(e) => setValue(e.target.value)} />
        <button style={{ width: 200, height: 40 }} onClick={Dlt}>
          DELETE
        </button>
      </center>
    </div>
  );
};
export default Create;
