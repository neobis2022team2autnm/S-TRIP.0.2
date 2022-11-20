//import React hooks
import React from "react";
import ReactCountryFlag from "react-country-flag";
import "./style.scss";

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
function Dropdown({ dropdown, setDropdown }) {

  const handleClose = (code) => {
    if (dropdown) {
      setDropdown(!dropdown);
    }
  };
  return (
    <button className="absolute top-20 right-96">
      <ul
        className={
          dropdown
            ? "services-submenu clicked text-left border rounded"
            : "services-submenu"
        }
      >
        {languages.map((el) => {
          return (
            <li key={el.code}>
              <button
                className="px-4 flex  items-center gap-x-1.5 py-1 hover:bg-gray-100 border-b text-black"
                onClick={() => {
                  handleClose(el.code);
                }}
              >
                <ReactCountryFlag
                  countryCode={el.icon}
                  svg
                  cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
                  cdnSuffix="svg"
                  title="US"
                />
                {el.name}
              </button>
            </li>
          );
        })}
      </ul>
    </button>
  );
}

export default Dropdown;
