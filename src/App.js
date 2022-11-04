//Importing react-router-dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//Home Page
import Home from 'components/Home'

//Home Data/Props
import { data, contactData } from 'data'

//Components
import Footer from 'components/Footer'
import Contact from 'components/Contact'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home {...data} />} />
        <Route path='/contact' element={<Contact {...contactData} />} />
      </Routes>
      <Footer
        zuriIcon={data.zuriIcon}
        ingressiveIcon={data.ingressiveIcon}
        footerText={data.footerText}
      />
    </Router>
  )
}

export default App
