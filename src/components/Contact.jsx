import React from 'react'
import styles from 'components/contact.module.scss'

import goBack from 'assets/back.png'

const Contact = ({
  heading,
  headerText,
  checkboxText,
  btnInfo,
  inputFirstName,
  inputLastName,
  inputEmail,
  inputMultiText,
}) => {
  return (
    <>
      <aside className='go-back'>
        <img src={goBack} alt='go to home page' />
      </aside>
      <div className={styles.contact}>
        <header className={styles.header}>
          <h1 className={styles.heading}>{heading}</h1>
          <p className={styles.paragraph}>{headerText}</p>
        </header>
        <main className={styles.main}>
          <section className={styles.form__wrapper}>
            <form className={styles.form}>
              <div className={styles.text__wrapper}>
                <div className={styles.Inputwrapper}>
                  <label className={styles.label}>{inputFirstName.label}</label>
                  <input
                    type='text'
                    name={inputFirstName.name}
                    id={inputFirstName.id}
                    placeholder={inputFirstName.placeholder}
                    className={styles.input__text}
                  />
                  <p className={styles.hint}>{inputFirstName.hint}</p>
                </div>

                <div className={styles.Inputwrapper}>
                  <label className={styles.label}>{inputLastName.label}</label>
                  <input
                    type='text'
                    name={inputLastName.name}
                    id={inputLastName.id}
                    placeholder={inputLastName.placeholder}
                    className={styles.input__text}
                  />
                  <p className={styles.hint}>{inputLastName.hint}</p>
                </div>
              </div>

              <div className={styles.Inputwrapper}>
                <label className={styles.label}>{inputEmail.label}</label>
                <input
                  type='email'
                  name={inputEmail.name}
                  id={inputEmail.id}
                  placeholder={inputEmail.placeholder}
                  className={styles.input__text}
                />
                <p className={styles.hint}>{inputEmail.hint}</p>
              </div>

              <div className={styles.Inputwrapper}>
                <label className={styles.label}>{inputMultiText.label}</label>
                <textarea
                  name={inputMultiText.name}
                  id={inputMultiText.id}
                  cols='20'
                  rows='4'
                  placeholder={inputMultiText.placeholder}
                  className={styles.multitext}
                ></textarea>
                <p className={styles.hint}>{inputEmail.hint}</p>
              </div>

              <div className={styles.checkboxWrapper}>
                <input
                  type='checkbox'
                  name='checkbox'
                  className={styles.checked}
                />
                <p className={styles.checkboxText}>{checkboxText}</p>
              </div>

              <input
                type='button'
                value={btnInfo.text}
                id={btnInfo.id}
                className={styles.btn}
              />
            </form>
          </section>
        </main>
      </div>
    </>
  )
}

export default Contact
