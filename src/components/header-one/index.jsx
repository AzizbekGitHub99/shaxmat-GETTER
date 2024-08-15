"use client";

import { Fragment, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { useDetectClickOutside } from "react-detect-click-outside";

import NavLink from "../navlink";

import "./headerOne.scss";

const HeaderOne = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const ref = useDetectClickOutside({
    onTriggered: () => setIsMenuOpen(false),
  });

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 220) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Fragment>
      <header className={scrolled ? "header-one scrolled" : "header-one"}>
        <div
          className={
            isMenuOpen
              ? scrolled
                ? "burger-menu open scrolled"
                : "burger-menu open"
              : scrolled
              ? "burger-menu scrolled"
              : "burger-menu"
          }
        >
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
              <span>+998 71 231 25 69</span>
              <span>
                +998 71 231 25 69
                <p>uzchess@inbox.ru</p>
              </span>
              <div className="top__container__right__address">
                {`Toshkent shahar, Shayhontoxur tumani, I.Karimov ko'chasi 98A uy.`}
              </div>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="container bottom__container">
            <Link href="/" className="logo">
              <Image src="/assets/icons/logo.png" fill alt="logo" />
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
              <div className="bottom__container__menu__up">
                <button
                  ref={ref}
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="all-btn"
                >
                  <span></span> Barchasi
                </button>
                <div className="auth-btns">
                  <Link href="/signUp">{`Ro'yxatdan o'tish`}</Link>
                  <Link href="/signIn">
                    <Image
                      src="/assets/icons/log-in.svg"
                      alt="lgin"
                      width={16}
                      height={16}
                    />
                    Kirish
                  </Link>
                </div>
              </div>
              <ul className="bottom__container__menu__down">
                <li>
                  <Link href="/federation">Federatsiya</Link>
                </li>
                <li>
                  <Link href="#">Xalqaro munosabatlar</Link>
                </li>
                <li>
                  <Link href="/news">Yangiliklar</Link>
                </li>
                <li>
                  <Link href="#">Matbuot xizmati</Link>
                </li>
                <li>
                  <Link href="#">Klublar</Link>
                </li>
                <li>
                  <Link href="#">Turnirlar</Link>
                </li>
                <li>
                  <Link href="#">Arxiv</Link>
                </li>
                <li>
                  <Link href="#">Aloqa</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  );
};

export default HeaderOne;
