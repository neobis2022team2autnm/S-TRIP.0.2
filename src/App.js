import Navbar from "./components/Navbar";
import { Routes, Route } from 'react-router-dom';
import Footer from "./components/Footer";
import Home from "./pages/Home";
import './utils/i18n';
import '../src/styles/styles.scss'


function App() {

  return (
    <div classname='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
