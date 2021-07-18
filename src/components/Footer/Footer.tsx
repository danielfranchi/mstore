import React from 'react'

import logo from '../../images/logo.png'

import { ImFacebook } from "react-icons/im"
import { FiInstagram } from "react-icons/fi";
import { FaTwitter } from "react-icons/fa";

import styles from '../Footer/Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footerContainer}>

      <div>
        <img src={logo} alt="Logo" />
      </div>

      <div className={styles.contact}>
      <ul>
          <li>marketplace</li>
          <li>central de atendimento</li>
          <li>serviços</li>
          <li>FAQ</li>
        </ul>
      </div>

      <div className={styles.contactImg}>
        <ImFacebook size="24" style={{marginRight: "20px"}} />
        <FiInstagram size="24"  style={{marginRight: "20px"}} />
        <FaTwitter size="24" />
      </div>
    </div>
  )
}

export default Footer
