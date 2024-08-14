"use client";

import { Fragment, useState } from "react";

import Breadcrumb from "@/components/breadcrumb";

import "./signUp.scss";
import Image from "next/image";
import { DatePicker } from "antd";

const SignUp = () => {
  const [currentUser, setCurrentUser] = useState({});

  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  const downloadImage = (e) => {
    e.preventDefault();
    let res = { ...currentUser, image: URL.createObjectURL(e.target.files[0]) };
    setCurrentUser(res);
  };
  return (
    <Fragment>
      <Breadcrumb />
      <div className="container">
        <form className="main-form">
          <div className="self-info">
            <h1>{`Siz haqingizda ma'lumotlar:`}</h1>
            <div className="self-info__wrapper">
              <div className="input-box">
                <label htmlFor="name">Ism</label>
                <input type="text" id="name" placeholder="Ism" required />
              </div>
              <div className="input-box">
                <label htmlFor="address">{`Tug'ilgan joy`}</label>
                <input
                  type="text"
                  id="address"
                  placeholder="Tug'ilgan joy"
                  required
                />
              </div>
              <div className="input-box">
                <label htmlFor="lastName">Familiya</label>
                <input
                  type="text"
                  id="lastName"
                  placeholder="Familiya"
                  required
                />
              </div>
              <div className="input-box">
                <label htmlFor="liveAddress">{`Yashash manzili`}</label>
                <input
                  type="text"
                  id="liveAddress"
                  placeholder="Yashash manzili"
                  required
                />
              </div>
              <div className="input-box">
                <label htmlFor="midName">Otasining ismi</label>
                <input type="text" id="midName" placeholder="Otasining ismi" />
              </div>
              <div className="input-box">
                <label htmlFor="birthDay">{`Tug'ilgan kun`}</label>
                <DatePicker
                  placeholder={`Tug'ilgan kun`}
                  format={{
                    format: "YYYY-MM-DD",
                    type: "mask",
                  }}
                  onChange={onChange}
                />
              </div>
            </div>
          </div>
          <div className="register-info">
            <h1>{`Registratsiya ma'lumotlar`}</h1>
            <div className="register-info__wrapper">
              <div className="input-box">
                <label htmlFor="passport">
                  Passport yoki Guvohnoma (Seriya va raqami)
                </label>
                <input
                  type="text"
                  id="passport"
                  placeholder="Seriya raqami"
                  required
                />
              </div>
              <div className="input-box image-input">
                <label htmlFor="image-download">Image</label>
                <div className="image-box">
                  {currentUser.image ? (
                    <Image
                      src={currentUser?.image}
                      fill
                      quality={100}
                      priority
                      alt="image"
                    />
                  ) : (
                    <Image
                      src="/assets/icons/download-image.png"
                      width={68}
                      height={68}
                      alt="image"
                    />
                  )}
                </div>
                <label className="download-label" htmlFor="image-download">
                  <Image
                    src="/assets/icons/download-file.png"
                    width={16}
                    height={16}
                    alt="download"
                  />
                  Открыть
                </label>
                <input
                  onChange={downloadImage}
                  type="file"
                  id="image-download"
                  required
                />
              </div>
              <div className="input-box">
                <label htmlFor="lastName">Telefon raqami</label>
                <input
                  type="text"
                  id="phone"
                  placeholder="Telefon raqami"
                  required
                />
              </div>
              <div className="input-box">
                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" placeholder="E-mail" required />
              </div>
              <div className="input-box">
                <label htmlFor="educate">{`O'qish yoki ish joyi`}</label>
                <input
                  type="text"
                  id="educate"
                  placeholder="O'qish yoki ish joyi"
                />
              </div>
              <div className="input-box">
                <label htmlFor="birthDay">Login</label>
                <input type="text" id="login" placeholder="Login" required />
              </div>
              <div className="input-box">
                <label htmlFor="payment">{`To'lov maqsadi`}</label>
                <input
                  type="text"
                  id="payment"
                  placeholder="To'lov maqsadi"
                  required
                />
              </div>
              <div className="input-box">
                <label htmlFor="password">Parol</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Parol"
                  required
                />
              </div>
              <button type="submit">Saqlash</button>
            </div>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default SignUp;
