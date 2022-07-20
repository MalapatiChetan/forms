import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";

const FeedBack = () => {
  return (
    <div className="container ">
      <div className="crud border p-3 mb-5 mt-5 bg-body rounded">
        <Form>
          <Row className="mb-3">
            <Form.Group className="mb-5">
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Details  of Calender Request"
              />
            </Form.Group>
          </Row>
          {/* <Row className="mb-3">
            <Form.Group className="mb-3" as={Col} sm={5}>
              <Form.Control type="text" placeholder="Feedback history" />
            </Form.Group>
          </Row> */}
          <Form.Group className="mb-3">
            <Form.Control type="file" multiple placeholder="Feedback history" />
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};

export default FeedBack;
