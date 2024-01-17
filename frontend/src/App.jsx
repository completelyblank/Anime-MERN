import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateAnime from './pages/CreateAnime';
import ShowAnime from './pages/ShowAnime';
import EditAnime from './pages/EditAnime';
import DeleteAnime from './pages/DeleteAnime';
import '@fontsource/audiowide';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/anime/create" element={<CreateAnime />} />
      <Route path="/anime/details/:id" element={<ShowAnime />} />
      <Route path="/anime/edit/:id" element={<EditAnime />} />
      <Route path="/anime/delete/:id" element={<DeleteAnime />} />
    </Routes>
  );
};

export default App;
