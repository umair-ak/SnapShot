import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { PhotoContext } from '../context/PhotoContext';

const Navigation = () => {
  const { runSearch } = useContext(PhotoContext);

  const categories = [
    { name: 'Mountain', path: '/mountain' },
    { name: 'Beaches', path: '/beach' },
    { name: 'Birds', path: '/bird' },
    { name: 'Food', path: '/food' }
  ];

  return (
    <nav className="main-nav text-center">
      <ul className='flex justify-center'>
        {categories.map(category => (
          <li key={category.path} className='bg-black text-white m-4 px-4'>
            <NavLink 
              to={category.path}
              onClick={() => runSearch(category.name.toLowerCase())}
            >
              {category.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;