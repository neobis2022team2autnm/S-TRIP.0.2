import React from "react";




const ToggleList = ({title,index,setMenuToggle, menuToggles}) => {
    let temp = [...menuToggles];
    return ( <>
           <li key={index} onClick={()=> setMenuToggle(index)} className={temp[index]? "mb-[-4px] cursor-pointer font-bold border-b-4 border-[#00df9a] ": " h-[4%] cursor-pointer"}> {title}</li> 
    </> );
}
 
export default ToggleList;