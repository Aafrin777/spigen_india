import React from 'react'
import { NavLink } from 'react-router-dom';
import Layer1 from './assets/Layer1.webp'
import layer2 from './assets/layer2.webp'
import layer4 from './assets/layer4.webp'
import layer5 from './assets/layer5.webp'
import layer6 from './assets/layer6.webp'
import layer7 from './assets/layer7.webp'
import layer8 from './assets/layer8.webp'
import layer9 from './assets/layer9.webp'
import layer10 from './assets/layer10.webp'
// import layer11 from './assets/layer11.webp'
import './layer.css';
import './Slides.css';
import Slides from './Slides';

const Layer1hero = () => {
  return (
    <>
    {/* ----------------------------------LAYER1 */}
    <div id="Layer1-section">
   <div className="Layer1-container">
   <img src={Layer1} alt="Monsoon Sale" className="layer1-image"/>
   <button>
            <NavLink id="layer1-button" to="/Anotherpagelayer1">Buy Now</NavLink>
        </button>
        </div>
        </div>

    {/* ----------------------------------LAYER-2 */}
        <div id="Layer2-section">
        <div className="Layer2-container">
      <img 
        src={layer2} 
        alt="Limited Edition Classic C1" 
        className="layer2-image" 
      />
      <div className="Layer2-content">
        <h2 id="Layer2-headline">Limited Edition Classic C1</h2>
        <button id="layer2-button">
          <NavLink to="/anotherpagelayer1">Learn More</NavLink>
        </button>
      </div>
    </div>
    </div>


    {/* ----------------------------------LAYER-3 */}
       <Slides />


    {/* ----------------------------------LAYER-4 */}
       <div id="Layer4-section">
   <div className="Layer4-container">
   <img src={layer4} alt="Monsoon Sale" className="layer4-image"/>
   <button>
            <NavLink id="layer4-button" to="/Anotherpagelayer1">Buy Now</NavLink>
        </button>
        </div>
        </div>
        

    {/* ----------------------------------LAYER-5 */}
       <div id="Layer5-section">
   <div className="Layer5-container">
   <img src={layer5} alt="Monsoon Sale" className="layer5-image"/>
   <button>
            <NavLink id="layer5-button" to="/Anotherpagelayer1">Buy Now</NavLink>
        </button>
        </div>
        </div>
        

    {/* ----------------------------------LAYER-6 */}
       <div id="Layer6-section">
   <div className="Layer6-container">
   <img src={layer6} alt="Monsoon Sale" className="layer6-image"/>
   <button>
            <NavLink id="layer6-button" to="/Anotherpagelayer1">Buy Now</NavLink>
        </button>
        </div>
        </div>
        
        
    {/* ----------------------------------LAYER-7 */}
    <div id="Layer7-section">
   <div className="Layer7-container">
   <img src={layer7} alt="Monsoon Sale" className="layer7-image"/>
   <button>
            <NavLink id="layer7-button" to="/Anotherpagelayer1">Buy Now</NavLink>
        </button>
        </div>
        </div>


    {/* ----------------------------------LAYER-8 */}
       <div id="Layer8-section">
   <div className="Layer8-container">
   <img src={layer8} alt="Monsoon Sale" className="layer8-image"/>
   <button>
            <NavLink id="layer8-button" to="/Anotherpagelayer1">Buy Now</NavLink>
        </button>
        </div>
        </div>
    {/* ----------------------------------LAYER-9 */}
       <div id="Layer9-section">
   <div className="Layer9-container">
   <img src={layer9} alt="Monsoon Sale" className="layer9-image"/>
   <button>
            <NavLink id="layer9-button" to="/Anotherpagelayer1">Buy Now</NavLink>
        </button>
        </div>
        </div>
     
    {/* ----------------------------------LAYER-10 */}
       <div id="Layer10-section">
   <div className="Layer10-container">
   <img src={layer10} alt="Monsoon Sale" className="layer10-image"/>
   <button>
            <NavLink id="layer10-button" to="/Anotherpagelayer1">Buy Now</NavLink>
        </button>
        </div>
        </div>
    
       

    </>
  )
}

export default Layer1hero;

    