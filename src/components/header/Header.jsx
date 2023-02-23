import React from 'react';
import './Header.css';

const Header = () => {
  return (
         <div className='container-header'>
       <div className='container-fresh'>
         <img className=" img-fluid" src={"/images/Rectangle 3.png"}  alt=""></img>
       </div>  
       <div className='container-text'>
          <p className='slogan'>Jugar solo es </p>
          <p className='claim'>el principio</p>
       </div>
    </div>  
  )
}

export default Header