import React from 'react'
import { Link } from 'react-router-dom'

function home(props) {
  return (
    <div>

    <div>

    <h1><Link to="/login">Login</Link></h1>
    <br />
    <h1><Link to="/Signup">Signup</Link></h1>
    <br/>

  


    </div>
    <br/>
    <br/>

    <h2 >{props.name ?`welcome - ${props.name}`:"Login plz"}</h2>

    
    
    
    </div>
  )
}

export default home