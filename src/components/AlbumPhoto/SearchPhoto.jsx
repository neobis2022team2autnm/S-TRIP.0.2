import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import PostPhoto from './PostPhoto';


const SearchPhoto = () => {
    const [open, setOpen] = useState(false)
    const [select, setSelect]= useState(null)








    return (<>
        <div className='h-[7vh] mt-12 mb-14 flex justify-between '>
            <input type="search" className="form-control relative w-[40vw] block  px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon3" />
            <div className='mr-4'>
                <Fab size="large" color="secondary" aria-label="add" onClick={()=> setOpen(!open)}>
                    <AddIcon />
                </Fab>

                <PostPhoto
                 open={open}
                 setOpen={setOpen}
                 setSelect={setSelect}
                 />
            </div>

        </div>
    </>);
}

export default SearchPhoto;
