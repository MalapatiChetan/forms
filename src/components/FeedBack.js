import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const FeedBack = () => {
  return (
    <div class="container ">
      <div className="crud border p-3 mb-5 mt-5 bg-body rounded">
        <Form>
          <Row className="mb-3">
            <Form.Group
              className="mb-5"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Details  of Calender Request"
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group
              className="mb-3"
              as={Col}
              sm={5}
              controlId="exampleForm.ControlInput1"
            >
              <Form.Control type="text" placeholder="Feedback history" />
            </Form.Group>
          </Row>
        </Form>
      </div>
    </div>
  );
};

export default FeedBack;
