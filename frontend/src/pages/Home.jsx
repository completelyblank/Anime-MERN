import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import AnimeTable from '../components/AnimeTable';
import AnimeCard from '../components/AnimeCard';

const Home = () => {
  const [anime, setAnime] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showCards, setShowCards] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5555/anime')
      .then((response) => {
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
      height: '100vh',
      color: '#fff',
      fontFamily: 'Audiowide, cursive',
    }}>
      <div className='p-4'>
        <div className='flex justify-center items-center gap-x-4'>
          <button
            className='bg-purple-900 hover:bg-purple-700 px-4 py-2 rounded-lg text-2xl'
            onClick={() => setShowCards(!showCards)}
          >
            {showCards ? 'Show Cards' : 'Hide Cards'}
          </button>
        </div>
      </div>
      <div className='flex justify-between items-center'>
        <div className='flex items-center justify-center h-10px'>
          <h1 className='text-6xl my-6 border-purple-400 border-b-4 rounded-lg p-0'>
            Home
          </h1>
        </div>
        <Link to='/anime/create'>
          <MdOutlineAddBox className='text-yellow-500 text-5xl' />
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <div>
          {showCards ? (
           <div className='border-purple-100 border-2 rounded-lg p-4'>
             <p className="text-3xl mb-4">
               Absolutely thrilled to share my first MERN (CRUD) website with you all! 🚀🌐
             </p>
             <p className="text-3xl mb-4">
               I've dived headfirst into the world of Full Stack development, crafting a simple yet powerful website. 🖥️✨
             </p>
             <h2 className="text-3xl mb-2">🌍 Tech Stack:</h2>
             <ul className="list-disc ml-8">
               <li>MongoDB: Harnessing the power of a NoSQL database for seamless data management.</li>
               <li>Express: Streamlining server-side development.</li>
               <li>React: Powering the frontend for a responsive and dynamic user interface.</li>
               <li>Node.js: Ensuring efficient and scalable server-side operations.</li>
             </ul>
             <h2 className="text-3xl mt-4 mb-2">🛠️ Features:</h2>
             <ul className="list-disc ml-8">
               <li>Create: Add your favorite anime titles, writers, airing years, genres, and captivating images.</li>
               <li>Read: Explore the list with a glassy aesthetic, giving a modern touch to the user experience.</li>
               <li>Update: Modify details whenever you like, keeping your anime collection up-to-date.</li>
               <li>Delete: Remove entries seamlessly, giving you control over your curated list.</li>
             </ul>
             <h2 className="text-3xl mt-4 mb-2">🎨 Design Philosophy:</h2>
             <p className="text-3xl mb-4">
               I've strived to infuse a sleek and modern vibe into the design, ensuring a delightful user experience. The Read/Details page takes it up a notch with a TV-inspired layout, offering an immersive view of your favorite anime.
             </p>
             <h2 className="text-3xl mt-4 mb-2">🚀 Next Steps:</h2>
             <p className="text-3xl mb-4">
               This is just the beginning! I'm eager to delve deeper into the realm of Full Stack development, explore new challenges, and refine my skills further. Stay tuned for more updates and exciting projects on the horizon.
             </p>
             <h2 className="text-3xl mt-4 mb-2">🙏 Gratitude:</h2>
             <p className="text-3xl">
               A big thank you to everyone who has supported me on this journey. Your encouragement is the driving force behind my passion for coding. Let's build something amazing together! 💻🚀
             </p>
           </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {anime &&
              anime.map((animeItem, index) => (
                <div
                  key={animeItem._id}
                  className="bg-black p-4 rounded-md border-4 border-purple-400 bg-opacity-50"
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
      )}
    </div>
  );
};

export default Home;
