import { useState } from 'react';
import { Link } from 'react-router-dom';
import { TfiMapAlt } from "react-icons/tfi";
import { AiOutlineHome } from "react-icons/ai";
import { IoRestaurantOutline } from 'react-icons/io5'
import { BsJournalBookmark } from 'react-icons/bs'
import { SlArrowRight } from "react-icons/sl";
import { useTranslation } from 'react-i18next';


const Navigation = () => {

  const { t } = useTranslation()

  const [nav, setNav] = useState(false)

  const sliderRight = () => {

    const slider = document.getElementById("slider");

    if (slider.scrollLeft < 1000) {
      slider.scrollLeft = slider.scrollLeft + 450;
      setNav(!nav)
    } else {
      setNav(!nav) // doesnt work need to treck scroll width 
    }
  };

  return (
    <div className="navigation">
      <div className="navigation__container">
        <div className='w-100%'>
          <div className="px-4 relative cursor-pointer">
            <SlArrowRight onClick={sliderRight} className={!nav ? "text-2xl  text-[#607D8B] absolute mr-auto left-0 right-0 mt-[1.5%] ml-[95%] drop-shadow-2xl md:hidden " : "hidden"} />
            <ul id="slider" className=" h-full w-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide  md:grid md:grid-cols-4  md:ml-auto md:px-4">
              <div className="inline-block group">
                <li className="flex  items-center justify-center px-[30px]  space-x-2 mr-2 bg-transparent group-hover:bg-[#9ca3af]  text-[#607D8B] font-semibold hover:text-white py-2 md:py-4 border border-[#607D8B] hover:border-transparent rounded-lg">
                  <TfiMapAlt className="text-2xl" />
                  <Link to='/toursPage' className="text=xl text-[#607D8B] group-hover:text-white" src="#">
                    {t('Tours')}
                  </Link>
                </li>
              </div>
              <div className="inline-block group">
                <li className="  flex space-x-2 mr-2 px-[30px]  justify-center items-center bg-transparent group-hover:bg-[#9ca3af]  text-[#607D8B] font-semibold hover:text-white py-2 md:py-4  border border-[#607D8B] hover:border-transparent rounded-lg">
                  <AiOutlineHome size={25} />
                  <a className="text=xl text-[#607D8B] group-hover:text-white" src="#">
                    {t('Hotels')}
                  </a>
                </li>
              </div>
              <div className="inline-block group ">
                <li className=" flex space-x-2 mr-2 px-[30px] justify-center items-center bg-transparent group-hover:bg-[#9ca3af]  text-[#607D8B] font-semibold hover:text-white py-2 md:py-4  border border-[#607D8B] hover:border-transparent rounded-lg">
                  <IoRestaurantOutline size={25} />
                  <a className="text=xl text-[#607D8B] group-hover:text-white" src="#">
                    {t('Restaurants')}
                  </a>
                </li>
              </div>
              <div className="inline-block group">
                <li className=" flex space-x-2 items-center px-[30px] bg-transparent group-hover:bg-[#9ca3af]  text-[#607D8B] font-semibold hover:text-white py-2 md:py-4 justify-center border border-[#607D8B] hover:border-transparent rounded-lg">
                  <BsJournalBookmark size={25} />
                  <a className="text=xl text-[#607D8B] group-hover:text-white" src="#">
                    {t('Albums')}
                  </a>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
