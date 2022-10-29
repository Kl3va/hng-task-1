//Home Page
import Home from 'components/Home'

//Home Data/Props
import { data } from 'data'

function App() {
  return (
    <>
      <Home {...data} />
    </>
  )
}

export default App
