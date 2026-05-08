"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";

const images = ["/images/mv.png", "/images/mv1.png", "/images/mv2.png"];

const Page = () => {
  return (
    <div className="w-full   mx-auto px-4">
      <Swiper
        pagination={{ type: "progressbar" }}
        navigation={true}
        modules={[Pagination, Navigation]}
        // Using 'aspect-video' or fixed heights that scale with the screen
        className="mySwiper mx-auto w-full rounded-[20px] overflow-hidden 
             h-[450px]          /* Default Mobile Height */
             md:h-[800px]       /* Tablet Height */
             lg:h-[550px]       /* Laptop Height */
             
                   /* Desktop/Large Screen Height */
             max-w-[95%]        /* Small margin on mobile */
             lg:max-w-[100%]     /* Slightly tighter on desktop */
             
             2xl:max-w-[1400px] /* Cap the width on ultra-wide monitors */"
        // BREAKPOINTS allow you to change Swiper behavior per screen size
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
        }}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <Image
                src={img}
                alt={`slide-${index}`}
                fill
                priority={index === 0}
                sizes="(max-width: 768px) 100vw, 80vw"
                className="object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Page;
