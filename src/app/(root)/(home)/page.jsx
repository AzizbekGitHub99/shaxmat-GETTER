"use client";

import Image from "next/image";
import Link from "next/link";

import NewsCard from "@/components/news-card";
import ServiceCard from "@/components/service-card";
import EmailInput from "@/components/email-input";

import "./home.scss";
import { Fragment } from "react";
import Carousel from "@/components/carousel";

export default function Home() {
  return (
    <Fragment>
      <section className="hero">
        <div className="container">
          <div className="hero__card">
            <div className="hero__card__left">
              <h1>2022-yilgi jahon chempionatidan lavhalar</h1>
              <p>2022-yilgi jahon chempionatidan lavhalar</p>
              <p>12 Sentabr</p>
            </div>
            <div className="hero__card__right">
              <div className="img-box">
                <Image src="/assets/images/hero-card.jpg" fill alt="chess" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="news-and-announces">
        <div className="container news-and-announces__container">
          <div className="news">
            <h1 className="title">Yangiliklar</h1>
            <div className="news__wrapper">
              <NewsCard big={true} />
              <NewsCard />
              <NewsCard />
            </div>
          </div>
          <div className="announces">
            <h1 className="title">{`E'lonlar`}</h1>
            <div className="announces__wrapper">
              <div className="announce">
                <h1>20 июл Халқаро шахмат куни рейтинг мусобақаси</h1>
                <p>11 Avgust 2022</p>
              </div>
              <div className="announce">
                <h1>{`20 июл Халқаро шахмат куни рейтинг мусобақаси`}</h1>
                <p>11 Avgust 2022</p>
              </div>
              <div className="announce">
                <h1>{`8,10,12,14,16,18 yoshgacha bo‘lgan o‘smirlar o‘rtasida Osiyo chempionati`}</h1>
                <p>11 Avgust 2022</p>
              </div>
              <div className="announce">
                <h1>{`8,10,12,14,16,18 yoshgacha bo‘lgan o‘smirlar o‘rtasida Osiyo chempionati`}</h1>
                <p>11 Avgust 2022</p>
              </div>
              <Link className="announces__wrapper__btn" href="/news">
                {`barcha e'lonlar`}
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="services">
        <div className="container">
          <h1 className="title">Interaktiv xizmatlar</h1>
          <div className="services__wrapper">
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
          </div>
        </div>
      </section>
      <section className="tournaments-and-clubs">
        <div className="container tournaments-and-clubs__container">
          <div className="tournaments">
            <Carousel />
          </div>
          <div className="clubs">
            <div className="clubs__wrapper">
              <Link href="#">Klublar</Link>
              <div className="popular-clubs">
                <div className="popular-club">
                  <div className="popular-club__head">
                    <Image src="/assets/images/club.png" fill alt="popular" />
                  </div>
                  <div className="popular-club__body">
                    <h2>Mahorat Club</h2>
                    <p>{`678 a'zolari`}</p>
                  </div>
                </div>
                <div className="popular-club">
                  <div className="popular-club__head">
                    <Image src="/assets/images/club.png" fill alt="popular" />
                  </div>
                  <div className="popular-club__body">
                    <h2>Virtual Chess</h2>
                    <p>{`678 a'zolari`}</p>
                  </div>
                </div>
              </div>
              <div className="other-clubs">
                <div className="other-clubs__box">
                  <div className="other-club">
                    <Image src="/assets/images/club.png" fill alt="popular" />
                  </div>
                  <div className="other-club">
                    <Image src="/assets/images/club.png" fill alt="popular" />
                  </div>
                  <div className="other-club">
                    <Image src="/assets/images/club.png" fill alt="popular" />
                  </div>
                  <div className="other-club">
                    <Image src="/assets/images/club.png" fill alt="popular" />
                  </div>
                  <div className="other-club">
                    <Image src="/assets/images/club.png" fill alt="popular" />
                  </div>
                  <div className="other-club">
                    <Image src="/assets/images/club.png" fill alt="popular" />
                  </div>
                  <div className="other-club">
                    <Image src="/assets/images/club.png" fill alt="popular" />
                    <div className="overlay">+67</div>
                  </div>
                </div>
                <button>View all</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about">
        <div className="container">
          <h1 className="title">Federatsiya haqida</h1>
          <div className="about-container">
            <div className="about-container__left">
              <h1>{"O'zbekiston shaxmat federatdiyasi"}</h1>
              <p>
                {`O'zbekiston shaxmat federatsiyasi 1992 yil 11 mayda tashkil
                etilgan. Federatsiyaning yuqori organi Federatsiya
                Konferensiyasi bo'lib, kamida to'rt yilda bir marta chaqiriladi.
                Konferensiyalar orasidagi davrda federatsiyaning boshqaruv
                organi 4 yilga saylanadigan Ijroiya qo'mitadir.`}
              </p>
              <Link href="#">Batafsil...</Link>
            </div>
            <div className="about-container__right">
              <Image src="/assets/images/about.jpg" fill alt="about" />
            </div>
          </div>
        </div>
      </section>
      <section className="galeries">
        <div className="container galeries__container">
          <div className="photo">
            <h2>
              Foto galareya <Link href="/albums">view all</Link>
            </h2>
            <div className="photo__wrapper">
              <div className="img-box">
                <Image src="/assets/images/card.png" fill alt="photo" />
              </div>
              <div className="img-box">
                <Image src="/assets/images/card.png" fill alt="photo" />
              </div>
              <div className="img-box">
                <Image src="/assets/images/card.png" fill alt="photo" />
              </div>
            </div>
          </div>
          <div className="video">
            <h2>
              Video galareya <Link href="#">view all</Link>
            </h2>
            <div className="video-box">
              <video src="/assets/videos/HTML.mp4" controls></video>
            </div>
          </div>
        </div>
      </section>
      <section className="contact">
        <div className="container contact__container">
          <div className="left">
            <h2>{`Yangiliklarimizga obuna bo’ling`}</h2>
            <p>{`Shahmat bo’yicha eng so’nggi habarlarni birinchilardan bo’lib sizga yetkazamiz.`}</p>
            <EmailInput />
          </div>
          <div className="right">
            <h2>{`Ijtimoiy tarmoqlarimizga obuna bo’ling`}</h2>
            <p>{`Federatsiyaning eng so’nggi yangiliklaridan birinchilardan bo’lib habardor bo’ling.`}</p>
            <div className="socials">
              <Link
                className="img-box"
                href="https://www.youtube.com/"
                target="_blank"
              >
                <Image src="/assets/icons/instagram.png" fill alt="social" />
              </Link>
              <Link
                className="img-box"
                href="https://www.youtube.com/"
                target="_blank"
              >
                <Image src="/assets/icons/facebook.png" fill alt="social" />
              </Link>
              <Link
                className="img-box"
                href="https://www.youtube.com/"
                target="_blank"
              >
                <Image src="/assets/icons/twitter.png" fill alt="social" />
              </Link>
              <Link
                className="img-box"
                href="https://www.youtube.com/"
                target="_blank"
              >
                <Image src="/assets/icons/telegram.png" fill alt="social" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
