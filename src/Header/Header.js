import React, {useState,useEffect} from 'react';
import {Component} from 'react';
import {Link} from 'react-router-dom'
import './Header.css'
import {Button} from './Button'

function Header (){
  
      const[click,setClick]=useState(false);
      const [button,setButton]=useState(true)
      
      const handleClick = () => setClick(!click);
      const closeMobileMenu=()=>setClick(false);
      
      const showButton = () =>{
        if(window.innerWidth<=960){
          setButton(false);
        }else{
          setButton(true)
        }
      };

      useEffect(()=>{
        showButton()
      },[])

      window.addEventListener('resize',showButton);
        
      return(
          <>
            <nav className="navbar">
              <div className="navbar-container">
                <Link to ="/" className="navbar-logo" onClick={closeMobileMenu}>
                  MusicHub <i class="fas fa-guitar"></i>

                </Link>
                <div className="menu-icon" onClick={handleClick}>
                  <i className={click ? 'fas fa-times': 'fas fa-bars'} />
                </div>
                <ul className= { click ? 'nav-menu active':'nav-menu'} >
                  <li class= 'nav-item'>
                    <Link to="/" className="nav-links" onClick ={closeMobileMenu}>
                      Home
                    </Link>
                  </li>
                  <li class= 'nav-item'>
                    <Link to="/products" className="nav-links" onClick ={closeMobileMenu}>
                      Shop
                    </Link>
                  </li>
                  <li class= 'nav-item'>
                    <Link to="/addproduct" className="nav-links" onClick ={closeMobileMenu}>
                      Add Product
                    </Link>
                  </li>
                  <li class= 'nav-item'>
                    <Link to="/register" className="nav-links-mobile" onClick ={closeMobileMenu}>
                      Sign Up
                    </Link>
                  </li>
                </ul>
                {button && <Button buttonStyle="btn--outline">SIGN UP</Button>}
                </div>
            </nav>
         </>

        
        ) 
    }
export default Header;