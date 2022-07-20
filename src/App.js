import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AddForm from "./components/AddForm";
import FeedBack from "./components/FeedBack";
import { useState } from "react";

function App() {
  const [form, setForm] = useState([]);

  const handleFormData = (formdata) => {
    setForm((oldArray) => [...oldArray, formdata]);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home formdata={form} />}></Route>
          <Route
            path="/add"
            element={<AddForm onhandleFormData={handleFormData} />}
          ></Route>
          <Route path="/feedback" element={<FeedBack />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
