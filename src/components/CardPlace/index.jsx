import React from 'react';
import './style.scss'

const CardPlace = ({ data }) => {


  console.log(data);
  return (
    <>
      {data?.map((el) => (
        <div className="details my-[30px] border-4 border-[#607d8b] rounded-lg flex justify-around py-[10px]">
          <div className="big-img max-w-[500px] min-w-[290px] overflow-hidden m-[25px]">
            <img className="w-full h-full max-w-[400px] block object-cover" src={el.image} alt="#" />
          </div>

          <div className="box max-w-[500px] min-w-[290px] ">
            <div className="row flex justify-between mb-[15px]">
              <h2 className="font-bold text-2xl">{el.address}</h2>
              <span>Добавить в избранное</span>
            </div>
            <p>
              {el.name}
            </p>
            <p>
              {el.description}
            </p>
            <button className="cart">Подробнее</button>

            <div>
              <span>Comment</span>
            </div>
          </div>

        </div>

      )
      )}

    </>
  );
};

export default CardPlace;