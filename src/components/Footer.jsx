import React from 'react'
import styles from 'components/home.module.scss'

const Footer = ({ zuriIcon, footerText, ingressiveIcon }) => {
  return (
    <footer>
      <div className={styles.footer}>
        <img src={zuriIcon} alt='zuri' />
        <p>{footerText}</p>
        <img src={ingressiveIcon} alt='ingressive' />
      </div>
    </footer>
  )
}

export default Footer
