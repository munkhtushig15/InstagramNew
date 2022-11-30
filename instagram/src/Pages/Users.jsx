import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Container } from "react-bootstrap";
const Users = ({ user }) => {
  return (
    <div>
      <Container>
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

              <p style={{ fontFamily: "Rockwell" }}>{user.maidenName}</p>
            </Card.Title>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default Users;
