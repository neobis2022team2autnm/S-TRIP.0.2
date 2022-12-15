import React from 'react';
import PhotoList from '../../components/AlbumPhoto/PhotoList';
import { itemData } from '../../components/AlbumPhoto/mock-list';

const AlbumPage = () => {
  return (
    <div className='Album__container'>
      <PhotoList itemData={itemData}/>
    </div>
  );
};

export default AlbumPage;