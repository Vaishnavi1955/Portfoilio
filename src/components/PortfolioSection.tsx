import React from 'react'
import styles from '@/styles/PortfolioSection.module.css'
import mainImg from '@/assets/mainImg.png'
import Image from 'next/image'

const PortfolioSection = () => {
  return (
    <div className={styles.section1outer}>
      <div className={styles.subtextdiv}>
        <div className={styles.left}>
          <div className={styles.about}>
            <p>Hi, I am <span>Vaishnavi Phad</span></p>
            <p>I build full stack websites and I will solve all your business problems. I am open to freelance work.</p>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.stat}>
            <h1></h1>
            <p>Happy<br></br>clients</p>
          </div>
          <div className={styles.stat}>
            <h1>0</h1>
            <p>Years of<br></br> experience</p>

          </div>
        </div>

      </div>
     
      <div className={styles.maintextdiv}>
        <p>I am a </p>
        <h1><span>&nbsp;</span>FrontEnd</h1>
        <h2>Developer</h2>
      </div> run dev
      <video src={'/smoke.mp4'} autoPlay loop muted
        className={styles.smokevideo}
      />
    </div>
  )
}

export default PortfolioSection