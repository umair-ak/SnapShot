// npx tailwindcss -i ./src/index.css -o ./output.css --watch

// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/Navigation';
import SearchForm from './components/SearchForm';
import GalleryContainer from './containers/GalleryContainer';
import { PhotoContextProvider } from './context/PhotoContext';

function App() {
  return (
    <PhotoContextProvider>
      <Router>
        <div className="App">
          <Header />
          <SearchForm />
          <Navigation />
          <Routes>
            <Route path="/" element={<GalleryContainer category="mountain" />} />
            <Route path="/mountain" element={<GalleryContainer category="mountain" />} />
            <Route path="/beach" element={<GalleryContainer category="beach" />} />
            <Route path="/bird" element={<GalleryContainer category="bird" />} />
            <Route path="/food" element={<GalleryContainer category="food" />} />
            <Route path="/search/:query" element={<GalleryContainer />} />
          </Routes>
        </div>
      </Router>
    </PhotoContextProvider>
  );
}

export default App;