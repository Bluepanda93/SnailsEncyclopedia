import './App.css'
import AddSnails from './Pages/AddSnails'
import Home from './components/Home'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'

function App() {
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addSnails" element={<AddSnails />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
