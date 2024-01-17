import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import {useParams} from 'react-router-dom';
import { useSnackbar } from 'notistack';

const DeleteAnime = () => 
{
  const [loading, setLoading] = useState(false);
  const {id} = useParams(); 
  const navigate = useNavigate();
  const {enqueueSnackbar} = useSnackbar();
  const handleDeletedAnime = () =>
  {
    setLoading(true);
    axios
    .delete(`http://localhost:5555/anime/${id}`)
    .then(() =>
    {
      setLoading(false);
      enqueueSnackbar("~Anime Deletion Successful~", {variant: "success"});
      navigate('/');
    })
    .catch((error) =>
    {
      setLoading(false);
      alert("~An Error Has Occurred~");
      enqueueSnackbar("~Anime Deletion Unuccessful~", {variant: "error"});
      console.log(error);
  })
};
  return (
    <>
    <div className="p-4 bg-gray-900">
      <BackButton />
    </div>
    <div className="h-screen flex flex-col items-center justify-center" style={{
      backgroundImage: 'url("https://i.pinimg.com/originals/02/ce/f8/02cef8a1d66818d9a78edfa4066b2f4a.jpg")',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    }}>
      <div className="text-red-400 text-6xl border-red-800 p-8 rounded-md border-4 bg-gray-900 flex flex-col items-center justify-center opacity-70" style={{fontFamily: 'Audiowide'}}>
        Deletion
      </div>
      {loading ? <Spinner /> : ''}
      <div className='flex flex-col border-8 border-red-600 rounded-md w-[600px] p-8 mx-auto bg-gray-900 opacity-70'>
        <div className='text-5xl mb-8 text-red-700 flex flex-col items-center justify-center' style={{fontFamily: 'Audiowide'}}>
          Confirm Deletion:
        </div>
        <div className="flex items-center justify-center mb-8">
          <div className="w-20 h-1 bg-red-600"></div>
        </div>
        <button className='p-4 bg-red-700 m-8 rounded-md text-3xl hover:bg-red-600' onClick={handleDeletedAnime} style={{fontFamily: 'Audiowide'}}>
          Confirm
        </button>
      </div>
    </div>
  </>
  
  )
}


export default DeleteAnime