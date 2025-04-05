
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Addpoem from './pages/Addpoem';
import Getpoem from './pages/Getpoem';
import MainLayout from './MainLayout';
import Individual_poem from './pages/Individual_poem';
const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'  element={<MainLayout/>}>
          <Route path='addpoem'  element={<Addpoem/>}/> 
          <Route path='getpoem'  element={<Getpoem/>}/> 
          <Route path='poem'  element={<Individual_poem/>}/> 

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App