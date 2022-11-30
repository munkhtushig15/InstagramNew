import "bootstrap/dist/css/bootstrap.min.css";
const Users = ({ user }) => {
  return (
    <div className="userContainer">
      <div className="userProfileContainer">
        <img className="userProfile" src={require("../Images/userProfile.png")} alt="" />
      </div>
      <span className="userUsername">{user.username}</span> 
    </div>
  );
};

export default Users;
