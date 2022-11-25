import React from 'react';
import star from '../../assets/icons/icon-star.png'
import CardPlace from '../../components/CardPlace';

const ToursPage = () => {
  return (
    <div className="tourspage">
      <div className="tourspage__container">
        <div className="flex">
          <h2 className="text-[35px]">Отели</h2>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <form className="flex items-center">
              <label for="voice-search" className="sr-only">Search</label>
              <div className="relative w-full">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                </div>
                <input type="text" id="voice-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-[20px] focus:ring-green-500 focus:border-green-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="Найти место" required="" />
              </div>
              <button type="submit" className="inline-flex items-center py-2.5 px-3 ml-2 text-[20px] font-medium text-white bg-[#00df9a] border border-[#00df9a] hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                Поиск
              </button>
            </form>

          </div>
          <button class="flex items-center py-2.5 px-3 ml-2 text-[20px] font-medium text-white bg-[#00df9a] border border-[#00df9a] hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" data-ripple-light="true">
            Сортировать по рейтингу
            <img style={{ width: '30px' }} src={star} alt="star" />
          </button>
        </div>
        <div>
          <CardPlace />
        </div>
      </div>
    </div>
  );
};

export default ToursPage;