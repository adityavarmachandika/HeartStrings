import React from 'react';
import { useNavigate } from 'react-router-dom';

const Herobar = ({title, text,id }) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate('/poem', { state: { title, text ,id} });
  };
  
  return (
    <div className="h-full bg-gradient-to-br from-white to-orange-50 p-6 rounded-2xl border-l-4 border-orange-400 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-24 h-24 bg-orange-100 rounded-full opacity-50 -mr-8 -mt-8"></div>
      <div className="absolute bottom-0 left-0 w-16 h-16 bg-orange-100 rounded-full opacity-30 -ml-6 -mb-6"></div>
      
      <div className="relative z-10">
        <h3 className="text-3xl font-bold text-orange-600 mb-4 pb-2 relative">
          {title}
          <span className="absolute bottom-0 left-0 w-16 h-1 bg-gradient-to-r from-orange-400 to-orange-200"></span>
        </h3>
        
        
        <div className="flex justify-end">
          <button 
            onClick={handleClick}
            className="px-5 py-2.5 bg-white text-orange-600 rounded-lg hover:bg-orange-500 hover:text-white transition-all duration-300 font-medium shadow-md flex items-center space-x-2 group cursor-pointer"
          >
            <span>Read Poem</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Herobar;