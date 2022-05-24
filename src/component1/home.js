import react from "react";
import './home.css';
import Headnav from "../navigation/headnav";

//import Nav1 from './nednav1/nav1';
//import Nav2 from './nednav2/nav2';
//import Nav3 from './nednav3/nav3';
//import img1 from './nednav2/air.jpg';
// import img2 from './nednav2/glap.jpg';
// import img3 from './nednav2/gpc.jpg';
// import img4 from './nednav2/hset.jpg';
// import img5 from './nednav2/vr.jpg';
function Home(props){
    return(
        <div className="home">
            <Headnav/>
            
    {/* <div className='wholeContainer'>
     <div className='topbrand'>Top product</div>
  <Nav2 name="Gaming laptop" img={img1}/>
   <Nav2 name="Ear pods" img={img1}/>
   <Nav2 name="Gaming pc" img={img1}/>
   <Nav2 name="Head set" img={img1}/>
   <Nav2 name="Virtual reality" img={img1}/>
   
   </div> */}
   </div>
    
    )
}
export default Home;