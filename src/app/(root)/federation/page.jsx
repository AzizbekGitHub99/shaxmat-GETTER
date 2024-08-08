import { Fragment } from "react"
import Image from "next/image"
import Link from "next/link"

import NavLink from "@/components/navlink"
import Breadcrumb from "@/components/breadcrumb"
import WorkerCard from "@/components/worker-card"

import "./federation.scss"

const Federation = () => {
  return (
    <Fragment>
        <Breadcrumb/>
        <section className="federation__main">
        <div className="container federation__main__container">
          <div className="aside">
            <ul>
              <li>
                <NavLink href="/news">Yangiliklar</NavLink>
              </li>
              <li>
                <NavLink href="/">{`E'lonlar`}</NavLink>
              </li>
              <li>
                <NavLink href="/">Hamkorlikdagi tadbirlar</NavLink>
              </li>
              <li>
                <NavLink href="/">Turnirlar</NavLink>
              </li>
            </ul>
            <Link href="https://president.uz" className="sites" target="_blank">
              <div className="img-box">
                <Image
                  src="/assets/images/gerb.png"
                  fill
                  priority
                  quality={100}
                  alt="gerb"
                />
              </div>
              <p>{`O'zbekiston Respublikasi Prezidenti sayti`}</p>
            </Link>
            <Link href="https://president.uz" className="sites" target="_blank">
              <div className="img-box">
                <Image
                  src="/assets/images/academy.png"
                  fill
                  priority
                  quality={100}
                  alt="academmy"
                />
              </div>
              <p>{`Xalqaro shaxmat akademiyasiga`}</p>
            </Link>
          </div>
          <div className="mside">
            <div className="mside__wrapper">
            <WorkerCard/>
            <WorkerCard/>
            <WorkerCard/>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default Federation