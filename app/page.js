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
    <div className="w-full max-w-4xl mx-auto px-4 xl:max-w-400">
      <Swiper
        pagination={{ type: "progressbar" }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper mx-auto h-120 w-full max-w-90 rounded-[20px] overflow-hidden md:h-200 md:max-w-160 xl:h-135 xl:max-w-400 " // 1. MUST set a height here
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className=" flex items-center justify-center ">
              {" "}
              <Image
                src={img}
                alt={`slide-${index}`}
                fill
                priority={index === 0} // Better for LCP than loading="eager"
                sizes="(max-width: 768px) 100vw, 80vw"
                className="object-cover "
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Page;
