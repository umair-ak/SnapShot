import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { PhotoContext } from '../context/PhotoContext';

const SearchForm = () => {
  const [searchText, setSearchText] = useState('');
  const navigate = useNavigate();
  const { runSearch } = useContext(PhotoContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchText.trim()) {
      runSearch(searchText);
      navigate(`/search/${searchText}`);
      setSearchText('');
    }
  };

  return (
    <form className="search-form text-center mt-2" onSubmit={handleSubmit}>
      <input
        className='border border-black mr-2'
        type="text"
        placeholder="Search..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button className='button border-black' type="submit">Search</button>
    </form>
  );
};

export default SearchForm;