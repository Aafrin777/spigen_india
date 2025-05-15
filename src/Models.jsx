
import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import './index.css';
import CYRILL from './assets/CYRILL.png'
import gearlock from './assets/gearlock.png'
import legato from './assets/legato.png'
const Models = ({ models, goToCardPage }) => {
  const handleImageClick = (url) => {
    window.open(url, '_blank');
  };

  return (

    
    <div>
      <ul className="model-list">
        {models.map(model => (
          <li key={model.name} onClick={() => goToCardPage(model)} className="model-item">
            {model.name} <FaChevronRight size={14} />
          </li>
        ))}
      </ul>
      <h2 className="brands-heading">OUR BRANDS</h2>
      <hr className="separator" />
      <div className="additional-brands">
        <div className="brand-item" onClick={() => handleImageClick('https://www.cyrill.com/')}>
          <img src={CYRILL} alt="CYRILL" className="brand-image" />
        </div>
        <div className="brand-item" onClick={() => handleImageClick('https://spigen.in/pages/gearlock')}>
          <img src={gearlock} alt="Gearlock" className="brand-image" />
      
        </div>
        <div className="brand-item" onClick={() => handleImageClick('https://legatogolf.com/')}>
          <img src={legato} alt="Lagato" className="brand-image" />
         
        </div>
      </div>
    </div>
  );
};

export default Models;
