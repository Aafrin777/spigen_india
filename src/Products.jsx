import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import './index.css';
import CYRILL from './assets/CYRILL.png';
import gearlock from './assets/gearlock.png';
import legato from './assets/legato.png';

const Products = ({ categories, goToBrands }) => {
  const handleImageClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div>
      <ul className="product-list">
        {categories.map(category => (
          <li key={category} onClick={() => goToBrands(category)} className="product-item">
            {category} <FaChevronRight size={10} />
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

export default Products;
