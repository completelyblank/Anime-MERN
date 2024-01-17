import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Spinner from '../components/Spinner'
import { Link } from 'react-router-dom'
import { AiOutlineEdit } from 'react-icons/ai'
import { BsInfoCircle } from 'react-icons/bs'
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import AnimeTable from '../components/AnimeTable';
import AnimeCard from '../components/AnimeCard';

const Home = () => {

  const [anime, setAnime] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5555/anime')
      .then((response) => 
      {
        console.log("Fetched data:", response.data);
        setAnime(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  return (
<div className='p-20' style={{ 
  backgroundImage: 'url("https://e1.pxfuel.com/desktop-wallpaper/557/687/desktop-wallpaper-abstract-nature-light-purple-aesthetic-pc.jpg")',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  height: '100vh', // Ensure the container covers the full height of the viewport
}}>

  <div className='p-4'>
    <div className='flex justify-center items-center gap-x-4'></div>
  </div>
      <div className='flex-justify-between items-center'>
      <div className='flex items-center justify-center h-10px'>
        
      <h1 className='text-8xl my-6 text-white border-purple-400 border-8 rounded-lg p-0'>
  <div className="bg-black w-full h-full p-4 rounded-md bg-opacity-50" style={{fontFamily: 'Audiowide'}}>
    List
  </div>
</h1>
    </div>
    <Link to='/anime/create'>
  <MdOutlineAddBox className='text-yellow-500 text-5xl' />
</Link>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {anime &&
          anime.map((animeItem, index) => (
            <div
              key={animeItem._id}
              className="bg-black p-4 rounded-md border-4 border-purple-400 bg-opacity-50"
              style={{ fontFamily: 'Audiowide' }}
            >
              <h2 className="text-white mb-2">Number: {index + 1}</h2>
              <h3 className="text-white mb-2">Title: {animeItem.title}</h3>
              <div className="flex justify-center gap-x-4">
                <Link to={`/anime/details/${animeItem._id}`}>
                  <BsInfoCircle className="text-2xl text-white" />
                </Link>
                <Link to={`/anime/edit/${animeItem._id}`}>
                  <AiOutlineEdit className="text-3xl text-blue-500" />
                </Link>
                <Link to={`/anime/delete/${animeItem._id}`}>
                  <MdOutlineDelete className="text-3xl text-red-500" />
                </Link>
              </div>
            </div>
          ))}
      </div>
      )}
</div>      

  )
          }

export default Home