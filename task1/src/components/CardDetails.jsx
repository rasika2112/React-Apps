import React, {  useEffect, useContext } from 'react';
import Card from 'react-bootstrap/Card';
import { DataContext } from './ShowData';

const CardDetails = () => {

    const item = useContext(DataContext);

    useEffect(() => {
        console.log("CardDetails rendered");
    })

    return ( 
        item && <Card>
            <Card.Header>
                Details of {item.firstName} {item.lastName}
            </Card.Header>
            <Card.Img alt={item.firstName} src={item.imageUrl} height="300rem" />
            <Card.Body>
                <ul>
                    <li>Age: {item.age}</li>
                    <li>DOB: {item.dob}</li>
                    <li>Contact Number: {item.contactNumber}</li>
                    <li>Email: {item.email}</li>
                </ul>
            </Card.Body>
        </Card>
     );
}
 
export default CardDetails;