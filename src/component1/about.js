import reactDom from "react-dom";
import react from 'react';
import Headnav from "../navigation/headnav";
import './about.css';
function About(props)
{
    return(
        <div className="about">
            <Headnav/>
           about us
        </div>
    )
}
export default About;