/* eslint-disable react/prop-types */

import React, { createContext, useState, useCallback } from 'react';
import axios from 'axios';

export const PhotoContext = createContext();

const API_KEY = '636e1481b4f3c446d26b8eb6ebfe7127';


export const PhotoContextProvider = ({ children }) => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  const runSearch = useCallback(async (query) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
      );
      setPhotos(response.data.photos.photo);
    } catch (error) {
      console.error('Error fetching photos:', error);
      setPhotos([]);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <PhotoContext.Provider value={{ photos, loading, runSearch }}>
      {children}
    </PhotoContext.Provider>
  );
};