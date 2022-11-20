import Navbar from "./components/Navbar";
import Navigation from './components/Navigation';
import SearchBar from './components/SearchBar';
import {
  regions, articles
} from "../src/api/mock-data/data";
import Slider from "./components/Slider";
import Albom from "./components/Albom";
function App() {

  return (
    <div className="App">
      <Navbar />
      <Navigation />
      <SearchBar />
      <Slider title={'Регионы'} desc={'Каждая регион богат красивой природой и историей'} data={regions} />
      <Slider title={'Блоги'} desc={'Лучшие блоги наших пользователей на S-TRIP'} data={articles} />
      <Albom />
    </div>
  );
}

export default App;
