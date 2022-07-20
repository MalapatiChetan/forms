import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const AddForm = () => {
  const [form, setForm] = useState({
    calName: "",
    sendTo: "",
    markCC: "",
    date: "",
  });

  return (
    <div class="container ">
      <div className="crud border p-3 mb-5 mt-5 bg-body rounded">
        <div class="col-sm-2 offset-sm-0 mt-2 mb-2" style={{ color: "Black" }}>
          <h2>
            <b>ADD FORM</b>
          </h2>
        </div>

        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} sm={3}>
              <Form.Control type="text" placeholder="Calender Name" />
            </Form.Group>

            <Form.Group as={Col} sm={5}>
              <Form.Control type="text" placeholder="Send to" />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} sm={4}>
              <Form.Control type="text" placeholder="Mark CC" />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} sm={6}>
              <Form.Control type="date" placeholder="Date of Birth" />
            </Form.Group>
          </Row>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default AddForm;
