import React from 'react';
import './nav3.css';
function Nav3(props){
    return(
        <div className='nav3'>
            <div className='prod2'>
               <img src={`${props.img}`} height={150} width={250} />
            </div>   
              <div>{props.name}</div>
        </div>
    );
}
export default Nav3;