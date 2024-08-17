"use client"

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { useDetectClickOutside } from "react-detect-click-outside";

import NavLink from "../navlink";

import "./headerTwo.scss";

const HeaderTwo = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const ref = useDetectClickOutside({
    onTriggered: () => setIsMenuOpen(false),
  });

  return (
    <header className="header-two">
      <div className={isMenuOpen ? "burger-menu open" : "burger-menu"}>
        <ul ref={ref} onClick={() => setIsMenuOpen(false)}>
          <li>
            <NavLink href="/federation">Federatsiya</NavLink>
          </li>
          <li>
            <NavLink href="#">Xalqaro munosabatlar</NavLink>
          </li>
          <li>
            <NavLink href="/news">Yangiliklar</NavLink>
          </li>
          <li>
            <NavLink href="#">Matbuot xizmati</NavLink>
          </li>
          <li>
            <NavLink href="#">Klublar</NavLink>
          </li>
          <li>
            <NavLink href="#">Turnirlar</NavLink>
          </li>
          <li>
            <NavLink href="#">Arxiv</NavLink>
          </li>
          <li>
            <NavLink href="#">Aloqa</NavLink>
          </li>
        </ul>
      </div>
      <div className="top">
        <div className="container top__container">
          <div className="top__container__left">
            <span>Toshkent 5+</span>
            <div className="lan-btns">
              <button>Ru</button>
              <button>Uz</button>
              <button>Eng</button>
            </div>
            <span>Gerb</span>
            <span>Madhiya</span>
            <span>Bayroq</span>
          </div>
          <div className="top__container__right">
            <span>uzchess@inbox.ru</span>
            <span>+998 71 231 25 69</span>
            <span>+998 71 231 25 69</span>
            <div className="top__container__right__socials">
              <Link
                className="img-box"
                href="https://www.youtube.com/"
                target="_blank"
              >
                <Image
                  src="/assets/icons/outline_instagram.png"
                  fill
                  priority
                  quality={100}
                  alt="social"
                />
              </Link>
              <Link
                className="img-box"
                href="https://www.youtube.com/"
                target="_blank"
              >
                <Image
                  src="/assets/icons/outline_facebook.png"
                  fill
                  priority
                  quality={100}
                  alt="social"
                />
              </Link>
              <Link
                className="img-box"
                href="https://www.youtube.com/"
                target="_blank"
              >
                <Image
                  src="/assets/icons/outline_twitter.png"
                  fill
                  priority
                  quality={100}
                  alt="social"
                />
              </Link>
              <Link
                className="img-box"
                href="https://www.youtube.com/"
                target="_blank"
              >
                <Image
                  src="/assets/icons/outline_telegram.png"
                  fill
                  priority
                  quality={100}
                  alt="social"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="container bottom__container">
          <Link href="/" className="logo">
            <Image src="/assets/icons/dark__logo.png" fill alt="logo" />
          </Link>
          <div className="bottom__container__menu">
            <div className="hidden-bottom">
              <span>Toshkent 5+</span>
              <div className="lan-btns">
                <button>Ru</button>
                <button>Uz</button>
                <button>Eng</button>
              </div>
            </div>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="bottom__container__menu__all-btn"
            >
              <span></span> Barchasi
            </button>
            <ul className="bottom__container__menu__navs">
              <li>
                <NavLink href="/federation">Federatsiya</NavLink>
              </li>
              <li>
                <NavLink href="/news">Yangiliklar</NavLink>
              </li>
              <li>
                <NavLink href="#">Matbuot xizmati</NavLink>
              </li>
              <li>
                <NavLink href="#">Klublar</NavLink>
              </li>
              <li>
                <NavLink href="#">Turnirlar</NavLink>
              </li>
              <li>
                <NavLink href="#">Aloqa</NavLink>
              </li>
            </ul>
            <div className="bottom__container__menu__auth-btns">
              <Link href="/signUp">{`Ro'yxatdan o'tish`}</Link>
              <Link href="/signIn">
                <svg
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.3238 13.8334H12.9905C13.7269 13.8334 14.3238 13.2365 14.3238 12.5001V4.50008C14.3238 3.7637 13.7269 3.16675 12.9905 3.16675H10.3238V4.50008H12.9905V12.5001H10.3238V13.8334Z"
                    fill="#04305b"
                  />
                  <path
                    d="M6.77213 12.0901L5.82533 11.1513L8.43811 8.51623L2.34284 8.5162C1.97465 8.5162 1.67618 8.21772 1.67618 7.84953C1.67618 7.48134 1.97466 7.18286 2.34285 7.18286L8.45096 7.1829L5.79732 4.55168L6.73612 3.60488L10.9967 7.82948L6.77213 12.0901Z"
                    fill="#04305b"
                  />
                </svg>
                Kirish
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderTwo;
