import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';

const ShowAnime = () => {
  const [anime, setAnime] = useState([]);
  const [loading, setLoading] = useState(false);
  const {id} =useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/anime/${id}`)
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
    <>
    <div className="p-4 bg-gray-900">
    <BackButton />
  </div>
    <div className='p-20' style={{ 
      backgroundImage: 'url("https://images.unsplash.com/photo-1524230572899-a752b3835840?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      height: '100vh',
    }}>
      <div className="flex flex-col justify-center items-center">
      <div className="text-gray-200 text-6xl border-gray-700 p-8 rounded-lg border-8 bg-gray-900 shadow-lg opacity-70" style={{fontFamily: 'Audiowide'}}>
      Details
    </div>
    </div>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className='border-8 border-gray-700 rounded-lg w-full p-5'>
            <div className='my-4'>
              <div className="bg-black w-full h-full bg-opacity-70 p-5 rounded-md">
                <span className='text-x3 mr-4 text-gray-200' style={{fontFamily: 'Audiowide'}}>ID: </span>
                <span className='text-x3 mr-4 text-gray-200'>{anime._id}</span>
              </div>
            </div>
            <div className='my-4'>
              <div className="bg-black w-full h-full bg-opacity-70 p-5 rounded-md">
                <span className='text-x3 mr-4 text-gray-200' style={{fontFamily: 'Audiowide'}}>Title: </span>
                <span className='text-x3 mr-4 text-gray-200'>{anime.title}</span>
              </div>
            </div>
            <div className='my-4'>
              <div className="bg-black w-full h-full bg-opacity-70 p-5 rounded-md">
                <span className='text-x3 mr-4 text-gray-200' style={{fontFamily: 'Audiowide'}}>Writer: </span>
                <span className='text-x3 mr-4 text-gray-200'>{anime.writer}</span>
              </div>
            </div>
            <div className='my-4'>
              <div className="bg-black w-full h-full bg-opacity-70 p-5 rounded-md">
                <span className='text-x3 mr-4 text-gray-200' style={{fontFamily: 'Audiowide'}}>Air Year: </span>
                <span className='text-x mr-4 text-gray-200'>{anime.airYear}</span>
              </div>
            </div>
          </div>
          
          <div className='flex items-center justify-center h-96'>
            <div className='flex items-center justify-center w-120 h-96 bg-gray-900 mt-1'>
              <div className='relative w-120 h-96 border-8 border-gray-700 bg-black rounded-lg overflow-hidden'>
                <img src={anime.picLink} alt='TV Screen' className='w-full h-full object-cover' />
              </div>
            </div>
          </div>
          
          <div className='flex items-center justify-center h-16'>
            <div className='bg-gray-950 border-8 border-gray-700 relative w-fit rounded-lg overflow-hidden'>
              <div className='w-96 h-16 bg-gray-950 mt-2'></div>
            </div>
          </div>
        </>
      )}
    </div>
    </>
  );
      }
      

export default ShowAnime