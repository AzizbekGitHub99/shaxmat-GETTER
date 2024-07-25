import Image from "next/image";
import Link from "next/link";

import NewsCard from "@/components/news-card";
import ServiceCard from "@/components/service-card";

import "./home.scss";

export default function Home() {
  return (
    <main>
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
                <Image src="/images/hero-card.jpg" fill alt="chess" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="news-and-announces">
        <div className="container news-and-announces__container">
          <div className="news">
            <Link href="/news" className="title">
              Yangiliklar
            </Link>
            <div className="news__wrapper">
              <NewsCard big={true}/>
              <NewsCard/>
              <NewsCard/>
            </div>
          </div>
          <div className="announces">
            <Link href="#" className="title">{`E'lonlar`}</Link>
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
              <button className="announces__wrapper__btn">
                {`barcha e'lonlar`}
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="services">
        <div className="container">
          <Link className="title" href='#'>Interaktiv xizmatlar</Link>
          <div className="services__wrapper">
            <ServiceCard/>
            <ServiceCard/>
            <ServiceCard/>
            <ServiceCard/>
            <ServiceCard/>
            <ServiceCard/>
            <ServiceCard/>
            <ServiceCard/>
          </div>
        </div>
      </section>
    </main>
  );
}
