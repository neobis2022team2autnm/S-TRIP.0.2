import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import SearchInput from '../SearchBar/searchInput';
import SearchPhoto from './SearchPhoto';






export default function PhotoList({itemData}) {
  return (

    <>
    <SearchPhoto/>
    <ImageList className='w-[100%] ' gap={18 } cols={2}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            alt={item.title}
           
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                TextIcon
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
    </>
  );
}

