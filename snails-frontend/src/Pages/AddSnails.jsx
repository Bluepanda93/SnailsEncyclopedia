import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from '../globals'

function AddSnails() {
  let navigate = useNavigate()
  const [allSnails, updateSnails] = useState([])
  const [formState, setFormState] = useState({
    image: '',
    description: '',
    link: '',
    name: '',
    region: ''
  })
const showComments = ( id ) => { 
  navigate(`${id}`)
} 

useEffect(() => {
  const apiCall = async () => {
    let response = await axios.get(`${BASE_URL}/allSnails`)
    console.log(response.data)
    updateSnails(response.data.allSnails)
    }
  apiCall()
}, [])

const handleChange = (event) => {
  setFormState({ ...formState, [event.target.id]: event.target.value })
}



const handleSubmit = async (event) => {
  // event.preventDefault()
  let newSnail = await axios
    .post(`${BASE_URL}/allSnails`, formState)
    .then((response) => {
      return response
    })
    .catch((error) => {
      console.log(error)
    })


  updateSnails([...allSnails, newSnail.data])
  setFormState({ image: '', description: '', link: '', name: '', region: '' })
}

return (
  <div className="App">
    <h1>Welcome to the Snail Trail!</h1>
    <div className='container'>
      {allSnails.map((snails) => (
        <div onClick = {() => showComments(snails._id)}>
        <h3>{snails.name}</h3>
        <h3>{snails.description}</h3>
        <h3>{snails.region}</h3>
        <img className='snail-card' src={snails.image} />
        </div>
      ))}
    </div>
    <h3>Input Snail:</h3>
    <form onSubmit={handleSubmit}>
      <label htmlFor="image">Image: </label>
      <input id="image" value={formState.image} onChange={handleChange} />
      <label htmlFor="description">Description: </label>
      <input
        id="description"
        value={formState.description}
        onChange={handleChange}
      />
      <label htmlFor="link">Link: </label>
      <input id="link" value={formState.link} onChange={handleChange} />
      <label htmlFor="name">Name: </label>
      <input id="name" value={formState.name} onChange={handleChange} />
      <label htmlFor="region">Region: </label>
      <input id="region" value={formState.region} onChange={handleChange} />
      <button type="submit">Submit Snail</button>
    </form>
  </div>
)
}


export default AddSnails