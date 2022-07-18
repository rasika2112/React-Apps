import React, { useEffect, useState } from 'react';
import TableRow from './TableRow';
import CardDetails from './CardDetails';
import {Row, Col, Container, Table} from 'react-bootstrap';
import NavBar from './Navbar';

export const DataContext = React.createContext(); 

const ShowData = ({ data }) => {

    const [cardItem, setCardItem] = useState('');

    useEffect(() => {
        console.log("ShowData rendered");
    });


    return (
        <Container>
            <NavBar />
            <Row>
                <Col>
                    <Table responsive bordered hover>
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>FirstName</th>
                            <th>LastName</th>
                            <th>Email</th>
                            </tr>
                            </thead>
                            <tbody>{data && data.map(item => (<tr onClick={() => setCardItem( item )} key={item.id}>
                            <TableRow item={item} /></tr>))}</tbody>
                    </Table>
                </Col>


                <Col>
                    <DataContext.Provider value={ cardItem }>
                        <CardDetails key={cardItem.id} />
                    </DataContext.Provider>
                </Col>
            </Row>
        </Container>
     );
}
 
export default ShowData;