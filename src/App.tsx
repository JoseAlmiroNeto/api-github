import { useState } from 'react'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className="flex flex-col w-full items-center">
      <strong className='text-white p-5 text-4xl'>GitHub Finder</strong>
      <Outlet />
    </div>
  )
}

export default App
