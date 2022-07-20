import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AddForm from "./components/AddForm";
import FeedBack from "./components/FeedBack";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/add" element={<AddForm />}></Route>
          <Route path="/feedback" element={<FeedBack />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
