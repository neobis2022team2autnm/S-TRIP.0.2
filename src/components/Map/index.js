import React, { useState } from 'react';
import MapCanvas from './mapCanvas';
import SearchBox from './searchBox';



const position = [42.87, 74.59];

const Map = () => {

    const [selectPlace, setSelectPlace]= useState(null)

    return ( <>

    <div>
        
            <MapCanvas selectPlace={selectPlace} position={position}/>
        
        <div>
            <SearchBox selectPlace={selectPlace} setSelectPlace={setSelectPlace} />

        </div>
    </div>
    
    </> );
}
 
export default Map;