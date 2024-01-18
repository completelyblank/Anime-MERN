import React, {useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import { useSnackbar } from 'notistack';

const CreateAnime = () => 
{
  const [title, setTitle] = useState('');
  const [writer, setWriter] = useState('');
  const [airYear, setAirYear] = useState('');
  const [picLink, setPicLink] = useState('');
  const [genre, setGenre] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {enqueueSnackbar} = useSnackbar();

  const handleSavedAnime = () =>
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
    .post("http://localhost:5555/anime", data)
    .then(() =>
    {
      setLoading(false);
      enqueueSnackbar("~Anime Creation Successful~", {variant: "success"});
      navigate('/');
    })
    .catch((error) =>
    {
      enqueueSnackbar("~Anime Creation Unuccessful~", {variant: "error"});
    });
  } 

  return (
    <>
  <div className="p-4 bg-gray-900">
    <BackButton />
  </div>
  <div className="h-screen flex flex-col items-center justify-center" style={{
    backgroundImage: 'url("https://e1.pxfuel.com/desktop-wallpaper/389/821/desktop-wallpaper-yellow-anime-sky-yellow-anime.jpg")',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  }}>
    <div className="text-yellow-400 text-6xl border-yellow-400 p-8 rounded-lg border-8 bg-gray-900 shadow-lg" style={{fontFamily: 'Audiowide'}}>
      Creation
    </div>
    {loading ? <Spinner /> : ''}
    <div className='flex flex-col border-8 border-yellow-400 rounded-x4 w-[600px] p-5 mx-auto bg-gray-900 shadow-lg opacity-70'>
      <div className='my-4'>
        <label className='text-4x1 mr-4 text-white' style={{fontFamily: 'Audiowide'}}>Title: </label>
        <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} className='border-8 border-yellow-600 py-2 w-full bg-gray-900 text-yellow-400 focus:outline-none focus:border-yellow-400' />
      </div>
      <div className='my-4'>
        <label className='text-6x4 mr-4 text-white' style={{fontFamily: 'Audiowide'}}>Writer: </label>
        <input type='text' value={writer} onChange={(e) => setWriter(e.target.value)} className='border-8 border-yellow-600 py-2 w-full bg-gray-900 text-yellow-400 focus:outline-none focus:border-yellow-400' />
      </div>
      <div className='my-4'>
        <label className='text-6x4 mr-4 text-white' style={{fontFamily: 'Audiowide'}}>Air Year: </label>
        <input type='text' value={airYear} onChange={(e) => setAirYear(e.target.value)} className='border-8 border-yellow-600 py-2 w-full bg-gray-900 text-yellow-400 focus:outline-none focus:border-yellow-400' />
      </div>
      <div className='my-4'>
        <label className='text-6x4 mr-4 text-white' style={{fontFamily: 'Audiowide'}}>Genre: </label>
        <input type='text' value={genre} onChange={(e) => setGenre(e.target.value)} className='border-8 border-yellow-600 py-2 w-full bg-gray-900 text-yellow-400 focus:outline-none focus:border-yellow-400' />
      </div>
      <div className='my-4'>
        <label className='text-6x4 mr-4 text-white' style={{fontFamily: 'Audiowide'}}>Picture Link: </label>
        <input type='text' value={picLink} onChange={(e) => setPicLink(e.target.value)} className='border-8 border-yellow-600 py-2 w-full bg-gray-900 text-yellow-400 focus:outline-none focus:border-yellow-400' />
      </div>
      <button className='p-2 bg-yellow-700 m-8 rounded-md text-3xl hover:bg-yellow-600 hover:text-white focus:outline-none focus:bg-yellow-600 focus:text-white' onClick={handleSavedAnime} style={{fontFamily: 'Audiowide'}}>Save</button>
    </div>
  </div>
</>

  )
}

export default CreateAnime