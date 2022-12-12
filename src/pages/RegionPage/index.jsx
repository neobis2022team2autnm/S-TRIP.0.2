import React from "react";
import { useParams } from "react-router-dom";
import { regions } from "../../api/mock-data/data";
import CardPlace from "../../components/CardPlace";
import { useEffect } from 'react';
import { getBatken, getChui, getIssykKul, getJalalAbad, getNaryn, getOsh, getTalas } from '../../redux/reducers/placeSlice';
import { useDispatch, useSelector } from 'react-redux';

const RegionPage = ({ updateData }) => {

  const { region } = useParams();

  console.log(typeof region)
  const dispatch = useDispatch()

  useEffect(() => {
    // eslint-disable-next-line default-case
    switch (region) {
      case 'issykKul':
        dispatch(getIssykKul());
        break;

      case 'talas':
        dispatch(getTalas());
        break;

      case 'naryn':
        dispatch(getNaryn());
        break;


      case 'osh':
        dispatch(getOsh());
        break;


      case 'batken':
        dispatch(getBatken());
        break;

      case 'jalalAbad':
        dispatch(getJalalAbad());
        break;

        case 'chui':
          dispatch(getChui());
          break;
    }
  }, [])


  useEffect(() => {
    regions.forEach((item) => {
      if (item.id === +region) updateData(item);
    });
    return () => {
      updateData(null)
    }
  }, [region])

  const dataRegion = useSelector(state=> state.place[region])
  return (

    <div className="region__container  w-[100%]  " >
      <CardPlace data={dataRegion} />
      

    </div>
  );
};

export default RegionPage;