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
     <Nav1/>
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
  );
}

export default App;
