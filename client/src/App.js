import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Posts from './components/Posts'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/posts/:id" element={ <Posts /> } />
      </Routes>
    </div>
  )
}

export default App
