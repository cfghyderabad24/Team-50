import logo from "./logo.svg";
import "./App.css";
import Sponser from "./Component/Sponser";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Component/About";
import Attendence from "./Component/Attendence";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Sponser />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/attendence" element={<Attendence />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
