import React, { useState } from 'react';
import { GoArrowLeft } from "react-icons/go";  // Importing the left arrow icon from react-icons
import { IoIosSearch } from "react-icons/io";  // Importing the search icon from react-icons
import { RxCross1 } from "react-icons/rx";    // Importing the cross icon from react-icons
import Products from './Products';  // Importing the Products component
import Brands from './Brands';      // Importing the Brands component
import Models from './Models';      // Importing the Models component
import NavbarPro from './NavbarPro'; // Importing the NavbarPro component
import CardPage from './CardPage';   // Importing the CardPage component
import { getCategories, getBrandsForCategory, getModelsForBrand } from './API/Navbar3API'; // Importing API functions to get categories, brands, and models
import './index.css'; // Importing the CSS file for styling

const Hamburger = () => {
  // Managing the state of the current step/page in the navigation flow
  const [currentStep, setCurrentStep] = useState('home');
  // Managing the state of the selected category, brand, and model
  const [selection, setSelection] = useState({ category: null, brand: null, model: null });
  // Managing the state of the search query input by the user
  const [searchQuery, setSearchQuery] = useState('');

  // Fetching all categories using the API function
  const categories = getCategories();
  // Fetching brands based on the selected category, if a category is selected
  const brands = selection.category ? getBrandsForCategory(selection.category) : [];
  // Fetching models based on the selected brand, if a brand is selected
  const models = selection.brand ? getModelsForBrand(selection.brand) : [];

  // Function to toggle between home and products view
  const toggleCategoriesVisibility = () => {
    // Toggling the step between 'home' and 'products'
    setCurrentStep(currentStep === 'home' ? 'products' : 'home');
  };

  // Function to move to the brands view after selecting a category
  const goToBrands = (category) => {
    // Using the spread operator (`...selection`) to retain previous selections
    // while updating the `category` property
    setSelection({ ...selection, category });
    // Setting the current step to 'brands' to show the brands view
    setCurrentStep('brands');
  };

  // Function to move to the models view after selecting a brand
  const goToModels = (brand) => {
    // Using the spread operator (`...selection`) to retain previous selections
    // while updating the `brand` property
    setSelection({ ...selection, brand });
    // Setting the current step to 'models' to show the models view
    setCurrentStep('models');
  };

  // Function to move to the card page after selecting a model
  const goToCardPage = (model) => {
    // Using the spread operator (`...selection`) to retain previous selections
    // while updating the `model` property
    setSelection({ ...selection, model });
    // Setting the current step to 'card' to render the CardPage component
    setCurrentStep('card');
  };

  // Function to handle the back button click, navigating back in the flow
  const goBack = () => {
    // Navigating back based on the current step
    if (currentStep === 'card') setCurrentStep('models');
    else if (currentStep === 'models') setCurrentStep('brands');
    else if (currentStep === 'brands') setCurrentStep('products');
    else if (currentStep === 'products') setCurrentStep('home');
  };

  // Function to handle the search input change and update the state
  const handleSearchChange = (event) => {
    // Updating the searchQuery state with the current input value
    setSearchQuery(event.target.value);
  };

  return (
    <div className="app">
      <div className="navbar">
        {currentStep === 'home' && (
          // Showing the NavbarPro component when on the home step
          <NavbarPro goToProducts={toggleCategoriesVisibility} />
        )}
        {currentStep !== 'products' && currentStep !== 'home' && (
          // Showing the back arrow icon when not on the home or products step
          <GoArrowLeft size={19} onClick={goBack} className="back-button" />
        )}
        {currentStep === 'products' && (
          // Showing the cross icon to close the products view
          <RxCross1 size={17} onClick={toggleCategoriesVisibility} className="close-button" />
        )}
      </div>

      {(currentStep === 'products' || currentStep === 'brands' || currentStep === 'models') && (
        <div className="sidebar-content">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="search-input"
            />
            <IoIosSearch size={24} className="search-icon" />
          </div>
          <hr className="separator" />
          {currentStep === 'products' && (
            // Rendering the Products component when on the products step
            // Filtering categories based on the search query
            <Products
              categories={categories.filter(category => category.toLowerCase().includes(searchQuery.toLowerCase()))}
              goToBrands={goToBrands}
            />
          )}
          {currentStep === 'brands' && (
            // Rendering the Brands component when on the brands step
            // Filtering brands based on the search query
            <Brands
              brands={brands.filter(brand => brand.toLowerCase().includes(searchQuery.toLowerCase()))}
              goToModels={goToModels}
            />
          )}
          {currentStep === 'models' && (
            // Rendering the Models component when on the models step
            // Filtering models based on the search query
            <Models
              models={models.filter(model => model.name.toLowerCase().includes(searchQuery.toLowerCase()))}
              goToCardPage={goToCardPage}
            />
          )}
        </div>
      )}

      {currentStep === 'card' && (
        // Rendering the CardPage component when on the card step
        <CardPage model={selection.model} />
      )}
    </div>
  );
};

export default Hamburger;



import React, { useState, useEffect } from 'react';
import './card.css'; // Import CSS file
// import Navbar3API from  "./API/ServiceAPI";
const CardPage = ({ model }) => {
  // Default modelData if none is provided
  const defaultModel = {
    colors: [],
    name: 'Default modelData',
    realPrice: '',
    discountPrice: 0,
  };

  // Use the provided modelData or fall back to the default modelData
  const modelData = model || defaultModel;

  // Initialize selectedColor with the first color if available
  const [selectedColor, setSelectedColor] = useState(modelData.colors[0] || { image: '' });

  useEffect(() => {
    // Update selectedColor if modelData.colors changes
    if (modelData.colors.length > 0 && !selectedColor) {
      setSelectedColor(modelData.colors[0]);
    }
  }, [modelData, selectedColor]);

  // Function to handle color change
  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  // Function to render model details based on model name
  const renderModelDataDetails = () => {
    const cardClass = modelData.name.toLowerCase().replace(/ /g, '-') + '-card'; // Dynamic class name
    const currentImage = selectedColor?.image || ''; // Default image if not available

    return (
      <div className={`card-page ${cardClass}`}>
        <h2>{modelData.name}</h2>
        <img src={currentImage} alt={modelData.name} className="modelData-image" />
        <p className="real-price">Real Price: ${modelData.realPrice}</p>
        <p className="discount-price">Discount Price: ${modelData.discountPrice}</p>
        <div className="color-options">
          <h4>Select Color:</h4>
          <div className="color-circles">
            {modelData.colors.length > 0 ? (
              modelData.colors.map((color, index) => (
                <div
                  key={index}
                  className={`color-circle ${selectedColor.name === color.name ? 'selected' : ''}`}
                  style={{ backgroundColor: color.name.toLowerCase() }}
                  onClick={() => handleColorChange(color)}
                />
              ))
            ) : (
              <p>No colors available</p>
            )}
          </div>
        </div>
        <button className="add-to-cart">Add to Cart</button>
      </div>
    );
  };

  return (
    <div className="card-page-container">
      {renderModelDataDetails()}
    </div>
  );
};

export default CardPage;
