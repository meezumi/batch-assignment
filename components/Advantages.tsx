import React from 'react'
import Image from 'next/image'

const Advantages = () => {
  return (
    <>
    <div className="flex flex-row p-5 mt-[-180px]">
          
          <div className="w-1/2 text-left justify-center items-center my-auto pl-20">
            <h2 className="text-red-500 text-lg font-semibold mb-0">
              ADVANTAGES
            </h2>
            <h1 className="text-3xl font-extrabold mb-5">
              Why Choose Unifry?
            </h1>

            <div>
              <div className="flex items-start space-x-0">
                <div>
                  <div className='flex flex-row justify-start items-center'>

                    <Image 
                      src="/assets/icons/bell-icon.svg" 
                      alt="star"
                      width={40} 
                      height={40}
                      className='mr-4'
                    />

                    <p className="text-xl font-bold">
                      Clever Notifications
                    </p>
                  </div>

                  <p className="text-gray-500 font-semibold text-sm mt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, reprehenderit? Eum omnis modi architecto dicta autem iste culpa obcaecati officia vitae ipsa. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur tempore odio quo non cum eaque quisquam saepe autem ab, dolores quod qui quas quis enim, perspiciatis accusamus inventore delectus eum.
                  </p>
                </div>
              </div>

            </div>

          </div>

          <div className="w-1/2 flex justify-center mb-5">
            <Image 
              src="/assets/images/advantage-1.svg" 
              alt="advantage-1" 
              width={1600} 
              height={800}
            />
          </div>

        </div>

    {/* advantage section - 2  */}

    <div className="flex flex-row p-5 mt-[-150px]">

          <div className="w-1/2 flex justify-center mb-5">
            <Image 
              src="/assets/images/advantages-2.svg" 
              alt="advantage-2" 
              width={1600} 
              height={800}
            />
          </div>
          
          <div className="w-1/2 text-left justify-center items-center my-auto pl-20">

            <div>
              <div className="flex items-start space-x-0">
                <div>
                  <div className='flex flex-row justify-start items-center'>

                    <Image 
                      src="/assets/icons/star-2.svg" 
                      alt="star"
                      width={40} 
                      height={40}
                      className='mr-4'
                    />

                    <p className="text-xl font-bold">
                      Fully Customizable
                    </p>
                  </div>

                  <p className="text-gray-500 font-semibold text-sm mt-3 pr-20">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, reprehenderit? Eum omnis modi architecto dicta autem iste culpa obcaecati officia vitae ipsa. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur tempore odio quo non cum eaque quisquam saepe autemeum.
                  </p>
                </div>
              </div>

            </div>

          </div>

          

        </div>
    </>
  )
}

export default Advantages