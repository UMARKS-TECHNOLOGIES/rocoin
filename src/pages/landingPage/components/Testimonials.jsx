import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Profileimage from '../../../assets/images/thunder.png'
import { AiFillStar, AiOutlineStar } from "react-icons/ai";


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
        <h2 className="font-bold mt-8 px-16 text-2xl">Trusted By Thousands of users</h2>
        <div className='max-w-6xl mx-auto'>
          <Carousel className='w-full'>
            <CarouselContent>
              {testimonial.map((item, index) => (
                <CarouselItem
                  key={index}
                  className="p-6 md:basis-1/2 lg:basis-1/3"
                >
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
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="flex justify-center mt-6 gap-4">
              <CarouselPrevious className="bg-blue-100 text-blue-600 hover:bg-blue-200" />
              <CarouselNext className="bg-blue-100 text-blue-600 hover:bg-blue-200" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  )
}

export default Testimonials