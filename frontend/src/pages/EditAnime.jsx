import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import {useParams} from 'react-router-dom';
import { useSnackbar } from 'notistack';

const EditAnime = () => 
{
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [writer, setWriter] = useState('');
  const [airYear, setAirYear] = useState('');
  const [picLink, setPicLink] = useState('');
  const [genre, setGenre] = useState('');
  const [loading, setLoading] = useState(false);
  const {enqueueSnackbar} = useSnackbar();
  const navigate = useNavigate();
  useEffect(() =>
  {
    setLoading(true);
    axios
    .get(`http://localhost:5555/anime/${id}`)
    .then((response) =>
    {
      setTitle(response.data.title);
      setWriter(response.data.writer);
      setAirYear(response.data.airYear);
      setGenre(response.data.genre);
      setPicLink(response.data.picLink);
    })   
    .catch((error) =>
    {
      setLoading(false);
      alert("~An Error Has Occurred~");
      console.log(error);
    })}, [])

  const handleEditAnime = () =>
  {
    const data = 
    {
      title,
      writer,
      airYear,
      picLink,
      genre,
    };  
    setLoading(true);
    axios
    .put(`http://localhost:5555/anime/${id}`, data)
    .then((response) =>
    {
      setTitle(response.data.title);
      setWriter(response.data.writer);
      setAirYear(response.data.airYear);
      setPicLink(response.data.picLink);
      setGenre(response.data.genre);
      setLoading(false);
      enqueueSnackbar("~Anime Editing Successful~", {variant: "success"});
      navigate('/');
    })
    .catch((error) =>
    {
      setLoading(false);
      enqueueSnackbar("~Anime Editing Unuccessful~", {variant: "error"});
      alert("~An Error Has Occurred~");
      console.log(error);
    });
  }  

  return (
    <><div className="p-4 bg-black">
      <BackButton />
    </div>
    <div className="h-screen flex flex-col items-center justify-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1564296786842-4fc88fb50485?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJsdWUlMjBhZXN0aGV0aWN8ZW58MHx8MHx8fDA%3D")', backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover', }}>
        {loading ? <Spinner /> : ''}
        <div className="text-blue-400 text-7xl border-blue-400 p-5 rounded-lg border-4 bg-gray-900 opacity-70" style={{fontFamily: 'Audiowide'}}>
      Editing
    </div>
        <div className='flex flex-col border-8 border-blue-400 rounded-x4 w-[600px] p-5 mx-auto bg-black opacity-70'>
          <div className='my-4'>
            <label className='text-4x1 mr-4 text-white' style={{fontFamily: 'Audiowide'}}>Title: </label>
            <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} className='border-8 border-blue-500 py-2 w-full bg-gray-900 text-blue-400' />
          </div>
          <div className='my-4'>
            <label className='text-6x4 mr-4 text-white' style={{fontFamily: 'Audiowide'}}>Writer: </label>
            <input type='text' value={writer} onChange={(e) => setWriter(e.target.value)} className='border-8 border-blue-600 py-2 w-full bg-gray-900 text-blue-400' />
          </div>
          <div className='my-4'>
            <label className='text-6x4 mr-4 text-white' style={{fontFamily: 'Audiowide'}}>Air Year: </label>
            <input type='text' value={airYear} onChange={(e) => setAirYear(e.target.value)} className='border-8 border-blue-600 py-2 w-full bg-gray-900 text-blue-400' />
          </div>
          <div className='my-4'>
            <label className='text-6x4 mr-4 text-white' style={{fontFamily: 'Audiowide'}}>Genre: </label>
            <input type='text' value={genre} onChange={(e) => setGenre(e.target.value)} className='border-8 border-blue-600 py-2 w-full bg-gray-900 text-blue-400' />
          </div>
          <div className='my-4'>
            <label className='text-6x4 mr-4 text-white' style={{fontFamily: 'Audiowide'}}>Picture Link: </label>
            <input type='text' value={picLink} onChange={(e) => setPicLink(e.target.value)} className='border-8 border-blue-600 py-2 w-full bg-gray-900 text-blue-400' />
          </div>
          <button className='p-2 bg-blue-600 m-8 rounded-md text-3xl hover:bg-blue-400 hover:text-white' onClick={handleEditAnime} style={{fontFamily: 'Audiowide'}}>Save</button>
        </div>
      </div>
      </>
  )
}


export default EditAnime