import React from 'react'

const RighCardContent = (props) => {
  return (
    <div className='absolute top-0 left-0 h-full w-full  p-8 flex flex-col justify-between'>
            <h2 className='bg-white text-xl font-seminold rounded-full h-12 w-12 flex justify-center items-center'>{props.id+1}</h2>
            <div className=''>
                <p className='text-lg leading-relaxed text-white mb-14'>Lorem ipsum dolor sit amet consectetur adipisicing elit. lorman and you canbh easily happy and grow likeymeam with it is good.</p>
                <div className='flex justify-between'>
                    <button className='bg-blue-500 text-white font-medium px-8 py-2 rounded-full '>{props.tag}</button>
                    <button className='bg-blue-500 text-white font-medium px-4 py-3 rounded-full'><i className="ri-arrow-right-line"></i></button>
                </div>
            </div>
        </div>
  )
}

export default RighCardContent
