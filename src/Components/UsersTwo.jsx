import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
const UsersTwo = ({ user }) => {
  return (
    <div>
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
              backgroundColor: "darkwhite",
              borderColor: "white",
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
      </Container>
    </div>
  );
};

export default UsersTwo;