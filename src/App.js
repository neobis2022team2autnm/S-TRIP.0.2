import Navbar from "./components/Navbar";
import Navigation from './components/Navigation';
import SearchBar from './components/SearchBar';
import {
  regions, articles, foodPlace, reluxPlace
} from "../src/api/mock-data/data";
import Slider from "./components/Slider";
import Albom from "./components/Albom";
import Lifehack from "./components/Lifehack";
import Footer from "./components/Footer";
import News from "./components/News";
function App() {

  return (
    <div className="App">
      <Navbar />
      <Navigation />
      <SearchBar />
      <Slider title={'Регионы'} desc={'Каждая регион богат красивой природой и историей'} data={regions} />

      <Slider title={'Блоги'} desc={'Лучшие блоги наших пользователей на S-TRIP'} data={articles} />
      <Albom />
      <Slider title={'Кафе и рестораны'} desc={'Места где готовят самую вкусную еду'} data={foodPlace} />
      <Lifehack />
      <News />
      <Slider title={'Отели и хостелы'} desc={'Места отдохнуть или переночевать'} data={reluxPlace} />
      
      <Footer />
    </div>
  );
}

export default App;
