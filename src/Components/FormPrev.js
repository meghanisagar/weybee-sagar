import { Card, ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";

const FormPrev = () => {
  const userInformation = useSelector((state) => state.userInfo);

  return (
    <>
      <h3>User Information</h3>
      {Object.keys(userInformation).length > 0 && (
        <Card style={{ width: "18rem" }}>
          <Card.Header>User Details</Card.Header>
          <ListGroup variant="flush">
            {Object.keys(userInformation).map((val, k) => (
              <ListGroup.Item key={val}>
                {`${val} : ${userInformation[val]}`}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card>
      )}
    </>
  );
};

export default FormPrev;
