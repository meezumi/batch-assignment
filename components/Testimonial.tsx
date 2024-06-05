import React from 'react'
import Image from 'next/image'

const Testimonial = () => {
  return (
    <div className='flex flex-col items-center p-8 mt-[-80px]'>
      <h2 className='text-black-500 text-center tracking-wider font-semibold'>
        TESTIMONIAL
      </h2>

      <h1 className="text-4xl font-extrabold mb-6 text-center tracking-tight">
        What Our Users <br /> Say About Us?
      </h1>


      <div className="flex flex-row p-5 mt-[-50px]">
          <div className="w-1/2 flex justify-center mb-5">
            <Image 
              src="/assets/images/testimony.svg" 
              alt="feature" 
              width={1600} 
              height={800}
            />
          </div>

          <div className="w-1/2 text-left justify-center items-center my-auto pr-20">

            <h1 className="text-3xl font-extrabold mb-6 mt-[-100px] pr-20">
              The Best Financial Accounting App Ever!
            </h1>

            <div className="space-y-8">
              <div className="flex items-start space-x-1">
                <div>

                  <p className="text-gray-500 font-semibold text-sm pr-20">
                    “Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.”
                  </p>

                  <div className='mt-6'>
                   <Image 
                      src="/assets/icons/people-icon.svg" 
                      alt="feature" 
                      width={170} 
                      height={70}
                    />
                  </div>

                  <div className='mt-4 font-bold'>
                    <h3>Nick Jonas</h3>
                  </div>

                </div>

                

              </div>

                    
            </div>

          </div>
        </div>



    </div>
  )
}

export default Testimonial