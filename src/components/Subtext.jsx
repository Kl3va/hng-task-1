import React, { useRef, useEffect } from 'react'
import { useGlobalContext } from 'context'
import styles from 'components/home.module.scss'

const Subtext = () => {
  const {
    isSubtextOpen,
    position,
    content: { description },
  } = useGlobalContext()

  const container = useRef(null)

  useEffect(() => {
    const subtext = container.current
    const { center, bottom } = position
    subtext.style.top = `${bottom}px`
    subtext.style.left = `${center}px`
  }, [position])

  return (
    <aside
      className={`${
        isSubtextOpen ? `${styles.subtext} show` : `${styles.subtext}`
      }`}
      ref={container}
    >
      {description}
    </aside>
  )
}

export default Subtext
