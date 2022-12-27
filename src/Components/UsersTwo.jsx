import "bootstrap/dist/css/bootstrap.min.css";
// import { Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
const UsersTwo = ({ post }) => {
  return (
    <div id="hoverIt">
      <Link
        href="#"
        style={{ color: "white" }}
        className="text-decoration-none paddingUm"
        to={`/${post._id}`}
      >
        <div className="userTwoContainer">
          <img className="userProfileTwo" src={post.image} alt="" />
          <div className="texts">
            <span
              style={{
                fontFamily: "Rockwell",
                color: "black ",
              }}
            >
              {post.username}
            </span>
            <span className="grayTexts">{post.username}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default UsersTwo;
