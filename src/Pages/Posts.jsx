import "bootstrap/dist/css/bootstrap.min.css";
import "./Post.css";
import { Link } from "react-router-dom";
import axios from "axios";

const Posts = ({ post }) => {
  const instance = axios.create({
    baseURL: "http://localhost:8000",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  return (
    <div className="postContainer">
      <div className="userProfileInPosts">
        <div>
          <img src={post.image} alt="" className="posterProfile" />
          <span className="posterName">{post.username}</span>
        </div>
        <button className="btntn">delete</button>
      </div>
      <Link href="#" className="LinkContainer" to={`/${post._id}`}>
        <img src={post.imageTwo} alt="" className="postPicture" />
        <div className="postIconsContainer">
          <div className="sideIcons">
            <img
              className="postIcons"
              src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png"
              alt="#"
            />
            <img
              className="postIcons"
              src="https://cdn-icons-png.flaticon.com/512/2939/2939459.png"
              alt="#"
            />
            <img
              className="postIcons"
              src="https://cdn-icons-png.flaticon.com/512/2099/2099085.png"
              alt="#"
            />
          </div>
          <img
            src="https://cdn-icons-png.flaticon.com/512/5662/5662990.png"
            alt="#"
            className="sideIcons postIcons"
          />
        </div>
      </Link>
      <span className="postReactions">
        <strong>{post.postedSince}M</strong> likes
      </span>
      <div className="postComment">
        <span className="posterName">
          <strong>{post.username}</strong>-{post.description}
        </span>
      </div>
      <div className="timeAgo">
        <span>{post._id}</span>
        <span>MINUTES AGO</span>
      </div>
      <hr />
      <div className="comments">
        <div className="commentLeft">
          <img
            className="postIcons"
            src="https://cdn-icons-png.flaticon.com/512/927/927567.png"
            alt="#"
          />
          <input
            className="postCommentInput"
            type="text"
            placeholder="Add a comment ..."
          />
        </div>
        <span id="postColor">Post</span>
      </div>
    </div>
  );
};

export default Posts;
