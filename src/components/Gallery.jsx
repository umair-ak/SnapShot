/* eslint-disable react/prop-types */
import React from 'react';
import Photo from './Photo';


const Gallery = ({ photos }) => {
  if (photos.length === 0) {
    return <p>Photos not found</p>
  }

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {photos.map(photo => (
          <Photo 
            key={photo.id} 
            url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
            title={photo.title} 
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;