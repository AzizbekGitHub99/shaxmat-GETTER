"use client";

import { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";

import "./newsCard.scss";

const NewsCard = ({ big }) => {
  return (
    <Fragment>
      {big == true ? (
        <Link
          href="/news/1"
          className="cardLg"
          style={{ backgroundImage: `url("/assets/images/card.png")` }}
        >
          <h1>{`2022-yil Chennayda o'tkazilgan 44-Jahon shaxmat olimpiadasi g'oliblari`}</h1>
          <p>11 Avgust 2022</p>
        </Link>
      ) : (
        <Link href="/news/1" className="cardMd">
          <div className="cardMd__head">
            <Image src="/assets/images/card.png" fill priority alt="card" />
          </div>
          <div className="cardMd__body">
            <h1>{`20 yoshgacha bo'lgan o'smirlar va qizlar o'rtasida G'arbiy Osiyo chempionati`}</h1>
            <p>11 Avgust 2022</p>
          </div>
        </Link>
      )}
    </Fragment>
  );
};

export default NewsCard;
