import React from "react";
import { useTranslation } from "react-i18next";
import './style.scss'

const Albom = () => {

  const { t } = useTranslation()

  return (
    <div className="album">
      <div className="album__container">
        <div className="max-w-[100%] mx-auto p-10">
          <div className="max-h-[500px] relative">
            <div className="p-25px absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-end">
              <h1 className="px-4 text-1xl sm:text-1xl md:text-2xl lg:text-1xl font-bold">
                {t('Inspirational photo albums in S-TRIP')}
              </h1>
              <button className="album__button my-10px rounded-full w-48 bg-light hover:bg-black-700 text-white font-bold py-2 px-6 border border-black-700 rounded py-2 px-4">
                {t('To learn more')}
              </button>
            </div>
            <img
              className="w-full max-h-[350px] object-cover"
              src="https://triptokyrgyzstan.com/sites/default/files/images/2019-04/slide-1960x857-07.jpg"
              alt="/"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Albom;
