import React from 'react';
import './nav2.css';
import logo1 from './ayush.jpg';
function Nav2(props){
    return(
        <div className='nav2'>
            <div className='prod1'>
               <img src={`${props.img}`} height={150} width={250} />
            </div>   
              <div>{props.name}</div>
        </div>
    );
}
export default Nav2;