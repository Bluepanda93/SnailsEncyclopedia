import { useState, useEffect } from 'react'

import axios from 'axios'

function App() {
  const [allSnails, updateSnails] = useState([])
  const [formState, setFormState] = useState({
    image: '',
    description: '',
    link: '',
    name: '',
    region: ''
  })

  useEffect(() => {
    const apiCall = async () => {
      let response = await axios.get('http://localhost:3001/allSnails')
      console.log(response.data)
      updateSnails(response.data.allSnails)
    }
    apiCall()
  }, [])

  return (
    <div className="App">
      <h1>Welcome to the Snail Trail!</h1>
      <div>
        {allSnails.map((snails) => (
          <h3>{snails.name}</h3>
        ))}
      </div>
      <h3>Input Snail:</h3>
      <form>
        <label htmlFor="image">Image: </label>
        <input id="image" value={formState.image} />
        <label htmlFor="description">Description: </label>
        <input id="description" value={formState.description} />
        <label htmlFor="link">Link: </label>
        <input id="link" value={formState.link} />
        <label htmlFor="name">Name: </label>
        <input id="name" value={formState.name} />
        <label htmlFor="region">Region: </label>
        <input id="region" value={formState.region} />
        <button type="submit">Submit Snail</button>
      </form>
    </div>
  )
}

export default App
