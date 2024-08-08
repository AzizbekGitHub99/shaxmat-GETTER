import { Fragment } from "react";

import "./albums.scss";
import Breadcrumb from "@/components/breadcrumb";
import NewsCard from "@/components/news-card";
import Image from "next/image";

const Albums = () => {
  return (
    <Fragment>
      <Breadcrumb />
      <section className="albums">
        <div className="container">
          <h2>Albomlar</h2>
          <div className="albums__wrapper">
            <NewsCard big />
            <NewsCard big />
            <NewsCard big />
            <NewsCard big />
            <NewsCard big />
            <NewsCard big />
            <NewsCard big />
            <NewsCard big />
            <NewsCard big />
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
      </section>
    </Fragment>
  );
};

export default Albums;
