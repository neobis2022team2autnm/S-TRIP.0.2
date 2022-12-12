import React from "react";
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import { setLogout } from '../../redux/reducers/authSlice'



function UserConfig({ userInfo, setUserInfo }) {

  const dispatch = useDispatch();

  const handleLogout = () => dispatch(setLogout());

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
        <li >
          <button
            className="px-4 flex items-center gap-x-1.5 text-xl py-1 hover:bg-gray-100 border-b text-black"
            onClick={() => {
              handleClose();
            }}
          >
            <Link to='/profile'>
              Профиль
            </Link>
          </button>
        </li>
        <li >
          <button
            className="px-4 flex items-center gap-x-1.5 text-xl py-1 hover:bg-gray-100 border-b text-black"
            onClick={() => {
              handleClose();
            }}
          >
            <Link to='/scheduler'  >
              Планерка
            </Link>
          </button>
        </li>
        <li >
          <button
            className="px-4 flex items-center gap-x-1.5 text-xl py-1 hover:bg-gray-100 border-b text-black"
            onClick={() => {
              handleLogout()
            }}
          >
            Выйти
          </button>
        </li>
      </ul>
    </button>
  );
}

export default UserConfig;
