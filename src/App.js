import { useState } from 'react'
import Navbar from "./components/Navbar";
import Navigation from './components/Navigation';
import SearchBar from './components/SearchBar';
import Signin from "./components/SingIn";

function App() {

  return (
    <div className="App">
      <Navbar />
      <Navigation />
      <SearchBar/>
      Hello Wolrd
    </div>
  );
}

export default App;
