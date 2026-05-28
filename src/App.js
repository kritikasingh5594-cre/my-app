
import './App.css';
import Alert from './components/Alert';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { use, useState } from 'react';
{/*import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
*/}
function App() {
  const[mode, setMode] = useState('light');//whether dark mode is or not
  const[alert,setAlert] = useState(null);
  const showAlert = (message,type)=>{
  setAlert({
    msg:message,
    type:type
  })
  setTimeout(() => {
    setAlert(null);
  }, 1500);

}
   const togglemode = ()=>{
    if(mode === 'light')
{
  setMode('dark');
  document.body.style.backgroundColor = '#042743';
  showAlert("Dark Mode has been enabled","success");
  document.title='textutiles, Dark mode'
}
else{
  setMode('light');
  document.body.style.backgroundColor = 'white';
  showAlert("Light Mode has been enabled","success");
  document.title='textutiles, Light mode'
}
  }
  return (
    <>
  {/*<Router> */}
<Navbar title="Textutiles"   abouttext="About Textutiles" mode={mode} togglemode={togglemode} />
<Alert alert={alert}/>
<div className="container my-3">
  {/*<Routes>
    <Route exact path="/about" element={<About />} />
    <Route
   exact path="/"
  element={
    */}
    <TextForm showAlert={showAlert}heading="Enter your text to analyze below"mode={mode}/>
{/*  }
/>
  </Routes>*/}
</div>
{/*</Router> */}

    </>
  );
}

export default App;

