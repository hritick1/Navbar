import React from "react";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import About from "./components/About";
import Service from "./components/Service";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
const App = () => {
  return (

    <Router>
      <Navbar/>
      <Routes>
      <Route exact path="/" element={ <Home />}/>
       

      <Route path="/about" element={ <About />}/>

      <Route path="/service" element={ <Service />}/>
       
      

      <Route path="/contact" element={  <Contact />}/>
      
     
      </Routes>
    </Router>
  );
};

export default App;