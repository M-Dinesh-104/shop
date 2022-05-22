import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./component1/about";
import Home from "./component1/home";
import Product from "./component1/product";
import Contact from "./component1/contact";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/product" element={<Product/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </Router>
  );
}

export default App;
