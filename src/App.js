import { Container,Col,Row } from 'react-bootstrap';
import { FormComp,FormPrev } from './Components/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function App() {
  const [userData,setUserData] = useState([]);
  const mangeUserData = (data) => {
    setUserData(data);
  }
  return (
    <Container>
      <Row>
        <Col> <FormComp userData={mangeUserData}/> </Col>
        <Col> <FormPrev userData={userData}/> </Col>
      </Row>
    </Container>
  );
}

export default App;
