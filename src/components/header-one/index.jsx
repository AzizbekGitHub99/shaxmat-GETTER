import Image from "next/image";
import "./headerOne.scss";

const HeaderOne = () => {
  return (
    <header className="header-one">
      <div className="top">
        <div className="container top__container">1111111</div>
      </div>
      <div className="bottom">
        <div className="container bottom__container">
          <div className="logo">
            <Image src="/assets/icons/logo.png" fill alt="logo" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderOne;
