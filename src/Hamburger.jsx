import React, { useState } from 'react';
import { GoArrowLeft } from "react-icons/go";
import { IoIosSearch } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import Products from './Products';
import Brands from './Brands';
import Models from './Models';
import NavbarPro from './NavbarPro';
import CardPage from './CardPage';
import { getCategories, getBrandsForCategory, getModelsForBrandAndCategory } from './API/Navbar3API';
import './index.css';

const Hamburger = () => {
  // State to manage the current step or view of the sidebar
  const [currentStep, setCurrentStep] = useState('home');
  
  // State to manage the current selection (category, brand, model)
  const [selection, setSelection] = useState({ category: null, brand: null, model: null });
  
  // State to manage the search query input
  const [searchQuery, setSearchQuery] = useState('');

  // Fetch categories, brands, and models based on the current selection
  const categories = getCategories(); // Fetch all categories
  
  const brands = selection.category ? getBrandsForCategory(selection.category) : []; // Fetch brands for selected category

  const models = selection.brand && selection.category ? getModelsForBrandAndCategory(selection.brand, selection.category) : []; // Fetch models for selected brand

  // Function to toggle between home and products view
  const toggleCategoriesVisibility = () => {
    setCurrentStep(currentStep === 'home' ? 'products' : 'home');
  };

  // Function to set the selected category and move to brands view
  const goToBrands = (category) => {
    setSelection({ ...selection, category });
    setCurrentStep('brands');
  };

  // Function to set the selected brand and move to models view
  const goToModels = (brand) => {
    setSelection({ ...selection, brand });
    setCurrentStep('models');
  };

  // Function to handle moving to the card page for a selected model
  const goToCardPage = (model) => {
    // Update selection with the selected model while keeping previous selections
    setSelection({ ...selection, model });
    // Open the CardPage in a new tab with URL parameters
    window.open(`/cardpageus?model=${encodeURIComponent(model.name)}`, '_blank');
  };

  // Function to handle navigation back through the steps
  const goBack = () => {
    if (currentStep === 'card') setCurrentStep('models');
    else if (currentStep === 'models') setCurrentStep('brands');
    else if (currentStep === 'brands') setCurrentStep('products');
    else if (currentStep === 'products') setCurrentStep('home');
  };

  // Function to handle changes in the search input field
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="app">
      <div className="navbar">
        {/* Render NavbarPro component when on the home view */}
        {currentStep === 'home' && (
          <NavbarPro goToProducts={toggleCategoriesVisibility} />
        )}
        {/* Render back button on any step other than home and products */}
        {currentStep !== 'products' && currentStep !== 'home' && (
          <GoArrowLeft size={19} onClick={goBack} className="back-button" />
        )}
        {/* Render close button to close the products view */}
        {currentStep === 'products' && (
          <RxCross1 size={17} onClick={toggleCategoriesVisibility} className="close-button" />
        )}
      </div>

      {/* Render sidebar content if on products, brands, or models view */}
      {(currentStep === 'products' || currentStep === 'brands' || currentStep === 'models') && (
        <div className="sidebar-content">
          {/* Search bar to filter categories, brands, or models */}
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
          {/* Render Products component if on products view */}
          {currentStep === 'products' && (
            <Products
              categories={categories.filter(category => category.toLowerCase().includes(searchQuery.toLowerCase()))}
              goToBrands={goToBrands}
            />
          )}
          {/* Render Brands component if on brands view */}
          {currentStep === 'brands' && (
            <Brands
              brands={brands.filter(brand => brand.toLowerCase().includes(searchQuery.toLowerCase()))}
              goToModels={goToModels}
            />
          )}
          {/* Render Models component if on models view */}
          {currentStep === 'models' && (
            <Models
              models={models.filter(model => model.name.toLowerCase().includes(searchQuery.toLowerCase()))}
              goToCardPage={goToCardPage}
            />
          )}
        </div>
      )}

      {/* Render CardPage component if on the card view */}
      {currentStep === 'card' && (
        <CardPage model={selection.model} />
      )}
    </div>
  );
};

export default Hamburger;