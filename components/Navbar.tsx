import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <header className='w-full'>
      <nav className='nav'>
        <Link href="/" className='flex items-center gap-1'>
          <Image 
            src={"/assets/icons/uifry.svg"}
            width={27}
            height={27}
            alt='logo'
          />

          <p className='font-bold text-[30px]'>uifry</p>™
        </Link>

        <div className="flex ml-20 space-x-8 font-semibold">
         <Link href="/" legacyBehavior>
              <a className="text-red-400 font-bold">Home</a>
            </Link>
            <Link href="/about" legacyBehavior>
              <a className="text-gray-900">About Us</a>
            </Link>
            <Link href="/pricing" legacyBehavior>
              <a className="text-gray-900">Pricing</a>
            </Link>
            <Link href="/features" legacyBehavior>
              <a className="text-gray-900">Features</a>
            </Link>
        </div>

        <div className='flex justify-end'>
          <button className='bg-black text-white py-2 px-4 rounded ml-[500px]'
          >
            Download
          </button>
        </div>

      </nav>

    </header>
  )
}

export default Navbar