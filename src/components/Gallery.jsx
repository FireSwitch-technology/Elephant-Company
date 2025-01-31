import React from "react";

const Gallery = ({ images, columnCount, gap }) => {
  return (
    <div
      className=" inline-block  "
      style={{ columns: columnCount, gap: `${gap}px` }}
    >
      {images.map((image) => (
        <div key={image.id} className="overflow-hidden rounded-3xl">
          <img
            src={image.Image}
            alt={`Gallery image ${image.id}`}
            className="w-full h-full object-cover  rounded-3xl"
            style={{ padding: `${gap / 2}px` }}
          />
        </div>
      ))}
    </div>
  );
};

export default Gallery;

// import "../gallery.css";

// const Gallery = ({ columnCount, gap }) => {
//   const images = [
//     { id: 1, Image: Construction },
//     { id: 2, Image: Painting },
//     { id: 3, Image: Workers },
//     { id: 4, Image: Scaffolding },
//     { id: 5, Image: Hallway },
//     { id: 6, Image: Kitchen },
//     { id: 7, Image: Ceiling },
//     { id: 8, Image: team },
//   ];
//   return (
//     <div
//       className="w-full gallery"
//       style={{ columns: columnCount, gap: `${gap}px` }}
//     >
//       {images.map((item, index) => (
//         <div key={index}>
//           <img src={item.Image} className="w-full" />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Gallery;
