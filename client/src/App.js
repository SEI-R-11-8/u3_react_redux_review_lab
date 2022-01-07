import './styles/App.css'
import Destinations from './components/Destinations'
import Reviews from './components/Reviews'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <div className='Displays'>
      <Routes>
        <Route path='/' element={<Destinations />} />
        <Route path='/details/:id' element={<Reviews />} />
      </Routes>
    </div>
  )
}

export default App