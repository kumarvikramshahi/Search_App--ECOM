import React, { useEffect } from 'react';
import './App.css';
import Home from './pages/home';
import {GenerateFakeProductData} from "./fakeData"

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
