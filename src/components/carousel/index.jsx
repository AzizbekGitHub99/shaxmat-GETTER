"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./carousel.scss";
import Link from "next/link";

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
        <SwiperSlide style={{backgroundImage: "url(/assets/images/slider-img.jpg)"}}>
          <Link href="#">Turnirlar</Link>
          <h1>2022 Central Asia Chess champion ships</h1>
        </SwiperSlide>
        <SwiperSlide style={{backgroundImage: "url(/assets/images/hero-card.jpg)"}}>
          <Link href="#">Turnirlar</Link>
          <h1>2022 Central Asia Chess champion ships</h1>
        </SwiperSlide>
        <SwiperSlide style={{backgroundImage: "url(/assets/images/slider-img.jpg)"}}>
          <Link href="#">Turnirlar</Link>
          <h1>2022 Central Asia Chess champion ships</h1>
        </SwiperSlide>
        <SwiperSlide style={{backgroundImage: "url(/assets/images/slider-img.jpg)"}}>
          <Link href="#">Turnirlar</Link>
          <h1>2022 Central Asia Chess champion ships</h1>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
export default Carousel;
