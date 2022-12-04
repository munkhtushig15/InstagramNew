import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "../App.css";

const Users = ({ user }) => {
  return (
    // <div>
    //   <Container>
    //     <Link
    //       href="#"
    //       style={{ color: "white" }}
    //       className="text-decoration-none"
    //       to={`/${user.id}`}
    //     >
    //       <Card
    //         style={{
    //           width: "120px",
    //           backgroundColor: "darkwhite",
    //           borderColor: "white",
    //         }}
    //       >
    //         <Card.Body>
    //           <Card.Title>
    //             <img className="userProfile" src={user.image} alt="" />

    //             <center>
    //               <p
    //                 style={{
    //                   fontFamily: "Rockwell",
    //                   color: "black ",
    //                   marginTop: "15px",
    //                 }}
    //               >
    //                 {user.maidenName}
    //               </p>
    //             </center>
    //           </Card.Title>
    //         </Card.Body>
    //       </Card>
    //     </Link>
    //   </Container>
    // </div>
    <div className="userContainer">
      <Link
        href="#"
        style={{ color: "white" }}
        className="LinkContainer"
        to={`/${user.id}`}
      >
        <img className="userProfile" src={user.image} alt="" />
        <span className="userMaidenName">{user.maidenName}</span>
      </Link>
    </div>
  );
};

export default Users;
