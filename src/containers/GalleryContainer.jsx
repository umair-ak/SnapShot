/* eslint-disable react/prop-types */
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Gallery from '../components/Gallery';
import { PhotoContext } from '../context/PhotoContext';

const GalleryContainer = ({ category }) => {
  const { photos, loading, runSearch } = useContext(PhotoContext);
  const { query } = useParams();
  const [searchPerformed, setSearchPerformed] = useState(false);

  useEffect(() => {
    const searchTerm = query || category || 'mountain';
    if (!searchPerformed) {
      runSearch(searchTerm);
      setSearchPerformed(true);
    }
  }, [category, query, runSearch, searchPerformed]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return <Gallery photos={photos} />;
};

export default GalleryContainer;