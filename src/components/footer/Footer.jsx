import React from 'react'
import styles from "./footer.module.css";
import Image from 'next/image';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>©2023 Haker. All rights reserved.</div>
      <div className={styles.social}>
        <Image src="/1.png" width={18} height={18} className={styles.icon} alt="haker Facebook Account" />
        <Image src="/2.png" width={18} height={18} className={styles.icon} alt="haker" />
        <Image src="/3.png" width={18} height={18} className={styles.icon} alt="haker" />
        <Image src="/4.png" width={18} height={18} className={styles.icon} alt="haker" />
      </div>
    </div>
  )
}

export default Footer