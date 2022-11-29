import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Container } from "react-bootstrap";
const Posts = ({ post }) => {
  return (
    <div>
      <Container>
        <Card
          style={{
            width: "18rem",
            backgroundColor: "blue",
            borderColor: "white",
          }}
        >
          <Card.Img></Card.Img>
          <Card.Body>
            <Card.Title>
              <p>Title : {post.title}</p>
            </Card.Title>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default Posts;
