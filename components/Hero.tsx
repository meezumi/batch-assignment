import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <>
      <div className="flex">
        <div className="justify-start items-center text-left w-1/2 text-white">
          <div className='flex flex-col'>
            <div className='px-6 py-3 mt-8 ml-28'>
              <h1 className="text-black font-extrabold text-[4vw] mb-2 leading-none">
                Make The Best Financial Decisions
              </h1>

              <p className="text-gray-500 text-[17px] text-md mb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi voluptatibus quasi a provident fuga eveniet sequi quidem ea nesciunt asperiores, dolorum rem soluta, at similique explicabo eius nam, enim repellat?
              </p>

              <div className="flex space-x-4 justify-start ">
                <button className="bg-black text-white border border-black rounded-md px-4 py-2">
                  Getting Started → 
                </button>

                <button className="flex items-center text-black">
                  <input type="image" src="/assets/icons/play.svg" className='pr-2'/>
                  Watch Video 
                </button>

              </div>
            </div>
            <div className='block px-20 pt-8'>
              <Image 
                src="/assets/images/hero-2.svg" 
                alt="hero-2" 
                width={800} 
                height={300} 
                className="mt-6 w-full object-cover"/>
            </div>
          </div>
        </div>
        
        <div className="w-1/2 text-white flex flex-col justify-center items-start">
          <Image 
            src="/assets/images/hero-1.svg"
            alt="hero-1" 
            width={1600} 
            height={800} />
        </div> 
      </div>
    </>
  );
};

export default Hero