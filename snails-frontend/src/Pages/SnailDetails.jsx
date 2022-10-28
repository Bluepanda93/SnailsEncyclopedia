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
    snail: ''
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
  
    <button onClick={handleDelete}>Delete This Snail</button>
      <Comments />
     
      {comments.map((comment) => (
         <ul>
        <p>{comment.body}</p>
        <h3>{comment.name}</h3>
        <h4>{comment.title}</h4>
        <img src={comment.image}/>
      
      </ul>
      ))}
       
    </div>
  )
}

export default SnailDetails