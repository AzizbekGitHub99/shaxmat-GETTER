// "use client"

import Link from "next/link";
import Image from "next/image";

import "./serviceCard.scss";

const ServiceCard = () =>{
    return<Link href='#' className="service-card">
        <h2>{`Elektron ro'yhatdan o'tish`}</h2>
        <span><Image src="/images/right-arrow.svg" width={3} height={6} alt="arrow" /></span>
    </Link>
};

export default ServiceCard;