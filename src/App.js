import "./App.css";
import Home from "./Components/Home";
import FormFile from "./Components/Form";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./Components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Whysenchola from "./Components/WhySenchola";
import Signup from "./Components/SignUp";
import About from "./Components/About";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<FormFile />} />
          <Route path="/whysenchola" element={<Whysenchola />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
