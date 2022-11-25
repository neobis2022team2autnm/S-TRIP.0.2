import React from 'react';
import './style.scss'

const CardPlace = () => {
  return (
    <div className="details my-[30px] border-4 border-[#607d8b] rounded-lg flex justify-around py-[10px]">
      <div className="big-img max-w-[500px] min-w-[290px] overflow-hidden m-[25px]">
        <img className="w-full h-full max-w-[400px] block object-cover" src='https://w0.peakpx.com/wallpaper/623/1011/HD-wallpaper-beautiful-waterfall-in-washington-state-waterfall-leaves-usa-natue.jpg' alt="" />
      </div>

      <div className="box max-w-[500px] min-w-[290px] ">
        <div className="row flex justify-between mb-[15px]">
          <h2 className="font-bold text-2xl">Башня Бурана</h2>
          <span>Добавить в избранное</span>
        </div>
        <p>
          Lorem ipsum dolor sit amet.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis cupiditate accusantium ex amet, corrupti neque asperiores beatae corporis explicabo quo rem exercitationem delectus in ipsum sint velit accusamus dolore qui reprehenderit impedit nemo saepe nam? Impedit ipsa quisquam aspernatur ea doloremque quam minima aut consectetur.
        </p>
        <button className="cart">Подробнее</button>
      </div>
    </div>
  );
};

export default CardPlace;