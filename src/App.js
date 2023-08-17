import { Container, Col, Row } from "react-bootstrap";
import { FormComp, FormPrev } from "./Components/index";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <FormComp />
        </Col>
        <Col>
          <FormPrev />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
