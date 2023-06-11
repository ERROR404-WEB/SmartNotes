import {React,useEffect, useRef} from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
export default function Navbar() {
    const ref = useRef(null);
    const location = useLocation();
    useEffect(() => {
        
    }
    , [location])
    const handleOnclick = ()=>{
        localStorage.removeItem('token')
        ref.current.click();
    }
    const handleClick = ()=>{
        ref.current.click();
    }
    return (

        <nav className="navbar navbar-expand-lg bg-body-tertiary ">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/" onClick={handleClick}>SmartNotes</Link>
                <button className="navbar-toggler" ref={ref} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    
                    <ul className="navbar-nav mb-2 mb-lg-0  ">
                    {localStorage.getItem('token') && <li className="nav-item">
                            <Link className={`nav-link ${location.pathname==="/"?"active":""}`} aria-current="page" to="/" onClick={handleClick}>Home</Link>
                        </li>}

                     {localStorage.getItem('token') &&   <li className="nav-item">
                            <Link className={`nav-link ${location.pathname==="/about"?"active":""}`}  to="/mynotes" onClick={handleClick}>My Notes</Link>
                        </li>}
                    </ul>
                    <ul className="navbar-nav mb-2 mb-lg-0 ms-auto" >
                    {!localStorage.getItem('token') && <div className="nav-item">
                            <Link to="/login" className={`btn btn-primary mx-2 my-1 ${location.pathname==="/login"?"active":""}`} onClick={handleClick}>Login</Link>
                        </div>}
                        {!localStorage.getItem('token') && <div className="nav-item">
                            <Link to="/signup" className={`btn btn-primary mx-2  my-1 ${location.pathname==="/signup"?"active":""}`} onClick={handleClick}>Signup</Link>
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
