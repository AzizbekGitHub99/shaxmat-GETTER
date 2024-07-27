import Image from "next/image";
import "./headerTwo.scss";

const HeaderTwo = () => {
  return (
    <header className="header-two">
      <div className="top">
        <div className="container top__container">2222222</div>
      </div>
      <div className="bottom">
        <div className="container bottom__container">
          <div className="logo">
            <Image src="/assets/icons/dark__logo.png" fill alt="logo" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderTwo;
