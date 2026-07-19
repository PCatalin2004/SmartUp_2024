import "./App.css";
import React from "react";
import Despre from "./components/Despre";
import Sectiuni from "./components/Sectiuni";
import Oportunitati from "./components/Oportunitati";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import Angajabilitate from "./components/Angajabilitate";
import Antreprenoriat from "./components/Antreprenoriat";
import Educatie from "./components/Educatie";
import Evenimente from "./components/Evenimente";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop/>
        <Routes>
          <Route exact path='/' element={<Sectiuni/>}/>
          <Route path='/oport' element={<Oportunitati/>}/>
          <Route path='/despre' element={<Despre/>}/>
          <Route path='/angajabilitate' element={<Angajabilitate/>}/>
          <Route path='/antreprenoriat' element={<Antreprenoriat/>}/>
          <Route path='/educatie' element={<Educatie/>}/>
          <Route path='/events' element={<Evenimente/>}/>
        </Routes>
      </Router>
    </>
  );
}
export default App;