import React from "react";

// filepath: /c:/Users/ASUS/Documents/ElephantCompany/src/components/Gallery.jsx
const Gallery = ({ images, columnCount, gap, onImageClick }) => {
  return (
    <div className="block" style={{ columns: columnCount, gap: `${gap}px` }}>
      {images.map((image, index) => (
        <div
          key={image.id}
          className="overflow-hidden rounded-lg cursor-pointer"
          onClick={() => onImageClick(image.Image, index)}
        >
          <img
            src={image.Image}
            alt={`Gallery image ${image.id}`}
            className="w-full h-full object-cover rounded-3xl"
            style={{ padding: `${gap / 2}px` }}
          />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
