import React from 'react'

const VideoTitle = ({title , overview }) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-24 absolute bg-gradient-to-r from-black'>
        <h1 className='text-6xl font-bold text-white'>{title}</h1>
        <p className='py-6 text-lg w-1/4 text-white'> {overview}</p>
        <div className=''>
            <button className='bg-white text-black  p-4 px-12 text-xl  rounded-lg hover:bg-opacity-80'>  ►  Play</button>
            <button className='mx-2 bg-gray-500 text-white  p-4 px-12 text-xl bg-opacity-50 rounded-lg hover:bg-opacity-80'> More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle