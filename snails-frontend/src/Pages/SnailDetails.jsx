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
  
  return (
    <div>
      {snails.name}
      <Comments />
     
      {comments.map((comment) => (
         <ul>
        <p>{comment.body}</p>
        <h3>{comment.name}</h3>
        <h4>{comment.title}</h4>
      
      </ul>
      ))}
    </div>
  )
}

export default SnailDetails