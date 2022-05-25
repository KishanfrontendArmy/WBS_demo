import React from 'react'
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';

import './App.css';
import Event from "./components/Event";
import Header from './components/Header';
import Speaker from './page/speakers';
import Footer from './components/Footer';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Event />}/>
          <Route path="/speakers" element={
            <>
              <Header />
              <Speaker />
              <Footer />
            </>
          }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
