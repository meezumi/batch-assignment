import React from 'react'
import Image from 'next/image'

const Feature = () => {
  return (
       <div className="flex flex-row p-5">
          <div className="w-1/2 flex justify-center mb-5">
            <Image 
              src="/assets/images/feature.png" 
              alt="feature" 
              width={1600} 
              height={800}
            />
          </div>

          <div className="w-1/2 text-left justify-center items-center my-auto pr-20">
            <h2 className="text-red-500 text-lg font-semibold mb-2">
              FEATURES
            </h2>
            <h1 className="text-3xl font-extrabold mb-6">
              Uifry Premium
            </h1>

            <div className="space-y-8">
              <div className="flex items-start space-x-1">
                <div>
                  <div className='flex flex-row justify-start'>

                    <Image 
                      src="/assets/icons/star.svg" 
                      alt="star"
                      width={18} 
                      height={18}
                      className='mr-1'
                    />

                    <p className="text-lg font-semibold">
                      Budgeting Intervals
                    </p>
                  </div>

                  <p className="text-gray-500 font-semibold text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, reprehenderit? Eum omnis modi architecto dicta autem iste culpa obcaecati officia vitae ipsa.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-1">
                <div>
                  <div className='flex flex-row justify-start'>

                    <Image 
                      src="/assets/icons/hexagon.svg" 
                      alt="hexagon"
                      width={18} 
                      height={18}
                      className='mr-1'
                    />

                    <p className="text-lg font-semibold">
                      Budgeting Intervals
                    </p>
                  </div>

                  <p className="text-gray-500 font-semibold text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, reprehenderit? Eum omnis modi architecto dicta autem iste culpa obcaecati officia vitae ipsa.
                  </p>
                </div>
              </div>


              <div className="flex items-start space-x-1">
                <div>
                  <div className='flex flex-row justify-start'>

                    <Image 
                      src="/assets/icons/cube.svg" 
                      alt="cube"
                      width={18} 
                      height={18}
                      className='mr-1'
                    />

                    <p className="text-lg font-semibold">
                      Budgeting Intervals
                    </p>
                  </div>

                  <p className="text-gray-500 font-semibold text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, reprehenderit? Eum omnis modi architecto dicta autem iste culpa obcaecati officia vitae ipsa.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
  )
}

export default Feature