import Link from "next/link";
import Image from "next/image";

import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="container top__container">
          <div className="left">
            <Link href="/" className="logo">
              <Image src="/assets/icons/logo.png" fill alt="logo" />
            </Link>
            <ul className="footer__navs">
              <li>
                <Link href="#">Federatsiya</Link>
              </li>
              <li>
                <Link href="#">Xalqaro munosabatlar</Link>
              </li>
              <li>
                <Link href="#">Yangiliklar</Link>
              </li>
              <li>
                <Link href="#">Aloqa</Link>
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
            </ul>
          </div>
          <div className="right">
            <div className="right__phones">
              <h3>+998 71 231- 25- 69</h3>
              <h3>+998 71 241 -12- 00</h3>
              <p>uzchess@inbox.ru</p>
            </div>
            <div className="right__address">
              <h3>{`Toshkent shahar, Shayhontoxur tumani,I.Karimov ko'chasi 98A uy.`}</h3>
            </div>
            <div className="right__buttons">
              <Link href="/signUp">
                <span>
                  <Image src="/assets/icons/register.svg" fill alt="icon" />
                </span>
                Регистрация
              </Link>
              <Link href="/signIn">
                <span>
                  <Image src="/assets/icons/log-in.svg" fill alt="icon" />
                </span>
                Вход
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="container bottom__container">
          <div className="left">
            <p>Copyrigth 2022</p>
            <p>Privay Policy</p>
            <p>Terms of Use</p>
          </div>
          <div className="right">
            <div className="socials">
              <Link
                className="img-box"
                href="https://www.youtube.com/"
                target="_blank"
              >
                <Image src="/assets/icons/white_instagram.png" fill alt="social" />
              </Link>
              <Link
                className="img-box"
                href="https://www.youtube.com/"
                target="_blank"
              >
                <Image src="/assets/icons/white_facebook.png" fill alt="social" />
              </Link>
              <Link
                className="img-box"
                href="https://www.youtube.com/"
                target="_blank"
              >
                <Image src="/assets/icons/white_twitter.png" fill alt="social" />
              </Link>
              <Link
                className="img-box"
                href="https://www.youtube.com/"
                target="_blank"
              >
                <Image src="/assets/icons/white_telegram.png" fill alt="social" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
