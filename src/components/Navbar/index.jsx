import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgKeyhole } from "react-icons/cg";
import { RiBookletLine } from "react-icons/ri";
import { TbNews } from "react-icons/tb";
import { IoLanguageSharp } from "react-icons/io5";
import { BsFillDoorOpenFill } from "react-icons/bs";
import logo from "../../assets/images/logos/logo.medium.png";
import Dropdown from "../Dropdown";
import ModalPopap from "../Modal-Popap";
import Singin from "../SingIn";

const languages = [
  {
    code: "ru",
    name: "Русский",
    icon: "RU",
  },
  {
    code: "eng",
    name: "English",
    icon: "US",
  },
];

const Navbar = () => {
  const { isLogged, user } = useSelector((state) => state.auth);

  const [menu, setMenu] = useState(true);
  const [dropdown, setDropdown] = useState(false);
  const [modalActive, setModalActive] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar__container">
        <nav className="p-5 bg-white shadow md:flex md:items-center md:justify-between">
          <div className="flex justify-between items-center text-black">
            <h1 className="w-full text-4xl font-bold text-[#00df9a]">
              S-TRIP.
            </h1>

            <span
              onClick={() => setMenu(!menu)}
              className="text-3xl cursor-pointer mx-2 md:hidden block"
            >
              <GiHamburgerMenu />
            </span>
          </div>

          <ul
            className={
              menu
                ? " md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500"
                : "z-10 md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500 top-[80px] opacity-100"
            }
          >
            <Link to={'/profile'}>
            <li className="mx-4 my-6 md:my-0">
              <a
                href="#"
                className="text-xl hover:text-cyan-500 duration-500 flex  items-center gap-x-1.5"
              >
                <CgKeyhole size={20} />
                Лайфхаки
              </a>
            </li>
            </Link>
            <li className="mx-4 my-6 md:my-0">
              <a
                href="#"
                className="text-xl hover:text-cyan-500 duration-500 flex  items-center gap-x-1.5"
              >
                <RiBookletLine size={20} />
                Статьи
              </a>
            </li>
            <li className="mx-4 my-6 md:my-0">
              <a
                href="#"
                className="text-xl hover:text-cyan-500 duration-500 flex  items-center gap-x-1.5"
              >
                <TbNews size={23} />
                Новости
              </a>
            </li>

            <button
              onMouseEnter={() => setDropdown(true)}
              onMouseLeave={() => setDropdown(false)}
              className="text-lg bg-transparent border-2 border-stone-900 text-black  duration-500 px-6 py-2 mx-4 hover:bg-[#607d8b] text-black-700 hover:text-white py-2 px-4 hover:border-transparent rounded flex  items-center gap-x-1.5"
            >
              <IoLanguageSharp size={20} />
              Языки
              {dropdown && (
                <Dropdown
                  languages={languages}
                  dropdown={dropdown}
                  setDropdown={setDropdown}
                />
              )}
            </button>

            <button
              onClick={() => setModalActive(!modalActive)}
              className="text-lg bg-[#607d8b] text-white  duration-500 px-6 py-2 mx-4 flex  items-center gap-x-1.5"
            >
              <BsFillDoorOpenFill size={20} />
              Войти
            </button>
            {
              <ModalPopap
                logo={logo}
                active={modalActive}
                setActive={setModalActive}
              >
                {/* <Singin active={modalActive} setActive={setModalActive}/> */}
                Авторизация через гугл
              </ModalPopap>
            }
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
