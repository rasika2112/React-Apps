import { ListGroup, Row, Col, Button } from "react-bootstrap";

import { DisplayItem } from "./displayItem";

const DisplayList = ({ list, deleteItem, editItem }) => (
  <ListGroup>
    {list &&
      list.map((item, index) => (
        <Row key={index}>
          <Col sm={7}>
            <DisplayItem item={item} />
          </Col>
          <Col>
            <Button variant="danger" onClick={() => deleteItem(index)}>
              Delete
            </Button>
          </Col>
        </Row>
      ))}
  </ListGroup>
);

export default DisplayList;
