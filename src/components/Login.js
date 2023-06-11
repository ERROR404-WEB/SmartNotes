import React,{useState} from 'react'

import { useNavigate } from "react-router-dom";

const Login = (props) => {

    const host = "https://smart-notes-backend.onrender.com";
    const [credentials, setCredentials] = useState({email:"",password:""})
    const navigate = useNavigate();
    

    const handleSubmit = async (e)=>{
        props.updateProgress(50);
        e.preventDefault()
            const response = await fetch(`${host}/api/auth/login`,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({email:credentials.email,password:credentials.password})
    })
    props.updateProgress(100);
        const json = await response.json()
        if(json.success){
            // Save the auth token and redirect
            localStorage.setItem('token',json.authToken)
            navigate('/mynotes');  
            props.showAlert("Logged in Successfully","success");
        }
        else{ 
            
            props.showAlert(json.error,"danger")
        }

    }
    const onChange = (e)=>{
        setCredentials({...credentials,[e.target.name]:e.target.value})
    }
    return (
        <div>
            <h5 className='text-center mt-2'>login</h5>
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

                    <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login
