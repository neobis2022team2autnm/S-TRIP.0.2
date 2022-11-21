import Navbar from "./components/Navbar";
import { Routes, Route } from 'react-router-dom';
import Footer from "./components/Footer";
import Home from "./pages/Home";
import '../src/styles/styles.scss'
import RegionPage from "./pages/RegionPage";
import { useState } from "react";


function App() {

  const [bg, setBg]=useState(null);

  const updateData = (value) => {
    setBg( value )
  }


  return (
    <div  style={!bg?{backgroundColor:"white"} :{backgroundImage:`url(${bg?.bg})`,}}>
      
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/:regionId" element={<RegionPage updateData={updateData}/>}/>
      </Routes>
      <Footer />
    
    </div>
  );
}

export default App;
