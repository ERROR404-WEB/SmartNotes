import React,{useState} from 'react'

import { useNavigate } from "react-router-dom";

const Login = (props) => {

    const host = "http://localhost:1708";
    const [credentials, setCredentials] = useState({email:"",password:""})
    const navigate = useNavigate();
    

    const handleSubmit = async (e)=>{
        e.preventDefault()
            const response = await fetch(`${host}/api/auth/login`,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({email:credentials.email,password:credentials.password})
    })
        const json = await response.json()
        if(json.success){
            // Save the auth token and redirect
            localStorage.setItem('token',json.authToken)
            navigate('/');  
            props.showAlert("Logged in Successfully","success");
        }
        else{ 
            props.showAlert("Invalid Credentials","danger");
        }

    }
    const onChange = (e)=>{
        setCredentials({...credentials,[e.target.name]:e.target.value})
    }
    return (
        <div>
            <div className="container my-5" style={{width:"80vmin"}}>
                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp"onChange={onChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" name="password" onChange={onChange} />
                    </div>

                    <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Login
