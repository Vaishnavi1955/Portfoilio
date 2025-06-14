"use client"
import React from 'react'
import styles from '@/styles/SocialSection.module.css';
import { SocialIcon } from 'react-social-icons'

const SocialSection = () => {
  return (
    <div className={styles.social}>
      <div className={styles.socialcard}
        // onClick={() => window.open('https://instagram.com/codershub.dev', '_blank')}
      >
        {/* <SocialIcon url="https://instagram.com" style={{ height: 40, width: 40 }} />
        <p>@codershub.dev</p> */}
      </div>

      <div className={styles.socialcard}
        onClick={() => window.open('https://mail.google.com/mail/u/1/#inbox?compose=new', '_blank')}
      >
        <SocialIcon url="https://mail.google.com" style={{ height: 40, width: 40 }} />
        <p>vphad1905@gmail.com</p>
      </div>

      <div className={styles.socialcard}
        onClick={() => window.open('www.linkedin.com/in/vaishnavi-phad-2a65a2249', '_blank')}
      >
        <SocialIcon url="https://linkedin.com" style={{ height: 40, width: 40 }} />
        <p>Vaishnavi Phad</p>
      </div>

      <div className={styles.socialcard}
        onClick={() => window.open('https://github.com/Vaishnavi-Phad', '_blank')}
      >
        <SocialIcon url="https://www.githubcom" style={{ height: 40, width: 40 }} />
        <p>Vaishnavi Phad</p>
      </div>
    </div>


  )
}

export default SocialSection