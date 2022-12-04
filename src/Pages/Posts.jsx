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
        <span className="posterName">UserName</span>
      </div>
      <img
        src="https://pbs.twimg.com/media/EUj1VojXQAEL9Og.jpg"
        alt=""
        className="postPicture"
      />
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
      <span className="postReactions">{post.reactions} likes</span>
      <div className="postComment">
        <span className="posterName">user name</span>
        <span>{post.title}</span>
      </div>
      <div className="timeAgo">
        <span>{post.userId}</span>
        <span>MINUTES AGO</span>
      </div>
      <hr />
      <div className="comments">
        <div className="commentLeft">
          <img
            className="postIcons"
            src="https://cdn-icons-png.flaticon.com/512/927/927567.png"
            alt=""
          />
          <input className="postCommentInput" type="text" placeholder="Add a comment ..." />
        </div>
        <span id="postColor">Post</span>
      </div>
    </div>
  );
};

export default Posts;
