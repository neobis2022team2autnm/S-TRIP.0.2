import Avatar from '@mui/material/Avatar';
import { Fab } from '@mui/material'
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import TextField from '@mui/material/TextField';
import { blue } from '@mui/material/colors';
import Button from '@mui/material/Button';
import { MdOutlineAddPhotoAlternate as Add } from 'react-icons/md'
import TokenService from '../../redux/service/userService/tokenService';
import { useState } from 'react';
import instance from '../../redux/service/userService/interceptor';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import { Navigate } from 'react-router-dom';
import { useEffect } from 'react';


const PostPhoto = (props) => {
  const { setOpen, open, setSelect } = props;
  const [title, setTitle] = useState('')
  console.log(title);
  const [picture, setPicture] = useState({});
  const [ image, setImage]= useState(null)
  const [albumId, setAlbumId] = useState(null)


  const uploadPicture = (e) => {
    setPicture({
      /* contains the preview, if you want to show the picture to the user
           you can access it with this.state.currentPicture
       */
      picturePreview: URL.createObjectURL(e.target.files[0]),
      /* this contains the file we want to send */
      pictureAsFile: e.target.files[0],
    });
    setImage(
      URL.createObjectURL(e.target.files[0])
    )
    

  };

  useEffect(()=>{
    instance.get(`albums/`)
      .then((res) => {
        console.table(res.data);
        
      });
  },[])

  const postAlbum = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('description', title);
    console.log(formData);
    instance.post('albums/', formData)
      .then((res) => {
        console.log(res.data.id);
        setAlbumId(res.data.id)
      });
      setTitle('')
  };

  const setImageAction = (event) => {
    event.preventDefault();
    const formData = new FormData();
     formData.append("image", image);
    formData.append('title', title);
    formData.append('album', albumId)
    console.log(albumId);


    instance.post(`photos/`, formData)
      .then((res) => {
        console.log(res.data);
        
      });
      setAlbumId(null)
  };



  return (<>


    <Dialog onClose={() => setOpen(!open)} open={open} maxWidth="lg">
      <DialogTitle  >Set backup account</DialogTitle>
      <div className="w-[60vw] h-[80vh] mt-5 flex flex-col justify-center">
      
        {!albumId ?
         <form className='flex flex-col items-center ' method="post" action="post" enctype="multipart/form-data" onSubmit={postAlbum}>
          <TextField label="Название Альбома" value={title} className='w-[50%] ' variant="outlined" onChange={(e) => setTitle(e.target.value)} />
          <Button type="submit" name="upload" variant="contained" sx={{marginTop:'50px'}}>Upload</Button>
        </form>
        // send album request
         :
         // send photo requet
         <form className='flex flex-col items-center ' method="post" action="post" enctype="multipart/form-data" onSubmit={setImageAction}>
         {!image?
           <>
         <label for="file-upload" className='w-[40px] mb-[20%]'>
            <Add className='text-5xl cursor-pointer hover:text-cyan-700' />
          </label>
          <input id="file-upload" className='hidden' type="file" name="image" onChange={uploadPicture}/>
         
          </>
          :
          <div className='w-[15vw] h-[15vh] mb-[18vh]'> <img src={image} alt='photoAlbum'/> </div> 
          } 
        
          <TextField label="Название фото"  value={title} className='w-[50%] mt-6 mb-[20px] ' sx={{marginBottom: "20px"}} variant="outlined" onChange={(e) => setTitle(e.target.value)} />
          <Button type="submit" name="upload" variant="contained" >Upload</Button>
        </form>}

      </div>
    </Dialog>


  </>);
}

export default PostPhoto;