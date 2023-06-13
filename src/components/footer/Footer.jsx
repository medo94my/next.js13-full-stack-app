import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'
function Footer() {
  return (
    <div className={styles.container}>
        <div className={styles.container}>@2023 Lamamia. All rights reserved</div>
        <div className={styles.social}>
          <Image className={styles.icon} src="/2.png" width={15} height={15} alt="facebook"/>
          <Image className={styles.icon} src="/1.png" width={15} height={15} alt="facebook"/>
          <Image className={styles.icon} src="/3.png" width={15} height={15} alt="facebook"/>
          <Image className={styles.icon} src="/4.png" width={15} height={15} alt="facebook"/>
        </div>
    </div>
  )
}

export default Footer