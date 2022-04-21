import React from 'react'
import {NavLink, } from 'react-router-dom';
import './Navbar.css';
import $ from 'jquery';
import mainlogo from './campfire (1).png'
function Navbar() {
  


    $(function () {
        $(document).scroll(function () {
          var $nav = $(".navbarerie");
          $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        });
      });

    return (
        
          <nav className="navbarerie">
           <div className="navbarcont">

              <NavLink to="/Home" className="navblogi">
              <img src={mainlogo} alt="" />
                     
                    <p>GAMELAB</p>   
              </NavLink> 
             
              <ul className='navmen'>
                  <li className='navit'>
                      <NavLink to='/Home' className='navlin'>
                          HOME
                      </NavLink>
                  </li>
                  <li className='navit'>
                      <NavLink to='/game'  className='navlin' >
                          GAME
                      </NavLink>
                  </li>
                  <li className='navit'>
                      <NavLink to='/labpage' className='navlin' >
                          LABS
                      </NavLink>
                   </li>  
                
                   
              </ul>
        
             
           </div>
           </nav>
           
    )
}

export default Navbar
