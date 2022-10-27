import './App.css'
import Nav from './components/Nav'
import AddSnails from './Pages/AddSnails'
import Comments from './Pages/Comments'
import Home from './components/Home'
import { Routes, Route } from 'react-router-dom'
import CommentsId from './Pages/CommentsId'
import SnailDetails from './Pages/SnailDetails'

function App() {
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/comments/:id" element={<CommentsId />} />
          <Route path="/addsnails" element={<AddSnails />} />
          <Route path="/comments" element={<Comments />} />
          <Route path="/addsnails/:id" element={<SnailDetails />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
