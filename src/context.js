import React, { useState, useContext, useEffect } from 'react'
import { data } from 'data'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [isSubtextOpen, setIsSubtextOpen] = useState(false)
  const [position, setPosition] = useState({})
  const [content, setContent] = useState({
    id: '',
    text: '',
    description: '',
    link: '',
  })

  const closeSubtext = () => {
    setIsSubtextOpen(false)
  }

  const openSubtext = (text, coord) => {
    const sublink = data.links.find((link) => link.text === text)
    setContent(sublink)
    setPosition(coord)
    setIsSubtextOpen(true)
  }

  return (
    <AppContext.Provider
      value={{ isSubtextOpen, closeSubtext, openSubtext, position, content }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
