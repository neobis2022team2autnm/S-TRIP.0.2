import React from 'react';

const News = () => {
  return (
    <div className='news'>
      <div className='news-container'>
        <div className='w-full py-16 text-black px-4'>
          <div className='max-w-[1140px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2 my-4'>
              <h1 className='mt-8 md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
                Новости
              </h1>
              <p>Лучшие из лучших мероприятий, достопримечательностей и мероприятий, которые вы не захотите пропустить.</p>
              <button className='bg-[#00df9a] text-black rounded-md font-medium w-[200px]  my-6 px-6 py-3'>
                Перейти
              </button>
            </div>
            <div className='my-4'>
              <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                <img src="https://perspectiva.company/wp-content/uploads/2020/03/beach-vacation.jpg" alt="Photo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;