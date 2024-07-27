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
      <section className="main">
        <div className="container main__container">
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
            <Link href="https://president.uz" className="president-site">
              <div className="img-box">
                <Image src="/assets/images/gerb.png" fill alt="gerb" />
              </div>
              <p>{`O'zbekiston Respublikasi Prezidenti sayti`}</p>
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
    </Fragment>
  );
};

export default News;
