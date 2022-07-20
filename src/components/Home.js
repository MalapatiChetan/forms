import { useState } from "react";
import { Link } from "react-router-dom";
const Home = () => {
  const forms = [
    {
      id: "1",
      calName: "ABC",
      Nop: "3",
      CreatedAt: "23-07-2022",
      UpdatedAt: "24-07-2022",
      status: "Approved",
    },
  ];
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div class="container ">
      <div className="crud border p-3 mb-5 mt-5 bg-body rounded">
        <div class="row">
          <div class="table-responsive ">
            <table class="table table-hover ">
              {" "}
              <thead>
                <tr class="border">
                  <th>Sr. NO.</th>
                  <th>Calender Name</th>
                  <th>Sent To (No of persons)</th>
                  <th>CreatedAt.</th>
                  <th>UpdatedAt.</th>
                  <th>status</th>
                  <th>
                    <Link
                      className="btn btn-outline-primary w-20"
                      to={"/add"}
                      onClick={handleShow}
                    >
                      Add New Form
                    </Link>
                  </th>
                </tr>
              </thead>
              <div class="row ">
                <div class="col-sm-3 mt-4 text-gred"></div>
              </div>
              <tbody>
                {forms.map((item) => (
                  <tr key={item.id} class="border">
                    <td>{item.id}</td>
                    <td>{item.calName}</td>
                    <td>{item.Nop}</td>
                    <td>{item.CreatedAt}</td>
                    <td>{item.UpdatedAt}</td>
                    <td>{item.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
