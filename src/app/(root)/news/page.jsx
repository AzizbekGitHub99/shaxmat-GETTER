import { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";

import Breadcrumb from "@/components/breadcrumb";
import NavLink from "@/components/navlink";
import NewsCard from "@/components/news-card";

import "./news.scss";

const News = () => {
  return (
    <Fragment>
      <Breadcrumb />
      <section className="news__main">
        <div className="container news__main__container">
          <div className="aside">
            <ul>
              <li>
                <NavLink href="/news">Yangiliklar</NavLink>
              </li>
              <li>
                <NavLink href="/">{`E'lonlar`}</NavLink>
              </li>
              <li>
                <NavLink href="/">Hamkorlikdagi tadbirlar</NavLink>
              </li>
              <li>
                <NavLink href="/">Turnirlar</NavLink>
              </li>
            </ul>
            <Link href="https://president.uz" className="sites" target="_blank">
              <div className="img-box">
                <Image
                  src="/assets/images/gerb.png"
                  fill
                  priority
                  quality={100}
                  alt="gerb"
                />
              </div>
              <p>{`O'zbekiston Respublikasi Prezidenti sayti`}</p>
            </Link>
            <Link href="https://president.uz" className="sites" target="_blank">
              <div className="img-box">
                <Image
                  src="/assets/images/academy.png"
                  fill
                  priority
                  quality={100}
                  alt="academmy"
                />
              </div>
              <p>{`Xalqaro shaxmat akademiyasiga`}</p>
            </Link>
          </div>
          <div className="mside">
            <div className="mside__wrapper">
              <NewsCard big />
              <NewsCard />
              <NewsCard />
              <NewsCard />
              <NewsCard />
              <NewsCard />
              <NewsCard />
              <NewsCard />
              <NewsCard />
              <NewsCard />
              <NewsCard />
            </div>
            <div className="pagination">
              <button className="prev">
                <Image
                  src="/assets/icons/prev.svg"
                  width={5}
                  height={9}
                  alt="icon"
                />
              </button>
              <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
              </ul>
              <button className="next">
                <Image
                  src="/assets/icons/next.svg"
                  width={5}
                  height={9}
                  alt="icon"
                />
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="competition">
        <div className="container competition__container">
          <h1>Central Asian Chess Cup 2023</h1>
          <p>{`Umumiy mukofot jamg'armasi 18 000 AQSh dollarini tashkil qiladi. 
          Turnir Shveytsariya tizimi (9 tur) bo‘yicha o‘tkaziladi. 
          Vaqtni nazorat qilish quyidagicha - 90 daqiqa va birinchi yurishdan 
          boshlab har bir harakat uchun 30 soniya.`}</p>
          <button className="more">batafsil</button>
          <Image
            src="/assets/images/cup_img.png"
            priority
            width={400}
            height={340}
            quality={100}
            alt="cup"
          />
        </div>
      </section>
    </Fragment>
  );
};

export default News;
