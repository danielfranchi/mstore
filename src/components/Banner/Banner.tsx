import React from 'react'

import banner from '../../images/banner.png'
import styles from './banner.module.css'

const Banner = () => {
  return (
    <div className={styles.container}>
      <img src={banner} alt="Banner" />
    </div>
  )
}

export default Banner
