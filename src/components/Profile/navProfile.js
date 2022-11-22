import React from "react";
import Avtar from "./avatarProfile";

const NavProfile = () => {
  return (
    <div className="bg-white shadow-xl mr-auto ml-auto pt-3  max-w-[1220px]">
      <Avtar />

      <ul className="flex w-[35vw] ml-5 pb-3 justify-between">
        <li> Понравилось</li>
        <li> Понравилось</li>
        <li> Понравилось</li>
        <li> Понравилось</li>
       
      </ul>
    </div>
  );
};

export default NavProfile;
