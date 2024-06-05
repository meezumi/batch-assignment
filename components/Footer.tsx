import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="py-10">
      <div className="max-w-7x mx-auto px-4">
        
          <div className="py-5 text-left w-full flex flex-wrap justify-between space-y-2 pr-20 pl-20">
            
            {/* first column */}

            <div className="w-auto flex items-center justify-center mb-2">
              <div className="ml-4 space-y-3 justify-center items-center">

                <div className='flex items-center'>
                  <Image 
                    src="/assets/icons/uifry.svg" alt="fire" 
                    height={30}
                    width={30}
                    className='mr-1'
                  />
                  <p className="text-2xl font-extrabold">
                    uifry
                  </p>™
                </div>

              <div className='flex items-center'>
                <Image 
                  src="/assets/icons/mail.svg" 
                  alt="mail" 
                  className="mr-1"
                  width={30}
                  height={30} 
                />
                <p className='text-[15px] font-semibold'>
                  Help@Frybix.Com
                </p>
              </div>

              <div className='flex items-center'>
                <Image 
                  src="/assets/icons/phone.svg" 
                  alt="call"
                  className="mr-1" 
                  width={30}
                  height={30}
                />
                <p className='font-semibold text-[15px]'>
                  +1234 456 678 89
                </p>
              </div>
            </div>
          </div>
          
          {/* 2nd column */}

          <div className="w-auto">
              <h5 className="font-semibold mb-2 text-2xl pb-2">
                Links
              </h5>
              <ul className='text-sm space-y-2'>
                <li><a href="#" className="hover:text-red-500">Home</a></li>
                <li><a href="#" className="hover:text-red-500">About Us</a></li>
                <li><a href="#" className="hover:text-red-500">Bookings</a></li>
                <li><a href="#" className="hover:text-red-500">Blog</a></li>
              </ul>
          </div>

          {/* 3rd column  */}

            <div className="w-auto">
              <h5 className="font-semibold mb-2 text-2xl pb-2">
                Legal
              </h5>
              <ul className='text-sm space-y-2'>
                <li><a href="#" className="hover:text-red-500 pb-2">Terms of Use</a></li>
                <li><a href="#" className="hover:text-red-500">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-red-500">Cookie Policy</a></li>
              </ul>
          </div>

          {/* 4th column */}

          <div className="w-auto">
              <h5 className="font-semibold mb-2 text-2xl pb-2">
                Product
              </h5>
              <ul className='text-sm space-y-2'>
                <li><a href="#" className="hover:text-red-500">Take Tour</a></li>
                <li><a href="#" className="hover:text-red-500">Live Chat</a></li>
                <li><a href="#" className="hover:text-red-500">Reviews</a></li>
              </ul>
          </div>

          {/* 5th column */}

          <div className="w-auto pt-0 justify-center items-center">
            <h5 className="font-semibold mb-2 text-2xl pb-2">
              Newsletter
            </h5>

            <h6 className="text-sm mb-3">Stay Up To Date</h6>
            <form className="flex flex-row">
              <input 
                type="email" 
                className="w-auto py-2 px-4 border border-gray-300 rounded mr-2" 
                placeholder="Your email" 
              />
              
              <button 
                 type="submit" 
                 className="w-auto bg-black text-white py-2 px-4 rounded">
                Subscribe
              </button>
              </form>
            </div>
          </div>

        <hr className="my-5 border-gray-400 w-full mx-auto max-w-7xl margin-b-2" />

        <div className="mt-6 text-center">
          <p>Copyright © 2024 Uifry.Com All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer