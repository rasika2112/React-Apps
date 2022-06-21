import React from 'react'
import { ListGroup, Row, Col, Button } from 'react-bootstrap';
import DisplayItem from './DisplayItem';

const DisplayList = ({ list, deleteItem }) => {
    return ( 
        <ListGroup>
            {list.map((item) => (
                <Row key={list.indexOf(item)}>
                    <Col sm={7}>
                        <DisplayItem item={item} />
                    </Col>
                    <Col>
                        <Button variant='danger' onClick={() => deleteItem(list.indexOf(item))}>Delete</Button>
                    </Col>
                </Row>
            ))}
        </ListGroup>
     );
}
 
export default DisplayList;