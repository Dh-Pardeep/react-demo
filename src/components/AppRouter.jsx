import React from 'react'
import {  Route,  Routes } from "react-router-dom";
import HomePage from './homepage/HomePage';
import Counting from './homepage/Counting';
import TwoPower from './homepage/TwoPower';
import EvenOdd from './homepage/EvenOdd';
import From from './homepage/From';
import Table from './homepage/Table';
import NameChange from './homepage/NameChange';
import GoDelhi from './homepage/GoDelhi';
import PrintStar from './homepage/PrintStar';
import Greater from './homepage/Greater';
import Sum from './homepage/Sum';
const AppRouter = () => {
  return (
    <div>
      <React.Fragment>
     <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/Counting' element={<Counting/>}/>
      <Route path='/TwoPower' element={<TwoPower/>}/>
      <Route path='/EvenOdd' element={<EvenOdd/>}/>
      <Route path='/From' element={<From/>}/>
      <Route path='/Table' element={<Table/>}/>
      <Route path='/NameChange' element={<NameChange/>}/>
      <Route path='/GoDelhi' element={<GoDelhi/>}/>
      <Route path='/PrintStar' element={<PrintStar/>}/>
      <Route path='/greater' element={<Greater/>}/>
      <Route path='/Sum' element={<Sum/>}/>
     </Routes>
    </React.Fragment>
    </div>
  )
}

export default AppRouter