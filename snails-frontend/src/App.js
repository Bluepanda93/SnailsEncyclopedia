import { useState, useEffect } from 'react'

import axios from 'axios'

function App() {
  useEffect(() => {
    const apiCall = async () => {
      let response = await axios.get('https://localhost:3001/allSnails')
      // updateASnail(response.data)
    }
    apiCall()
  }, [])

  return (
    <div className="App">
      <h1>Welcome to the Snail Trail!</h1>
    </div>
  )
}

export default App
