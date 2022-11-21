import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { regions } from "../../api/mock-data/data";
import Cards from "../../components/Cards";

const RegionPage = ({updateData}) => {
 
  const {regionId} = useParams();
  const [data,setData] = useState();

 
  useEffect(() => {
    regions.forEach((item) => {
      if (item.id === +regionId) updateData(item);
    });
    return () => {
    updateData(null)
    }
  },[regionId])

  console.log(data);

  return (
    
    <div className="region__container  w-[100%]  " >
      <Cards data={regions}/>
    </div>
  );
};

export default RegionPage;