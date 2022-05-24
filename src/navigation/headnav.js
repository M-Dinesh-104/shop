import React from "react";
import { Link } from "react-router-dom";
import './headnav.css';
import Nav1 from "../nednav1/nav1";

function Headnav()
{
 return(
     <div>
         
        <ul className="headnav">
            <li>
                <Link to='/'>HOME</Link>
                </li>
                <li>
                <Link to='/product'>PRODUCT</Link>
                </li>
                <li>
                <Link to='/about'>ABOUT</Link>
                </li>
                <li>
                <Link to='/contact'>CONTACT</Link>
                </li>
        </ul>
     </div>
 )
}
export default Headnav;