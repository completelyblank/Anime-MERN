import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Spinner from '../components/Spinner'
import { Link } from 'react-router-dom'
import { AiOutlineEdit } from 'react-icons/ai'
import { BsInfoCircle } from 'react-icons/bs'
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import AnimeCard from '../components/AnimeCard';

const AnimeTable = ({animes}) => {
    return (
        <div>
          <table className='w-full border-separate border-spacing-2'>
            <thead>
              <tr>
                <th className='border border-purple-400 rounded-md text-purple-200'>
                  <div className="bg-black w-full h-full p-4 rounded-md bg-opacity-70" style={{ fontFamily: 'Audiowide' }}>Number: </div>
                </th>
                <th className='border border-purple-400 rounded-md text-purple-200'>
                  <div className="bg-black w-full h-full p-4 rounded-md bg-opacity-70" style={{ fontFamily: 'Audiowide' }}>Title: </div>
                </th>
                <th className='border border-purple-400 rounded-md text-purple-200'>
                  <div className="bg-black w-full h-full p-4 rounded-md bg-opacity-70" style={{ fontFamily: 'Audiowide' }}>Writer: </div>
                </th>
                <th className='border border-purple-400 rounded-md text-purple-200'>
                  <div className="bg-black w-full h-full p-4 rounded-md bg-opacity-70" style={{ fontFamily: 'Audiowide' }}>Aired Year: </div>
                </th>
                <th className='border border-purple-400 rounded-md text-purple-200'>
                  <div className="bg-black w-full h-full p-4 rounded-md bg-opacity-70" style={{ fontFamily: 'Audiowide' }}>Genre: </div>
                </th>
                <th className='border border-purple-400 rounded-md text-purple-200'>
                  <div className="bg-black w-full h-full p-4 rounded-md bg-opacity-70" style={{ fontFamily: 'Audiowide' }}>Actions: </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {anime && anime.map((animeItem, index) => (
                <tr key={animeItem._id} className='h-8'>
                  <td className='border border-purple-400 rounded-md text-center text-purple-200'>
                    <div className="bg-black w-full h-full p-4 rounded-md bg-opacity-70" style={{ fontFamily: 'Audiowide' }}>{index + 1}</div>
                  </td>
                  <td className='border border-purple-400 rounded-md text-center text-purple-200'>
                    <div className="bg-black w-full h-full p-4 rounded-md bg-opacity-70" style={{ fontFamily: 'Audiowide' }}>{animeItem.title}</div>
                  </td>
                  <td className='border border-purple-400 rounded-md text-center text-purple-200'>
                    <div className="bg-black w-full h-full p-4 rounded-md bg-opacity-70" style={{ fontFamily: 'Audiowide' }}>{animeItem.writer}</div>
                  </td>
                  <td className='border border-purple-400 rounded-md text-center text-purple-200'>
                    <div className="bg-black w-full h-full p-4 rounded-md bg-opacity-70" style={{ fontFamily: 'Audiowide' }}>{animeItem.airYear}</div>
                  </td>
                  <td className='border border-purple-400 rounded-md text-center text-purple-200'>
                    <div className="bg-black w-full h-full p-4 rounded-md bg-opacity-70" style={{ fontFamily: 'Audiowide' }}>{animeItem.genre}</div>
                  </td>
                  <td className='border border-purple-400 rounded-md text-center text-purple-200'>
                    <div className="bg-black w-full h-full p-4 rounded-md bg-opacity-70">
                      <div className='flex justify-center gap-x-4'>
                        <Link to={`/anime/details/${animeItem._id}`}>
                          <BsInfoCircle className='text-2xl text-white' />
                        </Link>
                        <Link to={`/anime/edit/${animeItem._id}`}>
                          <AiOutlineEdit className='text-2xl text-blue-500' />
                        </Link>
                        <Link to={`/anime/delete/${animeItem._id}`}>
                          <MdOutlineDelete className='text-2xl text-red-500' />
                        </Link>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
              }      
  

export default AnimeTable