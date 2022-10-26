import './App.css'
import Nav from './components/Nav'
import AddSnails from './Pages/AddSnails'
import Comments from './Pages/Comments'
import Home from './components/Home'
import { Routes, Route } from 'react-router-dom'

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
          <Route path="/comments" element={<Comments />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
