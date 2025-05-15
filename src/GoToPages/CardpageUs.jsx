import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // Importing useLocation to access the current URL parameters
import Navbarmain from '../Navbarmain'; // Importing the main navigation component
import { findModelByName } from '../API/Navbar3API'; // Function to find model data by name
import CardPage from '../CardPage'; // Importing the CardPage component for specific model rendering

const CardpageUs = () => {

  const defaultModel = {
    colors: [],
    name: 'Default modelData',
    realPrice: '',
    discountPrice: 0,
  };

  // State to store the model data fetched and the loading status
 
  // State to store the model data fetched and the loading status
  const [modelData, setModelData] = useState(defaultModel); // Initializing model data with defaultModel
  const [loading, setLoading] = useState(false); // State to track loading status


  // useLocation is used to get the current URL and extract query parameters like 'model'
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const modelName = queryParams.get('model'); // Extracting the model name from the query parameter

  // useEffect hook to fetch model data when the component mounts or when the model name changes
  useEffect(() => {
    if (modelName) {
      fetchModelData(modelName);
    }
  }, [modelName]);

  // Function to fetch the model data based on the model name
  const fetchModelData = (modelName) => {
    setLoading(true); // Show loading indicator while fetching data
    try {
      const data = findModelByName(modelName); // Fetching model data from Navbar3API
      if (data) {
        setModelData(data); // Set the fetched model data in the state
      } else {
        console.error('Model not found');
      }
    } catch (error) {
      console.error('Failed to fetch model data:', error);
    } finally {
      setLoading(false); // Hide the loading indicator once the data is fetched
    }
  };

  // Function to render the appropriate model details based on the model name
  const renderModelDetails = () => {
    switch (modelData.name) {
      // Cases for specific models that should be rendered using the CardPage component
      case 'iPhone 15 Pro Max':
      case 'iPhone 14 Pro':
      case 'Galaxy Z Fold 6':
        return <CardPage modelData={modelData} />; // Render the CardPage component for these models

      // Add cases for other models as needed

      // Add other cases for different models
      // case 'Galaxy Z Fold 6':
      // case 'Pixel 7 Series':
      //   return <OtherModelComponent modelData={modelData} />;
      default:
        return <p>Model not found</p>; // Fallback message if the model name doesn't match any case
    }
  };

  return (
    <>
      <Navbarmain /> {/* Render the main navigation bar */}
      <section className="cardpage-us-container">
        {loading ? (
          <p>Loading...</p> // Show a loading message while data is being fetched
        ) : modelData ? (
          renderModelDetails() // Render the model details if data is available
        ) : (
          <p>Model not found</p> // Show an error message if no data is found
        )}
      </section>
    </>
  );
};

export default CardpageUs;
