import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
const Users = ({ user }) => {
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
              <Card.Title>
                <img className="userProfile" src={user.image} alt="" />

                <center>
                  <p
                    style={{
                      fontFamily: "Rockwell",
                      color: "black ",
                      marginTop: "15px",
                    }}
                  >
                    {user.maidenName}
                  </p>
                </center>
              </Card.Title>
            </Card.Body>
          </Card>
        </Link>
      </Container>
    </div>
  );
};

export default Users;
