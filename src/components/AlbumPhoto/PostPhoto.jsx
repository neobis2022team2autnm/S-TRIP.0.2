import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import {Fab} from '@mui/material'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import TextField from '@mui/material/TextField';
import { blue } from '@mui/material/colors';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';


const emails = ['username@gmail.com', 'user02@gmail.com'];


const PostPhoto = (props) => {

    const { setOpen, open, setSelect } = props;



    return (<>


        <Dialog onClose={() => setOpen(!open)} open={open} maxWidth="lg">
            <DialogTitle  >Set backup account</DialogTitle>
            <div className="w-[60vw] h-[80vh] mt-5 flex flex-col">
                <Fab size="large" color="primary" aria-label="add" onClick={() => setOpen(!open)}>
                    <AddIcon />
                </Fab>
                <TextField label="Название Альбома" className='w-[50%]' variant="standard" />
                <TextField label="Описание" variant="outlined" className='w-[50%]' multiline />
                <Button variant="contained" className='w-[10%]'>Contained</Button>
            </div>
        </Dialog>


    </>);
}

export default PostPhoto;