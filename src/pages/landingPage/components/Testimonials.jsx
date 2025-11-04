import React from 'react'
import Profileimage from '../../../assets/images/thunder.png'
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import "swiper/css";
import "swiper/css/pagination";
const Testimonials = () => {
  const testimonial = [
    {
      name: 'David O. Lagos',
      testimony: 'Rocoin has transformed the way I manage my crypto assets. The user-friendly interface and top-notch security features give me peace of mind while trading.',
      rating: 5,
      profileImage: ""
    },
    {
      name: 'David O. Lagos',
      testimony: 'Rocoin has transformed the way I manage my crypto assets. The user-friendly interface and top-notch security features give me peace of mind while trading.',
      rating: '4',
      profileImage: ""
    },
    {
      name: 'David O. Lagos',
      testimony: 'Rocoin has transformed the way I manage my crypto assets. The user-friendly interface and top-notch security features give me peace of mind while trading.',
      rating: '5',
      profileImage: ""
    },
  ]

  return (
    <section className='border-t-2 border-[#34333380] bg-[#ffffff]'>
      <div className="mx-auto max-w-7xl py-4">
        <h2 className="font-bold mt-8 md:px-16 px-2 md:text-2xl text-lg ">Trusted By Thousands of users</h2>

        {/* mobile slider */}
        <div className="block lg:hidden mt-8 px-2">
          <Swiper
            modules={[Pagination]}
            spaceBetween={20}
            pagination={{ clickable: true }}
            slidesPerView={1.1}
            breakpoints={{
              480: { slidesPerView: 1.2 },
              640: { slidesPerView: 2 }
            }}

          >

            {testimonial.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white/70 backdrop-blur-md rounded-2xl p-6 shadow-md border border-blue-100 transition-transform hover:scale-105 duration-300 mb-10">
                  <p className="text-gray-700 italic mb-4">"{item.testimony}"</p>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-600">{item.name}</h3>
                    <div className="px-3 flex justify-between items-center">
                      {/* Rating Stars */}
                      <div className="flex justify-center mb-3 text-yellow-400 text-lg">
                        {Array(5)
                          .fill()
                          .map((_, i) =>
                            i < item.rating ? (
                              <AiFillStar key={i} />
                            ) : (
                              <AiOutlineStar key={i} />
                            )
                          )}
                      </div>
                      <div className="w-15 h-15 rounded-full bg-blue-300 flex items-center justify-center">
                        <img src={Profileimage} className='w-full' />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>


        <div className='max-w-6xl mx-auto hidden lg:grid grid-cols-3 gap-6 mt-10'>
          {testimonial.map((item, index) => (
            <div className="bg-white/70 backdrop-blur-md rounded-2xl p-6 shadow-md border border-blue-100 transition-transform hover:scale-105 duration-300">
              <p className="text-gray-700 italic mb-4">"{item.testimony}"</p>
              <div>
                <h3 className="text-lg font-semibold text-blue-600">{item.name}</h3>
                <div className="px-3 flex justify-between items-center">
                  {/* Rating Stars */}
                  <div className="flex justify-center mb-3 text-yellow-400 text-lg">
                    {Array(5)
                      .fill()
                      .map((_, i) =>
                        i < item.rating ? (
                          <AiFillStar key={i} />
                        ) : (
                          <AiOutlineStar key={i} />
                        )
                      )}
                  </div>
                  <div className="w-15 h-15 rounded-full bg-blue-300 flex items-center justify-center">
                    <img src={Profileimage} className='w-full' />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials