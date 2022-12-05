import React from "react";
import Avtar from "./avatarProfile";
import ToggleList from "./toggleList";
import { useState } from "react";
const NavProfile = () => {
  const dataList = ['Понравилось', 'Фото', 'Заметки']
  const [menuToggles, setMenuToggles] = useState([
    false,
    false,
    false,
  ]);

  const setMenuToggle = (index) => {
    let temp = [...menuToggles];
    for (let i = 0; i < menuToggles.length; i++) {
      if (index === i) temp[index] = !temp[index];
      else temp[i] = false;
    }
    setMenuToggles(temp);
  };

  return (
    <div className="bg-white shadow-xl mr-auto ml-auto pt-3  max-w-[1220px]">
      <Avtar />

      <ul className="flex w-[40%] ml-[13.5%] pb-1 justify-around">

        {
          dataList.map((el, idx) => {
            return (
              <ToggleList title={el} index={idx} setMenuToggle={setMenuToggle} menuToggles={menuToggles} />
            )
          })
        }
      </ul>

      <div className="h-[60vh] mt-1 w-[100%] bg-green-900">

      </div>
    </div>
  );
};

export default NavProfile;
