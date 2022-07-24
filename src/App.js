// import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextFrom from './components/TextFrom';
import React, { useState } from 'react';

function App() {
  const[mode, setMode] = useState('light');
  const toggleMode =()=>{
    if(mode === 'light'){
      setMode('dark')
    document.body.style.backgroundColor = '#3d2626' 
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'black'
    }
  }
  return (
    <>
<Navbar title="TextUtils" text="Home" mode={mode} toggleMode={toggleMode}/>
<div className="container my-3">
<TextFrom heading = "Enter the text to analyze Below" mode={mode} />
<About/>
</div>
    </>
  );
}

export default App;
