import React from 'react';
import logo from '../../assets/images/logos/logo.medium.png'
import spinner from '../../assets/gifs/spinner.gif'
import './style.scss'

const Spinner = () => {
  return (
    <div className="spinner-page">
      <div className="spinner-page__content">
        <img className="spinner-page__img" src={logo} alt="Logo" />
        <h1 className='spinner-page__title'>SilkRoad Trip</h1>
        <img className='spinner-page__gif' src={spinner} alt="Spinner" />
      </div>
    </div>
  );
};

export default Spinner;