import React from 'react';

const Photo = ({ url, title }) => {
  return (
    <div className="relative group overflow-hidden rounded-lg shadow-md">
      <img 
        src={url} 
        alt={title} 
        className="w-full h-40 object-cover transition-all duration-300 ease-in-out transform group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300 ease-in-out"></div>
      <p className="absolute bottom-0 left-0 right-0 p-2 text-white text-xs bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out truncate">
        {title}
      </p>
    </div>
  );
};

export default Photo;