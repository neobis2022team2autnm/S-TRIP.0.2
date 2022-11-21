import React from 'react';
import Albom from '../../components/Albom';
import Lifehack from '../../components/Lifehack';
import Navigation from '../../components/Navigation';
import News from '../../components/News';
import SearchBar from '../../components/SearchBar';
import Slider from '../../components/Slider';
import {
  regions, articles, foodPlace, reluxPlace
} from "../../api/mock-data/data";

const Home = () => {
  return (
    <>
      <Navigation />
      <SearchBar/>
      <Slider title={'Регионы'} desc={'Каждая регион богат красивой природой и историей'} data={regions} id='slider-1' />
      <Slider title={'Блоги'} desc={'Лучшие блоги наших пользователей на S-TRIP'} data={articles} id='slider-2'/>
      <Albom />
      <Slider title={'Кафе и рестораны'} desc={'Места где готовят самую вкусную еду'} data={foodPlace} id='slider-3' />
      <Lifehack />
      <News />
      <Slider title={'Отели и хостелы'} desc={'Места отдохнуть или переночевать'} data={reluxPlace} id='slider-4' />
    </>
  );
};

export default Home;