import React from 'react'

const Header = () => {
  return (
    <div className=' p-5 gap-3 flex items-center justify-between '>
        <div className=' flex items-center gap-3'>
            <span className=' bg-blue-600 text-white  w-fit px-5 py-3 font-bold  rounded-2xl'>T</span>
        <h1 className=' text-xl font-bold'>TodoApp</h1>
        </div>
        <img src="theme.svg" alt="them-toggle" width={25} />
    </div>
  )
}

export default Header