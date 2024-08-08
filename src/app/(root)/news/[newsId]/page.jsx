import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";

import Breadcrumb from "@/components/breadcrumb";

import "./singleNews.scss";
import NewsCard from "@/components/news-card";

const SingleNews = () => {
  return (
    <Fragment>
      <Breadcrumb />
      <section className="single-new__main">
        <div className="container single-new__main__container">
          <div className="mside">
            <div className="mside__wrapper">
              <h1>{`Maktab o'quvchilari o'rtasida Jahon chempionati`}</h1>
              <p>{`2023 yilning 13-23 aprel kunlari Gretsiyada maktab o‘quvchilari o‘rtasida Jahon chempionati bo‘lib o‘tadi.`}</p>
              <p>{`Turnirda shaxmat bo‘yicha O‘zbekiston chempionatlari ishtirokchilariga ro‘yxatdan o‘tishga ruxsat berildi.`}</p>
              <p>{`Viza taklifnomalarini olish uchun ishtirokchilar 2023-yil 13-fevralgacha ro‘yxatdan o‘tishlari va tashkilotchilarga to‘lovlarni amalga oshirishlari kerak (mehmonxona va to‘lovlar umumiy summasining 30 foizi). Tashkilotchilar viza olish uchun javobgarlikni o’z zimmasiga olmaydi.`}</p>
              <p>{`Ishtirok etish uchun arizalar yozma ravishda 2023-yil 10-fevralgacha qabul qilinadi, ro‘yxatdan o‘tish uchun tashkilotchilarga zarur to‘lovlar 2023-yil 13-fevralgacha to‘lanishi kerak.`}</p>
              <Link
                href="https://doc.fide.com/docs/CALENDAR/2022/World_School_Chess_Championships_2023_Regs.pdf"
                target="_blank"
              >{`Musobaqa nizomi`}</Link>
              <p>{`Viza taklifnomalarini olish uchun ishtirokchilar 2023-yil 13-fevralgacha ro‘yxatdan o‘tishlari va tashkilotchilarga to‘lovlarni amalga oshirishlari kerak (mehmonxona va to‘lovlar umumiy summasining 30 foizi). Tashkilotchilar viza olish uchun javobgarlikni o’z zimmasiga olmaydi.`}</p>
              <p>{`Ishtirok etish uchun arizalar yozma ravishda 2023-yil 10-fevralgacha qabul qilinadi, ro‘yxatdan o‘tish uchun tashkilotchilarga zarur to‘lovlar 2023-yil 13-fevralgacha to‘lanishi kerak.`}</p>
              <Link
                href="https://doc.fide.com/docs/CALENDAR/2022/World_School_Chess_Championships_2023_Regs.pdf"
                target="_blank"
              >{`Musobaqa nizomi`}</Link>
              <div className="info">
                <div className="info__box">
                  <Image
                    src="/assets/icons/eye.svg"
                    width={16}
                    height={16}
                    alt="info"
                  />
                  Korilgan:2020
                </div>
                <div className="info__box">
                  <Image
                    src="/assets/icons/calender.svg"
                    width={16}
                    height={16}
                    alt="info"
                  />
                  11 Avgust 2022
                </div>
              </div>
            </div>
            <div className="news-section">
              <h1>Yangiliklar</h1>
              <div className="news-row">
                <NewsCard/>
                <NewsCard/>
                <NewsCard/>
              </div>
            </div>
          </div>
          <div className="aside">
            <div className="payment">
              <div className="images">
                <Image
                  src="/assets/images/payme.png"
                  width={92}
                  height={76}
                  alt="payme"
                />
                <Image
                  src="/assets/icons/dark__logo.png"
                  width={110}
                  height={76}
                  alt="payme"
                />
              </div>
              <h1>Elektron Tolov Tizimi</h1>
              <button>Pulni Tolash</button>
            </div>
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
        </div>
      </section>
    </Fragment>
  );
};

export default SingleNews;
