//Home Page
import Home from 'components/Home'

//Home Data/Props
import { data } from 'data'

function App() {
  return (
    <div className='App'>
      <Home {...data} />
    </div>
  )
}

export default App
