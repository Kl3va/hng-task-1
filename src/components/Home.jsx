import React from 'react'
import styles from 'components/home.module.scss'
import Subtext from 'components/Subtext'
import { useGlobalContext } from 'context'

const Home = ({
  shareIcon,
  zuriIcon,
  ingressiveIcon,
  dotIcon,
  cameraIcon,
  footerText,
  profile: { id, img, twitter, slack },
  socials,
  links,
}) => {
  const { openSubtext, closeSubtext } = useGlobalContext()
  let offset
  const showSubtext = (e) => {
    const title = e.target.textContent
    const anchor = e.target.getBoundingClientRect()
    offset = window.pageYOffset
    console.log(anchor, offset)
    const center = (anchor.left + anchor.right) / 2
    const bottom = anchor.bottom + offset - 1

    openSubtext(title, { center, bottom })
  }

  return (
    <>
      <div className={styles.container}>
        <header>
          <div className={styles.header__wrapper}>
            <img src={dotIcon} alt='share' className={styles.header__icon1} />
            <img src={shareIcon} alt='share' className={styles.header__icon2} />
          </div>
        </header>
        <main className='main'>
          <section className={styles.section__profile}>
            <div className={styles.profile}>
              <div className='packed'>
                <img
                  src={img}
                  alt={twitter.user}
                  id={id}
                  className={styles.profile__Img}
                />
                <img
                  src={cameraIcon}
                  alt='edit'
                  className={styles.profile__edit}
                />
              </div>
              <h1 id={twitter.id}>{twitter.user}</h1>
              <p className='hidden' id={slack.id}>
                {slack.user}
              </p>
            </div>
          </section>

          <section className={styles.section__links}>
            <ul className={styles.list}>
              {links.map(({ id, text, link }, index) => {
                return (
                  <li
                    className={styles.list__link}
                    key={index}
                    onMouseOver={showSubtext}
                    onMouseOut={closeSubtext}
                  >
                    <a href={link} id={id}>
                      {text}
                    </a>
                  </li>
                )
              })}
            </ul>
          </section>

          <section className={styles.section__socials}>
            <div className={styles.socials}>
              {socials.map((social, index) => {
                return <img key={index} src={social} alt='social' />
              })}
            </div>
          </section>
        </main>
        <footer>
          <div className={styles.footer}>
            <img src={zuriIcon} alt='zuri' />
            <p>{footerText}</p>
            <img src={ingressiveIcon} alt='ingressive' />
          </div>
        </footer>
        <Subtext />
      </div>
    </>
  )
}

export default Home
