import React from 'react'
import Hamburger from './Hamburger'
import './index.css';

import contact from './assets/contact.png'
import shopping from './assets/shopping.png'
import './index.css'

// import Contactpage from './Contactpage';
const Navbarmain = () => {
  return (
    <>
<div className='Navmain-content'>
< Hamburger />
<div className="contact-header">
        <header className="contact-header-content">
            
      <a href="#logo" className="logo1">
                <svg className="logo1-icon">
                    <path d="M14,0c2.6,0,4.6,2.1,4.6,4.7S16.5,9.3,14,9.3c-2.6,0-4.7,2.1-4.7,4.7s2,4.8,4.7,4.8s4.6,2.1,4.6,4.6
                    c0,2.6-2.1,4.6-4.6,4.6c-2.6,0-4.7-2.1-4.7-4.6c0-2.6-2.1-4.6-4.6-4.6l0,0c-2.6,0-4.6-2.1-4.6-4.7s2.1-4.6,4.7-4.6l0,0
                    c2.6,0,4.6-2.1,4.6-4.7C9.3,2.1,11.4,0,14,0z"></path>
                <path d="M21,10.2c2.1,0,3.8,1.7,3.8,3.7c0,2.1-1.7,3.8-3.8,3.8s-3.7-1.7-3.7-3.8C17.2,11.9,18.9,10.2,21,10.2z"></path>
</svg>
</a>  

<div className="icon-box">
    <img src={shopping} alt="" className="icon-1"/>
    <img src={contact} alt="" className="icon-1"/>
</div>
            </header>
            </div>
 
</div>
    </>
  )
}

export default Navbarmain
