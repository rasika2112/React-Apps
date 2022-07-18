import { ListGroup, Row, Col, Button } from "react-bootstrap";

import { DisplayItem } from "./displayItem";

const DisplayList = ({ list, deleteItem, edit }) => (
  <ListGroup>
    {list &&
      list.map((item) => (
        <Row key={item.id}>
          <Col sm={7}>
            <DisplayItem item={item.value} />
          </Col>
          <Col>
            <Button variant="danger" onClick={() => deleteItem(item.id)}>
              Delete
            </Button>
          </Col>
          <Col>
            <Button variant="primary" onClick={() => edit(item.id)}>
              Edit
            </Button>
          </Col>
        </Row>
      ))}
  </ListGroup>
);

export default DisplayList;
