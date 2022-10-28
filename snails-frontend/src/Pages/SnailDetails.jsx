import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import Comments from './Comments'

const SnailDetails = () => {
  let { id } = useParams()
  const [snails, setSnail] = useState([])
  const [comments, setComments] = useState([])
  useEffect(() => {
    const apiCall = async () => {
      let response = await axios.get(`http://localhost:3001/allSnails/${id}`)
      setSnail(response.data.singleSnail)
      setComments(response.data.singleSnail.comments)
      }
    apiCall()
  }, [])

  const [formState, setFormState] = useState({
    name: '',
    title: '',
    body: '',
    snail: '',
    image: '',
    description:'',
    region:'',
    link:''
  })

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }
  

    const handleUpdate = async (event) => {
      event.preventDefault()
      let updateASnail = await axios
        .put(`http://localhost:3001/allSnails/${id}`, formState)
        setSnail([...snails, updateASnail.data])
        setFormState({image: '', description: '', link: '', name: '', region: ''})
    }
    

    const handleDelete = async (event) => {
      event.preventDefault()
      let deleteSnail = await axios.delete(`http://localhost:3001/allSnails/${id}`, formState
    )
    setSnail([...snails, deleteSnail.data])
    setFormState({ image: '', description: '', link: '', name: '', region: '' })
    }

  
  return (
    <div className="comments">
      {snails.name}
      <form onSubmit={handleUpdate} className="comments-b">
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
      <button type="submit">update Snail</button>
    </form>
    <button onClick={handleDelete}>Delete This Snail</button>
      <Comments />
     
      {comments.map((comment) => (
         <ul className='comments-a'>
        <p>{comment.name}</p>
        <h3>{comment.title}</h3>
        <h4>{comment.body}</h4>
        <img src={comment.image}/>
      
      </ul>
      ))}
       
    </div>
  )
}

export default SnailDetails