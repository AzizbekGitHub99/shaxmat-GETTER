import Link from "next/link";
import Image from "next/image";

import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container footer__container">
        <div className="left">
          <Link href="/" className="logo">
            <Image src="/assets/icons/logo.png" fill alt="logo" />
          </Link>
          <ul className="footer__navs">
            <li><Link href="#">Federatsiya</Link></li>
            <li><Link href="#">Xalqaro munosabatlar</Link></li>
            <li><Link href="#">Yangiliklar</Link></li>
            <li><Link href="#">Aloqa</Link></li>
            <li><Link href="#">Matbuot xizmati</Link></li>
            <li><Link href="#">Klublar</Link></li>
            <li><Link href="#">Turnirlar</Link></li>
            <li><Link href="#">Arxiv</Link></li>
          </ul>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
};

export default Footer;
