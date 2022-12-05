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
import { useTranslation } from 'react-i18next';
import RegionSlider from '../../components/RegionSlider';



const Home = () => {

  const { t } = useTranslation()

  return (
    <>
      <Navigation />
      <SearchBar />
      <RegionSlider title={t("Regions")} desc={t("Each region is rich in beautiful nature and history.")} data={regions} id='slider-1' />
      <Slider title={t("Blogs")} desc={t("The best blogs of our users on S-TRIP")} data={articles} id='slider-2' />
      <Albom />
      <Slider title={t("Cafes and restaurants")} desc={t("Places with the most delicious food")} data={foodPlace} id='slider-3' />
      < Lifehack />
      <News />
      <Slider title={t("Hotels and hostels")} desc={t("Places to rest or sleep")} data={reluxPlace} id='slider-4' />
    </>
  );
};

export default Home;