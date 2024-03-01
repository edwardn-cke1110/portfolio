import React from 'react';
import './App.css';

import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';
import HobbiesPage from './pages/HobbiesPage/HobbiesPage';
import ContactsPage from './pages/ContactsPage/ContactsPage';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<HomePage/>}/>
            <Route path='contacts' element={<ContactsPage/>}/>
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