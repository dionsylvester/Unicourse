import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const InstructorButton = () => {
  const navigate = useNavigate()
  
  const handleNavigate = () => {
    navigate('/createcourse')
  }

  return (
    <div className="h-auto pt-8 absolute left-auto right-0 pr-8 top-16 z-10">
      <button className="bg-white bg-opacity-30 backdrop-filter backdrop-blur-lg border border-white text-white font-bold py-2 px-4 rounded flex items-center hover:bg-opacity-50 transition duration-300"
      onClick={handleNavigate}>
        <FaPlus className="mr-2" />
        Create Course
      </button>
    </div>
  )
}

export default InstructorButton
