"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./carousel.scss";

const Carousel = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="${className}">
        <svg
          viewBox="0 0 20 20"
          fill="none"
          stroke-width="4px"
          width="20px"
          height="20px"
        >
          <circle cx="10" cy="10" r="6"></circle>
        </svg>
      </span>`;
    },
  };

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        effect={"fade"}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={pagination}
        modules={[EffectFade, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image src="/assets/images/slider-img.jpg" alt="Slide" fill />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/assets/images/hero-card.jpg" alt="Slide" fill />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/assets/images/about.jpg" alt="Slide" fill />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/assets/images/card.png" alt="Slide" fill />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
export default Carousel;
