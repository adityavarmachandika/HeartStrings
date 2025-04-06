import React, { useEffect, useState } from 'react';
import "../App.css";

const Addpoem = () => {
    const [poem_title,settitle]=useState("");
    const [poem_text,settext]=useState("");

    
        const senddata = async () => {
            const poemdata={
                "poem_title":poem_title,
                "poem_text":poem_text
            }
            console.log(poemdata)
            const response=await fetch('https://backend.vikram-blaxsquad.workers.dev/api/admin/add',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(poemdata)   
            })
            try{
                if(response.ok){
                    console.log("data has been sent")
                }
                else{
                    console.log("database error")
                    console.log(response)
                }
            }
            catch(error){
                console.log("inside error",error)
            }
        }

    
    return (
        <div className="min-h-screen bg-gradient-to-b from-orange-100 to-orange-300 overflow-hidden relative">
            {/* Decorative elements */}
            <div className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-rose-400 opacity-50"></div>
            <div className="absolute top-1/4 -right-20 w-60 h-60 rounded-full bg-rose-400 opacity-50"></div>
            <div className="absolute bottom-10 left-10 w-32 h-32 rounded-full bg-rose-400 opacity-50"></div>
            
            <div className="container mx-auto py-12 px-4 relative z-10">
                <div className="flex flex-col md:flex-row justify-around items-center min-h-screen">
                    <div className="text-center md:text-left transform hover:scale-105 transition-transform duration-300">
                        <h1 className="text-6xl md:text-8xl font-bold text-orange-700 mb-8 md:mb-0 allura-regular">
                            Strings
                            <div className="mt-2 w-16 h-0.5 bg-orange-400 mx-auto md:mx-0"></div>
                        </h1>
                    </div>
                    
                    <div className="w-full max-w-md bg-white bg-opacity-80 backdrop-blur-sm rounded-xl shadow-xl p-8 border border-orange-200 transform transition-all duration-300 hover:shadow-2xl my-12 md:my-0">
                        <div className="flex justify-center">
                            <div className="w-20 h-1 bg-orange-300 mb-6"></div>
                        </div>
                        
                        <pre className="text-3xl font-semibold text-orange-700 text-center mb-8 allura-regular">
                            Etch your Emotions        
                        </pre>
                        
                        <form onSubmit={(e) => { e.preventDefault(); senddata(); }} className="flex flex-col">
                            <label className="text-xl font-mono font-bold mb-2 text-orange-600">Title</label>
                            <input
                                type="text" 
                                onChange={(e)=>settitle(e.target.value)}
                                className="border-2 border-orange-200 rounded-lg p-3 mb-6 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 bg-white bg-opacity-70"
                                placeholder="Give your feelings a name..."
                            />
                            
                            <label className="text-xl font-mono font-bold mb-2 text-orange-600">Content</label>
                            <textarea 
                                onChange={(e)=>settext(e.target.value)}
                                className="border-2 border-orange-200 rounded-lg p-3 h-48 mb-8 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 bg-white bg-opacity-70"
                                placeholder="Pour your heart onto these pages..."
                            />
                            
                            <div className="flex justify-center">
                                <button 
                                    type="submit" 
                                    className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-10 rounded-full shadow-md hover:shadow-lg transition transform hover:-translate-y-1 hover:scale-105"
                                >
                                    Immortalize
                                </button>
                            </div>
                        </form>
                    </div>
                    
                    <div className="text-center md:text-right transform hover:scale-105 transition-transform duration-300">
                        <h1 className="text-6xl md:text-8xl font-bold text-orange-700 mt-8 md:mt-0 allura-regular">
                            Hearts
                            <div className="mt-2 w-16 h-0.5 bg-orange-400 max-h-dvh md:ml-auto"></div>
                        </h1>
                    </div>
                </div>
            </div>
            
            
        </div>
    );
};

export default Addpoem;