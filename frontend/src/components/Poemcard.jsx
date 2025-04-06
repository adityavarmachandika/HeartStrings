import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const Poemcard = ({title,text,id}) => {
    const navigate = useNavigate();
    
    const handleClick = () => {
      navigate('/poem', { state: { title, text,id } });
    };
  return (
    <div
          className="bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border-2 border-orange-100 hover:border-orange-300"
        >
          <h3 className="text-2xl font-semibold text-orange-600 mb-3">{title}</h3>
          <p className="text-gray-700 line-clamp-3">{text}</p>
          <div className="mt-4 flex justify-end">
            <button onClick={handleClick} className="px-4 py-2 bg-orange-50 text-orange-600 rounded-lg hover:bg-orange-100 transition-colors duration-200 font-medium shadow-sm cursor-pointer">
              Read More
            </button>
          </div>
        </div>
  )
}

export default Poemcard