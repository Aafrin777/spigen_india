import React, { useState, useEffect } from 'react';
import './card.css'; // Import CSS file for styling

const CardPage = ({ modelData }) => {
  // Default model data in case no model is provided


  // State to manage the selected color, initialized with the first color or a default object
  const [selectedColor, setSelectedColor] = useState(modelData.colors[0] || { image: '' });

  useEffect(() => {
    // useEffect hook to update the selected color when the model data changes
    // Update selectedColor when modelData.colors changes, if selectedColor is not set

    if (modelData.colors.length > 0 && !selectedColor) {
      setSelectedColor(modelData.colors[0]);
    }
  }, [modelData, selectedColor]); // Dependencies: modelData and selectedColor

  // Function to handle color change when a user selects a different color
  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  // Function to render model details based on the model name
  const renderModelDetails = () => {
    // Dynamic class name for styling based on the model's name
    const modelClass = modelData.name.replace(/ /g, '-').toLowerCase(); // Generate a dynamic class name based on the model name
    const cardClass = `card-page ${modelClass}-card`; // Create a class for the card with the model's specific class

    // Switch case to handle different models and their specific styles
    switch (modelData.name) {
      case 'iPhone 15 Pro Max':
        return (
          <div className={cardClass}>
            <h2>{modelData.name}</h2>
            <img src={selectedColor.image} alt={modelData.name} className="card-model-image" />
            <p className="card-real-price">Real Price: ${modelData.realPrice}</p>
            <p className="card-discount-price">Discount Price: ${modelData.discountPrice}</p>
            <div className="card-color-options">
              <h4>Select Color:</h4>
              <div className="card-color-circles">
                {modelData.colors.map((color, index) => (
                  <div
                    key={index}
                    className={`color-circle ${selectedColor.name === color.name ? 'selected' : ''}`}
                    style={{ backgroundColor: color.name.toLowerCase() }}
                    onClick={() => handleColorChange(color)}
                  />
                ))}
              </div>
            </div>
            <button className="add-to-cart">Add to Cart</button>
          </div>
        );

      case 'Galaxy Z Fold 6':
      case 'Galaxy Z Flip 6':
        return (
          <div className={cardClass}>
            <h2>{modelData.name}</h2>
            <img src={selectedColor.image} alt={modelData.name} className="card-model-image" />
            <p className="card-real-price">Real Price: ${modelData.realPrice}</p>
            <p className="card-discount-price">Discount Price: ${modelData.discountPrice}</p>
            <div className="card-color-options">
              <h4>Select Color:</h4>
              <div className="card-color-circles">
                {modelData.colors.map((color, index) => (
                  <div
                    key={index}
                    className={`color-circle ${selectedColor.name === color.name ? 'selected' : ''}`}
                    style={{ backgroundColor: color.name.toLowerCase() }}
                    onClick={() => handleColorChange(color)}
                  />
                ))}
              </div>
            </div>
            <button className="add-to-cart">Add to Cart</button>
          </div>
        );

      case 'Pixel 7 Series':
        return (
       
            <div className={cardClass}>
              <h2>{modelData.name}</h2>
              <img src={selectedColor.image} alt={modelData.name} className="card-model-image" />
              <p className="card-real-price">Real Price: ${modelData.realPrice}</p>
              <p className="card-discount-price">Discount Price: ${modelData.discountPrice}</p>
              <div className="card-color-options">
                <h4>Select Color:</h4>
                <div className="card-color-circles">
                  {modelData.colors.map((color, index) => (
                    <div
                      key={index}
                      className={`color-circle ${selectedColor.name === color.name ? 'selected' : ''}`}
                      style={{ backgroundColor: color.name.toLowerCase() }}
                      onClick={() => handleColorChange(color)}
                    />
                  ))}
                </div>
              </div>
              <button className="add-to-cart">Add to Cart</button>
            </div>
        );

      default:
        // Fallback for models not explicitly handled
        return (
          <div className="card-page default-card">
            <h2>{modelData.name}</h2>
            <img src={selectedColor.image} alt={modelData.name} className="model-image" />
            <p>No specific details available.</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
        );
    }
  };

  return (
    <div className="card-page-container">
      {renderModelDetails()}
    </div>
  );
};

export default CardPage;
