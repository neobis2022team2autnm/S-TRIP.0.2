import axios from 'axios'

const API = axios.create({

  baseURL: "http://34.159.147.205",
  headers: {
    ContentType: "application/json",
  },
});

//For get LifeHacks
const getLifeHacks = () => {
  return API.get("/lifehack");
};


//For get articles
const getArticles = () => {
  return API.get("/article");
};


//For get news
const getNews = () => {
  return API.get("/article");
};


const infoService = {
  getLifeHacks, getArticles, getNews
};

export default infoService;
