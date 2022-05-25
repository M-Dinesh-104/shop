<<<<<<< HEAD
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import About from './component1/about';
import Home from './component1/home';
import Product from './component1/product';
import Contact from './component1/contact';
import {route,link} from 'react-router-dom';
import Nav1 from './nednav1/nav1';
function App() {
  return (
    // <Router>
    <div className='nav1'>
    <div className='top'></div>
      {/* <Home/>
      <About/>
      <Contact/>
      <Product/> */}
      <Router>
        <Routes>
  <Route  path="/" element={<Home/>}/>
  <Route  path="/about" element={<About/>}/>
  <Route  path="/product" element={<Product/>}/>
  <Route  path="/contact" element={<Contact/>}/>
  </Routes>
  </Router>
    </div>
=======
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
>>>>>>> 164e4ed6f173fcbb319cf0f3b9394f8da7277a1e
  );
}

export default App;
