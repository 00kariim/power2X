import React, { useEffect, useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import i1 from '../assets/1.jpg'; 
import i2 from '../assets/2.jpg';
import i3 from '../assets/3.jpg';
import i4 from '../assets/4.jpg';
import i5 from '../assets/5.jpg';
import i6 from '../assets/6.jpg';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";

const items = [
  { id: 1, name: 'Jane Doe', role: 'Cheif Technical Officer (company)', image: i1 },
  { id: 2, name: 'John Smith', role: 'Head of research (company)', image: i2 },
  { id: 3, name: 'Alice Lee', role: 'Panelist (company)', image: i3 },
  { id: 4, name: 'Bob Johnson', role: 'Guest Speaker (company)', image: i5 },
  { id: 5, name: 'Clara Evans', role: 'Chief Corporate Advisor (company)', image: i4},
  { id: 6, name: 'Tom Riddle', role: 'Tech Lead (company)', image: i6 },
];

  export default function Speakers() {
    return (
      <>  
      <div className="py-10 px-4 ">
        <h1 className="ml-16 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight mb-4">
          <span className="text-[3rem] bg-gradient-to-r from-black via-black/75 to-black/50  bg-clip-text text-transparent">
            Meet the Experts Shaping
          </span>
          <br />
          <span className="text-[3rem] bg-gradient-to-r from-black via-black/75 to-black/50 bg-clip-text text-transparent">
            The Future of Power-to-X
          </span>
        </h1>
        <h2 className="ml-16 text-base sm:text-lg md:text-xl font-medium text-black/80 max-w-3xl mt-4">
          Panels and sessions featuring leading technical experts, renowned researchers, and official representatives from around the world.
        </h2>
      </div>


      <div className="w-full py-10 bg-muted relative group">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={5}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          autoplay={{ delay: 2000, disableOnInteraction: false, pauseOnMouseEnter: true, }}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
        >
          {items.map((item) => (
            <SwiperSlide key={item.id}>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Card className="bg-transparent shadow-none border-none flex flex-col text-right cursor-pointer transition-transform hover:scale-105">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-80 object-cover border-4 border-white rounded-xl"
                  />
                  <CardHeader className="mt-4 pl-4">
                    <CardTitle className="text-xl text-[#002647] font-semibold">{item.name}</CardTitle>
                    <CardDescription className="text-sm text-neutral-400">
                      {item.role}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </a>
            </SwiperSlide>
          ))}

          {/* Custom Navigation Arrows */}
          <div className="custom-swiper-button-prev absolute left-2 top-1/2 transform -translate-y-1/2 z-10 
            opacity-0 group-hover:opacity-100 transition-opacity duration-300 
            text-black text-4xl   w-12 h-12
            btn btn-circle !important">
            ❮
          </div>

          <div className="custom-swiper-button-next absolute right-2 top-1/2 transform -translate-y-1/2 z-10 
            opacity-0 group-hover:opacity-100 transition-opacity duration-300 
            text-black text-4xl   w-12 h-12
            btn btn-circle !important">
            ❯
          </div>
        </Swiper>
      </div>
      </>
    );
  }
