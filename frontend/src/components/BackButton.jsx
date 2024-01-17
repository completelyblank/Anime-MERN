import React from 'react'
import { Link } from 'react-router-dom'
import { BsArrowLeft } from 'react-icons/bs'

const BackButton = ({destination= '/'}) => 
{
    return (
        <div className='flex'>
            <Link 
            to ={destination}
            className='bg-black text-white px-7 py-3 w-fit border-4 border-blue-400 rounded-lg hover:border-blue-200'>
                <BsArrowLeft className='text-4x4' />
            </Link>
        </div>
    )
}

export default BackButton