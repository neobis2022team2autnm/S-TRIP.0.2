import React, { useState } from 'react'


const NOMINTIM_BASE_URL = 'https://nominatim.openstreetmap.org/search?'


const SearchBox = (prop) => {
    const {setSelectPlace} = prop;

    const [searchPlace, setSearchPlace] = useState('')
    const [list, setList]= useState([]);
    console.log(searchPlace);
   
    const RequestSearch = ()=> {
    
            const params = {
                q: searchPlace,
                format: 'json',
                addressdetails: 1,
                polygon_geojson: 0,
            };
            const queryString = new URLSearchParams(params).toString();
            const requestOption = {
                method: "GET",
                redirect: "follow"
            };
            fetch(`${NOMINTIM_BASE_URL}${queryString}`, requestOption)
            .then(response => response.text()).then(result => setList(JSON.parse(result)))
        
    }

  

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          RequestSearch()
        }
      };
    return (

 <div className="flex justify-center">
    <div className="flex flex-col w-[30vw] ">
        <div className=" xl:w-96">
            <div class="input-group relative flex  items-stretch w-full ">
                <input  onKeyDown={handleKeyDown} value={searchPlace} onChange={(e) =>  setSearchPlace(e.target.value)} type="search" className="form-control relative min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon3" />
                <button className="btn inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded
                 hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                    type="submit" id="button-addon3" onClick={RequestSearch}>Search</button>
                    </div>
                </div>

                <ul className="bg-white overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide rounded-lg border border-gray-200  text-gray-900 w-96 max-h-[25vh]">
                    {list.map((place) => (
                        <li key={place?.osm_id} onClick={()=> setSelectPlace(place)} className=" relative  px-6 py-2 border-b border-gray-200 w-full rounded-t-lg hover:bg-blue-600 ">
                            {place?.display_name}
                        </li>
                    ))}
                </ul>
            </div>
        </div>);
}

export default SearchBox;