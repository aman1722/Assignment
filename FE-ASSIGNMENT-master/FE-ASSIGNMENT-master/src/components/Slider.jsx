import React, { useState, useEffect } from "react";
import "../CSS/Slider.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Slider = () => {
  const images = [
    "https://via.placeholder.com/400x200?text=Image+1",
    "https://via.placeholder.com/400x200?text=Image+2",
    "https://via.placeholder.com/400x200?text=Image+3",
    "https://via.placeholder.com/400x200?text=Image+4",
    "https://via.placeholder.com/400x200?text=Image+5",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex === images.length - 1) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, [currentIndex, images]);

  return (
    <>
      <h3>Carousel Slider</h3>
      <div className="carousel-container">
        <Carousel autoPlay interval={10000} selectedItem={currentIndex}>
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Slide ${index}`} />
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default Slider;
