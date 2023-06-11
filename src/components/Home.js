import React from 'react'
import logo from './logo.png'
import { Link } from 'react-router-dom'

export default function Home({ showAlert }) {
 
  return (
    <div>

      <div className="d-flex"  style={{height:"85vh",alignItems:"center",justifyContent:"center"}} >
      <div style={{textAlign:"center"}}>
       <img src={logo} alt="logo" style={{width:"70Vmin"}}/>
       <h6 style={{textAlign:"center"}}>STORE YOUR NOTES IN CLOUD</h6>
       
       
       <Link className="btn btn-primary mx-2 my-4  text-center" to="/signup">Getting Started</Link>
       </div>
       
      </div>
      
    </div>
  )
}
