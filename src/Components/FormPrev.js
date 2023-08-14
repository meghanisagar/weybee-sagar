import { Card, ListGroup } from 'react-bootstrap';


const FormPrev = (props) => {
    return (
        <>
            <h3>form pre..</h3>
            {props.userData != undefined && props.userData != [] && (
                <Card style={{ width: '18rem' }}>
                    <Card.Header>User Details</Card.Header>
                    <ListGroup variant="flush">
                        <ListGroup.Item>Full name : {props.userData.name}</ListGroup.Item>
                        <ListGroup.Item>Mobile Number : {props.userData.mobileno}</ListGroup.Item>
                        <ListGroup.Item>Email : {props.userData.email}</ListGroup.Item>
                        <ListGroup.Item>Gender : {props.userData.gender}</ListGroup.Item>
                        <ListGroup.Item>Country :  </ListGroup.Item>
                    </ListGroup>
                </Card>
            )}
        </>
    )
}

export default FormPrev;