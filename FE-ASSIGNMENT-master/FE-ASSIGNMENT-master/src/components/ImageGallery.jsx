import React, { useState } from "react";

const images = [
  "https://via.placeholder.com/200x200?text=Image+1",
  "https://via.placeholder.com/200x200?text=Image+2",
  "https://via.placeholder.com/200x200?text=Image+3",
];

const ImageGallery = () => {
  const [clickedImage, setClickedImage] = useState(null);

  const handleImageClick = (index) => {
    setClickedImage(index);
  };

  const handleCloseModal = () => {
    setClickedImage(null);
  };

  return (
    <div>
      <h2>Image Gallery</h2>
      <h4>Click on any Picture</h4>
      <div className="image-list">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index}`}
            onClick={() => handleImageClick(index)}
            className={clickedImage === index ? "clicked" : ""}
          />
        ))}
      </div>
      {clickedImage !== null && (
        <div className="image-modal">
          <img
            src={images[clickedImage]}
            alt="Selected Image"
            className="clicked"
          />
          <button onClick={handleCloseModal}>Close</button>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
