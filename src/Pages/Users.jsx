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
                <img
                  src={user.image}
                  alt=""
                  style={{
                    width: "80px",
                    height: "80px",
                    border: "3px solid pink",
                    borderRadius: "100%",
                  }}
                  p
                />

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
