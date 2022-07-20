import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const AddForm = ({ onhandleFormData }) => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    calName: "",
    sendTo: "",
    markCC: "",
    date: "",
  });

  const onInputChange = (e) => {
    setForm((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onhandleFormData(form);
    navigate("/");
  };

  return (
    <div className="container ">
      <div className="crud border p-3 mb-5 mt-5 bg-body rounded">
        <div
          className="col-sm-2 offset-sm-0 mt-2 mb-2"
          style={{ color: "Black" }}
        >
          <h2>
            <b>ADD FORM</b>
          </h2>
        </div>

        <Form onSubmit={(e) => onSubmit(e)}>
          <Row className="mb-3">
            <Form.Group as={Col} sm={3}>
              <Form.Control
                type="text"
                placeholder="Calender Name"
                name="calName"
                value={form.calName}
                onChange={(e) => onInputChange(e)}
              />
            </Form.Group>

            <Form.Group as={Col} sm={5}>
              <Form.Control
                type="text"
                placeholder="Send to"
                name="sendTo"
                value={form.sendTo}
                onChange={(e) => onInputChange(e)}
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} sm={4}>
              <Form.Control
                placeholder="Mark CC"
                name="markCC"
                value={form.markCC}
                onChange={(e) => onInputChange(e)}
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} sm={6}>
              <Form.Control
                type="date"
                placeholder="Date of Birth"
                name="date"
                value={form.date}
                onChange={(e) => onInputChange(e)}
              />
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
