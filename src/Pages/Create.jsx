import axios from "axios";
import { useState } from "react";
import "./Create.css";
import "./CreatePost.css";

const Create = () => {
  const [username, setUsername] = useState("");
  const [date, setDate] = useState();
  const [image, setImage] = useState("");
  const [desc, setDesc] = useState("");
  const [imageBG, setImageBG] = useState("");
  const instance = axios.create({
    baseURL: "http://localhost:8000",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  const Post = async () => {
    const response = await instance.post("/posts", {
      username: username,
      description: desc,
      imageTwo: imageBG,
      image: image,
      date: date,
    });
    console.log(response);
  };
  return (
    <div className="bigBack">
      <div className="createHiihHeseg">
        <div className="box">
          <input
            placeholder="Username:"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            placeholder="Image:"
            onChange={(e) => setImage(e.target.value)}
          />
          {image ? ( 
            <img src={image} alt="zurag aa zurag" className="image" />
          ) : null}
          <input
            placeholder="Description:"
            onChange={(e) => setDesc(e.target.value)}
          />
          <input
            placeholder="BGImage:"
            onChange={(e) => setImageBG(e.target.value)}
          />
          {imageBG ? (
            <img src={imageBG} alt="imageBG" className="image" />
          ) : null}
          <input type="date" placeholder="Born:" onChange={(e) => setDate(e.target.value)}/>
        </div>
        <button onClick={Post}>POST</button>
      </div>
    </div>
  );
};
export default Create;
