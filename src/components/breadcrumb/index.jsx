import Link from "next/link";
import Image from "next/image";

import "./breadcrumb.scss";

const Breadcrumb = () => {
  return (
    <div className="container">
      <div className="breadcrumb">
        <ul>
          <li>
            <Link href="/">
              <div className="img-box">
                <Image src="/assets/icons/home.png" fill alt="house" />
              </div>
              <span>Bosh sahifa</span>
            </Link>
          </li>
          <li>
            <Link href="#">
              <span>Yangiliklar</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Breadcrumb;
