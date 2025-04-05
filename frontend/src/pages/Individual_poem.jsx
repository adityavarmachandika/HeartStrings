import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Individual_poem = () => {
  const { state } = useLocation();
  const { title, text } = state;
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-orange-50 py-12 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        {/* Back button */}
        <button 
          onClick={() => navigate(-1)}
          className="mb-8 flex items-center text-orange-500 hover:text-orange-600 transition-colors duration-200 font-medium cursor-pointer"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 mr-2" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to poems
        </button>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-orange-100">
          <div className="relative">
            <div className="h-2 bg-gradient-to-r from-orange-400 to-orange-200"></div>
            <div className="absolute top-0 right-0 w-40 h-40 bg-orange-100 rounded-full opacity-30 -mt-20 -mr-20"></div>
          </div>
          
          {/* Content */}
          <div className="p-8 sm:p-10 relative">
            <h1 className="text-4xl font-bold text-orange-600 mb-6 pb-3 relative">
              {title}
              <span className="absolute bottom-0 left-0 w-24 h-1 bg-gradient-to-r from-orange-400 to-transparent"></span>
            </h1>
            
            <div className="prose prose-orange max-w-none">
              {text.split('\n').map((paragraph, index) => (
                <p key={index} className="text-gray-700 text-lg leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
            
            <div className="mt-10 pt-6 border-t border-orange-100 flex justify-between items-center">
              
              
              <div className="flex space-x-3">
                
                <button className="p-2 rounded-full bg-orange-50 text-orange-500 hover:bg-orange-100 transition-colors duration-200">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Individual_poem;