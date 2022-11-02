import { useState, useEffect } from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import { BASE_URL } from '../globals'

const Comments = () => {
    const [allSnails, updateSnails] = useState([])
    const [formState, setFormState] = useState({
      name: '',
      title: '',
      body: '',
      snail: ''
    })

    let { id } = useParams()
  
  
  useEffect(() => {
    const apiCall = async () => {
      let response = await axios.get(`${BASE_URL}/comments`)
      console.log(response.data)
      updateSnails(response.data)
    }
    apiCall()
  }, [])
  
  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }
  
  const handleSubmit = async (event) => {
    // event.preventDefault()
    let newSnail = await axios
      .post(`${BASE_URL}/addSnails/${id}`, formState)
      .then((response) => {
        return response
      })
      .catch((error) => {
        console.log(error)
      })
  
    // updateSnails([...allSnails, newSnail.data])
    setFormState({ image: '', description: '', link: '', name: '', region: '' })
    // console.log(newSnail.data)
  }
  
  return (
    <div className="App">
      <h1>Comments!</h1>
      <div>
        {allSnails.map((snails) => (
          <div>
          <h3>{snails.name}</h3>
          <img src={snails.image} />
          </div>
        ))}
      </div>
      {/* <h3>Input Snail:</h3> */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Your Name: </label>
        <input id="name" value={formState.image} onChange={handleChange} />
        <label htmlFor="title">Title: </label>
        <input
          id="title"
          value={formState.description}
          onChange={handleChange}
        />
        <label htmlFor="body">Comment: </label>
        <input id="body" value={formState.link} onChange={handleChange} />
        <button type="submit">Submit Comment</button>
      </form>
    </div>
  )
  }


export default Comments