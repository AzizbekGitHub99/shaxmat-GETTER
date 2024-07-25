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
          href="#"
          className="cardLg"
          style={{ backgroundImage: `url("/images/card.png")` }}
        >
          <h1>{`2022-yil Chennayda o'tkazilgan 44-Jahon shaxmat olimpiadasi g'oliblari`}</h1>
          <p>11 Avgust 2022</p>
        </Link>
      ) : (
        <Link href="#" className="cardMd">
          <div className="cardMd__head">
            <Image src="/images/card.png" fill alt="card" />
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
