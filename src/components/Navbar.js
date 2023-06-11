import {React,useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
export default function Navbar() {

    const location = useLocation();
    useEffect(() => {
        
    }
    , [location])
    const handleOnclick = ()=>{
        localStorage.removeItem('token')
    }
    return (

        <nav className="navbar navbar-expand-lg bg-body-tertiary ">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">SmartNotes</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    
                    <ul className="navbar-nav mb-2 mb-lg-0  ">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname==="/"?"active":""}`} aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname==="/about"?"active":""}`}  to="/about">About</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav mb-2 mb-lg-0 ms-auto" >
                    {!localStorage.getItem('token') && <div className="nav-item">
                            <Link to="/login" className={`btn btn-primary mx-2 my-1 ${location.pathname==="/login"?"active":""}`}>Login</Link>
                        </div>}
                        {!localStorage.getItem('token') && <div className="nav-item">
                            <Link to="/signup" className={`btn btn-primary mx-2  my-1 ${location.pathname==="/signup"?"active":""}`}>Signup</Link>
                        </div>}
                       {localStorage.getItem('token') &&  <div className="nav-item">
                            <Link to="/login" onClick={handleOnclick} className={`btn btn-primary mx-2 my-1`}>Logout</Link>
                        </div> }
                        </ul>

                </div>
            </div>
        </nav>



    )
}
