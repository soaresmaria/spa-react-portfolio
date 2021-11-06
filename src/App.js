import React from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="App-header">
      <Header></Header>
      </div>
      
      <div className='About'>
        <About></About>
      </div>
      <div className='work'>
        <Work></Work>
      </div>
      <div className='contact'>
        <Contact></Contact>
      </div>
    </div>
  );
}

export default App;
