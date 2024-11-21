import React from 'react'
import { GridLoader } from 'react-spinners'

export default function LoadingClip() {
  return (
    <div className='min-h-screen bg-neutral-gray flex justify-center items-center'>
        <GridLoader color='#1E293B' size={50}/>
    </div>
  )
}
