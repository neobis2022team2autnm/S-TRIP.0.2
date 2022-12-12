import { useTranslation } from "react-i18next";
import SearchInput from "./searchInput";
import bg from '../../assets/images/bg-search.png';

const SearchBar = () => {

  const { t } = useTranslation()

  return (
    <div className="searchbar">
      <div className="searchbar__container">
        <div className="mt-10">
          <div className=" my-45 h-[40vh] w-[100%] mx-auto sm:w-[92%] md:w-[100%] lg:px-7 relative">
            <img
              className="object-cover md:object-fill h-[100%]  w-[100%]"
              src={bg}
            />
            <SearchInput />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
