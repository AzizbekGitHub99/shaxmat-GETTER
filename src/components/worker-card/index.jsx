import Image from "next/image"

import "./workerCard.scss"

const WorkerCard = () => {
  return (
    <div className="worker-card">
        <div className="worker-card__head">
            <Image src="/assets/images/worker.jpg" fill priority alt="worker"/>
        </div>
        <div className="worker-card__body">
            <h2>Bozorboev Sunnatullo</h2>
            <h3>Bosh Kotib</h3>
            <p>{`1990 yilda tug’ilgan.`}</p>
            <p>{`Ma’lumoti: Oliy.`}</p>
            <p>{`Federatsiyadagi faoliyat: 2018 yildan buyon.`}</p>
        </div>
    </div>
  )
}

export default WorkerCard