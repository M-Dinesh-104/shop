import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import About from './component1/about';
import Home from './component1/home';
import Product from './component1/product';
import Contact from './component1/contact';
import {route,link} from 'react-router-dom';
function App() {
  return (
    // <Router>
    <div className='nav1'>
      <Home/>
      <About/>
      <Contact/>
      <Product/>
      
  {/* <Route  path="/" component={Home}/>
  <Route  path="/about" component={About}/>
  <Route  path="/product" component={Product}/>
  <Route  path="/contact" component={Contact}/> */}
  
    </div>
    // </Router>
  );
}

export default App;
