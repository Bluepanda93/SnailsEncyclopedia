import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import Comments from './Comments'

const SnailDetails = () => {
  let { id } = useParams()
  return (
    <div>
      <Comments />
    </div>
  )
}

export default SnailDetails