import "bootstrap/dist/css/bootstrap.min.css";
import "./Post.css";

const Posts = ({ post }) => {
  return (
    <div className="postContainer">
      <div className="userProfileInPosts">
        <img
          src="https://pbs.twimg.com/media/EUj1VojXQAEL9Og.jpg"
          alt=""
          className="posterProfile"
        />
        <span className="posterName">user name</span>
      </div>
      <img
        src="https://pbs.twimg.com/media/EUj1VojXQAEL9Og.jpg"
        alt=""
        className="postPicture"
      />
      <div className="icons">
        <div className="sideIcons">
          <img
          className="postIcons"
            src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png"
            alt="#"
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/2939/2939459.png"
            alt="#"
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/2099/2099085.png"
            alt="#"
          />
        </div>
        <img
          src="https://cdn-icons-png.flaticon.com/512/5662/5662990.png"
          alt="#"
          className="sideIcons"
        />
      </div>
      <span>{post.reactions} likes</span>
      <div>
        <span>user name</span>
        <span>{post.title}</span>
      </div>
      <div>
        <span>{post.userId}</span>
        <span>MINUTES AGO</span>
      </div>
      <div className="comments">
        <div className="commentLeft">
          <img src="https://cdn-icons-png.flaticon.com/512/927/927567.png" alt="" />
          <input type="text" placeholder="Add a comment ..." />
        </div>
        <span id="postColor">Post</span>
      </div>
    </div>
  );
};

export default Posts;
