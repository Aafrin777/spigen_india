import React, { useState, useRef } from "react";
import { modelsByCategory } from "/src/API/SlidesAPI.js";
import "./Slides.css";

const Slides = () => {
  // Fetch the slide data (e.g., images and names of models)
  const slideData = modelsByCategory();

  // State to track the current index of the slides being displayed
  const [currentIndex, setCurrentIndex] = useState(0);

  // State to track if the user is currently dragging the slides
  const [isDragging, setIsDragging] = useState(false);

  // State to track the initial X position when dragging starts
  const [startX, setStartX] = useState(0);

  // State to apply a translation (move) during dragging
  const [translateX, setTranslateX] = useState(0);

  // Reference to the container of the slides for handling events
  const slideContainerRef = useRef(null);

  // Function to move to the previous slide
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    // If on the first slide, wrap around to the last slide pair
    const newIndex = isFirstSlide ? slideData.length - 2 : currentIndex - 2;
    setCurrentIndex(newIndex);
    setTranslateX(0); // Reset translation after snapping
  };

  // Function to move to the next slide
  const goToNext = () => {
    const isLastSlide = currentIndex >= slideData.length - 2;
    // If on the last slide, wrap around to the first slide pair
    const newIndex = isLastSlide ? 0 : currentIndex + 2;
    setCurrentIndex(newIndex);
    setTranslateX(0); // Reset translation after snapping
  };

  // Function to directly jump to a specific slide (used by the dots)
  const goToSlide = (index) => {
    setCurrentIndex(index);
    setTranslateX(0); // Reset translation after snapping
  };

  // Function triggered when mouse dragging starts
  const handleMouseDown = (e) => {
    setIsDragging(true); // Start dragging
    setStartX(e.clientX); // Store the initial X position
  };

  // Function triggered during the mouse dragging
  const handleMouseMove = (e) => {
    if (!isDragging) return; // If not dragging, do nothing

    const currentX = e.clientX; // Current X position of the mouse
    const diffX = currentX - startX; // Difference from the initial position

    setTranslateX(diffX); // Translate the slides based on drag distance

    // If dragged far enough, move to the previous or next slide
    if (diffX > 100) {
      goToPrevious();
      setIsDragging(false); // Stop dragging after the slide move
    } else if (diffX < -100) {
      goToNext();
      setIsDragging(false); // Stop dragging after the slide move
    }
  };

  // Function triggered when the mouse is released
  const handleMouseUp = () => {
    setIsDragging(false); // Stop dragging
    setTranslateX(0); // Reset translation after snapping
  };

  // Function triggered when the mouse leaves the slide area
  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false); // Stop dragging if the mouse leaves
      setTranslateX(0); // Reset translation after snapping
    }
  };

  return (
    <div
      className="slides-container"
      onMouseDown={handleMouseDown} // Start dragging
      onMouseMove={handleMouseMove} // Drag movement
      onMouseUp={handleMouseUp} // End dragging
      onMouseLeave={handleMouseLeave} // Stop dragging if mouse leaves
      ref={slideContainerRef}
    >
      {/* Left arrow to move to the previous slide */}
      <div className="slide-arrow left-arrow" onClick={goToPrevious}>
        &#10094;
      </div>

      {/* Slide pair container, moves based on drag or arrow clicks */}
      <div
        className="slide-pair"
        style={{
          transform: `translateX(${translateX}px)`, // Apply drag translation
          transition: isDragging ? "none" : "transform 0.3s ease-in-out", // Smooth snap after dragging
        }}
      >
        {slideData.slice(currentIndex, currentIndex + 2).map((slide, index) => (
          <div key={index} className="slide-card">
            <img src={slide.image} alt={slide.name} className="slide-image" />
            <p className="model-name">{slide.name}</p>
          </div>
        ))}
      </div>

      {/* Right arrow to move to the next slide */}
      <div className="slide-arrow right-arrow" onClick={goToNext}>
        &#10095;
      </div>

      {/* Dots to directly navigate to a specific slide This part of the code is responsible for rendering the "dots" (or indicators) below the slide show that allow users to see which slide pair is currently being displayed and to navigate directly to any slide pair by clicking on a dot. */}
      <div className="dots-container">
        {Array.from({ length: Math.ceil(slideData.length / 2) }).map((_, index) => (
          <div
            key={index}
            className={`dot ${currentIndex === index * 2 ? "active" : ""}`}
            onClick={() => goToSlide(index * 2)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slides;
