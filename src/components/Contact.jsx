import React, { useState } from 'react'
import styles from 'components/contact.module.scss'

import goBack from 'assets/back.png'
import { useNavigate } from 'react-router-dom'

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
  const navigate = useNavigate()

  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  })

  const [touched, setTouched] = useState({
    firstName: false,
    lastName: false,
    email: false,
    message: false,
  })

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setUser({ ...user, [name]: value })
  }

  const [isChecked, setIsChecked] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (
      user.firstName &&
      user.firstName &&
      user.email &&
      user.message &&
      isChecked
    ) {
      setUser({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
      })
      setTouched({
        firstName: false,
        lastName: false,
        email: false,
        message: false,
      })
      setIsChecked(false)
    }

    /* else if (!user.lastName) {
      setTouched({ ...touched, lastName: true })
    } else {
      setTouched({ ...touched, lastName: false })
    }*/
  }

  return (
    <>
      <aside className='go-back'>
        <img src={goBack} alt='go to home page' onClick={() => navigate('/')} />
      </aside>
      <div className={styles.contact}>
        <header className={styles.header}>
          <h1 className={styles.heading}>{heading}</h1>
          <p className={styles.paragraph}>{headerText}</p>
        </header>
        <main className={styles.main}>
          <section className={styles.form__wrapper}>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.text__wrapper}>
                <div className={styles.Inputwrapper}>
                  <label className={styles.label}>{inputFirstName.label}</label>
                  <input
                    type='text'
                    name={inputFirstName.name}
                    id={inputFirstName.id}
                    placeholder={inputFirstName.placeholder}
                    className={`${
                      touched.firstName && !user.firstName
                        ? 'inputEmpty'
                        : `${styles.input__text}`
                    }`}
                    onChange={handleChange}
                    onBlur={() => setTouched({ ...touched, firstName: true })}
                    value={user.firstName}
                    required
                  />
                  {touched.firstName && !user.firstName ? (
                    <p className={styles.hint}>{inputFirstName.hint}</p>
                  ) : null}
                </div>

                <div className={styles.Inputwrapper}>
                  <label className={styles.label}>{inputLastName.label}</label>
                  <input
                    type='text'
                    name={inputLastName.name}
                    id={inputLastName.id}
                    placeholder={inputLastName.placeholder}
                    className={`${
                      touched.lastName && !user.lastName
                        ? 'inputEmpty'
                        : `${styles.input__text}`
                    }`}
                    onChange={handleChange}
                    onBlur={() => setTouched({ ...touched, lastName: true })}
                    value={user.lastName}
                    required
                  />
                  {touched.lastName && !user.lastName ? (
                    <p className={styles.hint}>{inputLastName.hint}</p>
                  ) : null}
                </div>
              </div>

              <div className={styles.Inputwrapper}>
                <label className={styles.label}>{inputEmail.label}</label>
                <input
                  type='email'
                  name={inputEmail.name}
                  id={inputEmail.id}
                  placeholder={inputEmail.placeholder}
                  className={`${
                    touched.email && !user.email
                      ? 'inputEmpty'
                      : `${styles.input__text}`
                  }`}
                  onChange={handleChange}
                  onBlur={() => setTouched({ ...touched, email: true })}
                  value={user.email}
                  required
                />
                {touched.email && !user.email ? (
                  <p className={styles.hint}>{inputEmail.hint}</p>
                ) : null}
              </div>

              <div className={styles.Inputwrapper}>
                <label className={styles.label}>{inputMultiText.label}</label>
                <textarea
                  name={inputMultiText.name}
                  id={inputMultiText.id}
                  cols='20'
                  rows='4'
                  placeholder={inputMultiText.placeholder}
                  className={`${
                    touched.message && !user.message
                      ? 'inputEmpty'
                      : `${styles.multiText}`
                  }`}
                  onChange={handleChange}
                  onBlur={() => setTouched({ ...touched, message: true })}
                  value={user.message}
                  required
                ></textarea>
                {touched.message && !user.message ? (
                  <p className={styles.hint}>{inputMultiText.hint}</p>
                ) : null}
              </div>

              {/* <div className={styles.checkboxWrapper}>
                <label htmlFor='checkbox'></label>
                <input
                  type='checkbox'
                  name='checkbox'
                  id='checkbox'
                  className={styles.checked}
                  reqired
                  checked={isChecked}
                  onChange={() => setIsChecked(!isChecked)}
                />
                <p className={styles.checkboxText}>{checkboxText}</p>
              </div>*/}
              <label className={styles.checkboxWrapper} htmlFor='checkbox'>
                <input
                  type='checkbox'
                  name='checkbox'
                  id='checkbox'
                  className={styles.checked}
                  reqired
                  checked={isChecked}
                  onChange={() => setIsChecked(!isChecked)}
                />
                {checkboxText}
              </label>

              <button
                type='submit'
                id={btnInfo.id}
                disabled={!isChecked}
                className={styles.btn}
              >
                {btnInfo.text}
              </button>
            </form>
          </section>
        </main>
      </div>
    </>
  )
}

export default Contact
