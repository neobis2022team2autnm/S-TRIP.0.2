import React from "react";
import i18next from "i18next";
import ReactCountryFlag from "react-country-flag";


function UserConfig({ options, userInfo, setUserInfo }) {

  console.log('userInfo' + userInfo)


  const handleClose = (code) => {
    if (userInfo) {
      setUserInfo(!userInfo);
    }
  };
  return (
    <button className="absolute top-10 left-[20px] z-50 bg-white">
      <ul
        className={
          userInfo
            ? "services-submenu clicked text-left border rounded"
            : "services-submenu"
        }
      >
        {options.map((el) => {
          return (
            <li key={el.code}>
              <button
                className="px-4 flex items-center gap-x-1.5 text-xl py-1 hover:bg-gray-100 border-b text-black"
                onClick={() => {
                  handleClose(el.code);
                }}
              >
                {el.name}
              </button>
            </li>
          );
        })}
      </ul>
    </button>
  );
}

export default UserConfig;
