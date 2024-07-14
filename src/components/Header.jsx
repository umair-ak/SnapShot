import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='text-3xl text-center italic font-bold mt-3'>
    <Link to="/">
      <h1 className='italic'>
        SnapShot
      </h1>
      </Link>
    </header>
  );
};

export default Header;