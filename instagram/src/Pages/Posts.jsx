import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Container } from "react-bootstrap";
const Posts = ({ post }) => {
  return (
    <div>
      <Container>
        <Card
          style={{
            width: "800px",
            backgroundColor: "white",
            borderColor: "white",
          }}
        >
          <Card.Body>
            <Card.Title>
              <img
                src="http://resource4.sodonsolution.org/elselt/image/2020/05/21/qoddp00369cjpgb3/38735659_1860724667341479_9080045546508386304_o_s.png"
                alt=""
              />
              <p>Title : {post.title}</p>
            </Card.Title>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default Posts;
