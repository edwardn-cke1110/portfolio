import React from 'react';
import './App.css';

// pages component imports
import HomePage from './pages/HomePage/HomePage';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import AboutPage from './pages/AboutPage/AboutPage';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';
import HobbiesPage from './pages/HobbiesPage/HobbiesPage';
import ContactsPage from './pages/ContactsPage/ContactsPage';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<HomePage/>}/>
            <Route path='about' element={<AboutPage/>}/>
            <Route path='projects' element={<ProjectsPage/>}/>
            <Route path='hobbies' element={<HobbiesPage/>}/>
            <Route path='contacts' element={<ContactsPage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;