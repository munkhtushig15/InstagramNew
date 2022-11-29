import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Container } from "react-bootstrap";
const Users = ({ user }) => {
  return (
    <div>
      <Container>
        <Card
          style={{
            width: "18rem",
            backgroundColor: "red",
            borderColor: "white",
          }}
        >
          <Card.Body>
            <Card.Title>
              <p>FirstName : {user.firstName}</p>
            </Card.Title>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default Users;
