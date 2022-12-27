import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "../App.css";

const Users = ({ post }) => {
  return (
    <div className="userContainer">
      <Link
        href="#"
        style={{ color: "white" }}
        className="LinkContainer"
        to={`/${post._id}`}
      >
        <img className="userProfile" src={post.image} alt="" />
        <span className="userMaidenName">{post.username}</span>
      </Link>
    </div>
  );
};

export default Users;
