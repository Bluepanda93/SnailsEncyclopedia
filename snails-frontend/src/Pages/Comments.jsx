import { useState, useEffect } from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'

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
      let response = await axios.get('http://localhost:3001/comments')
      console.log(response.data)
      updateSnails(response.data)
    }
    apiCall()
  }, [])
  
  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }
  
  const handleSubmit = async (event) => {
    event.preventDefault()
    let newSnail = await axios
      .post(`http://localhost:3001/addSnails/${id}`, formState)
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
          <h3>{snails.name}</h3>
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