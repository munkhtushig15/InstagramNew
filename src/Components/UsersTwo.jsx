import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
const UsersTwo = ({ user }) => {
  return (
    <div id="hoverIt">
      <Link
        href="#"
        style={{ color: "white" }}
        className="text-decoration-none paddingUm"
        to={`/${user.id}`}
      >
        <div className="userTwoContainer">
          <img className="userProfileTwo" src={user.image} alt="" />
          <div className="texts">
            <span
              style={{
                fontFamily: "Rockwell",
                color: "black ",
              }}
            >
              {user.maidenName}
            </span>
            <span className="grayTexts">{user.firstName}</span>
          </div>
        </div>
      </Link>

      {/*       
      <Container>
        <Link
          href="#"
          style={{ color: "white" }}
          className="text-decoration-none"
          to={`/${user.id}`}
        >
          <Card
            style={{
              width: "120px",
              border: 0,
            }}
          >
            <Card.Body>
              <Card.Title className="userTwoContainer">
                <img className="userProfileTwo" src={user.image} alt="" />
                <div className="texts">
                    <span
                        style={{
                        fontFamily: "Rockwell",
                        color: "black ",
                        }}
                    >
                        {user.maidenName}
                    </span>
                    <span className="grayTexts">
                        {user.firstName}
                    </span>
                </div>
                
              </Card.Title>
            </Card.Body>
          </Card>
        </Link>
      </Container> */}
    </div>
  );
};

export default UsersTwo;
