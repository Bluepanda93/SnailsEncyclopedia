import { Link } from 'react-router-dom'

const Nav = () => {
  
  return (
    <nav className="navbar">
      <div>
        {/* create Links here */}
        <Link to="/">Home</Link>
        <Link to="/comments">Comments</Link>
        <Link to="/addSnails">Add Snail</Link>
      </div>
    </nav>
  )
}

export default Nav
