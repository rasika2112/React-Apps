import React from 'react'
import { Button, Col, ListGroupItem, Row } from 'react-bootstrap';

const DisplayItem = ({ item }) => {
    return ( 
        <ListGroupItem>{item}</ListGroupItem>
     );
}
 
export default DisplayItem;