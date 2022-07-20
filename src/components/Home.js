import { Link } from "react-router-dom";
const Home = ({ formdata }) => {
  return (
    <div className="container ">
      <div className="crud border p-3 mb-5 mt-5 bg-body rounded">
        <div className="row">
          <div className="table-responsive ">
            <table className="table table-hover ">
              <thead>
                <tr className="border">
                  <th>Sr. NO.</th>
                  <th>Calender Name</th>
                  <th>Sent To (No of persons)</th>
                  <th>CreatedAt.</th>
                  <th>UpdatedAt.</th>
                  <th>status</th>
                  <th>
                    <Link className="btn btn-outline-primary w-20" to={"/add"}>
                      Add New Form
                    </Link>
                  </th>
                </tr>
              </thead>
              <div className="row ">
                <div className="col-sm-3 mt-4 text-gred"></div>
              </div>
              <tbody>
                {formdata.map((item) => (
                  <tr key={item.calName} className="border">
                    <td>{item.id}</td>
                    <td>{item.calName}</td>
                    <td>{item.sendTo}</td>
                    <td>{item.date}</td>
                    <td>{item.date}</td>
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
