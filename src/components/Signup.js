import React,{useState} from 'react'
import { useNavigate } from "react-router-dom";
const Signup = (props) => {
    const navigate = useNavigate();
    const host = "https://smart-notes-backend.onrender.com";
    
    const [credentials, setCredentials] = useState({ name:"",email: "", password: "",cpassword:"" })

    const onChange = (e)=>{
        setCredentials({...credentials,[e.target.name]:e.target.value})
    }
    const handleClick = async (e)=>{
        props.updateProgress(50);
        e.preventDefault();
        if(credentials.password!==credentials.cpassword){
            props.showAlert("Password and Confirm Password should be same","danger")
        }
        else{
        
        const response = await fetch(`${host}/api/auth/createuser`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password})
        })
        const json = await response.json()
        console.log(json)
        props.updateProgress(100);
        if(json.success){
            // Save the auth token and redirect
            localStorage.setItem('token',json.authToken)
            navigate('/mynotes');
            props.showAlert("Account Created Successfully","success");
        }
        else{
            props.showAlert(json.error,"danger")

        }
     }
    
    }
    return (
        <div>
            <h5 className='text-center mt-2'>Signup</h5>
            <div className="container mt-5" style={{ width: "80Vmin" }}>
                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" name="name" value={credentials.name}   onChange={onChange}aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email"  name="email"value={credentials.email} onChange={onChange} aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" name="password" value={credentials.password} onChange={onChange}  minLength={5}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Confirm Password</label>
                        <input type="password" className="form-control" id="cpassword" name="cpassword" value={credentials.cpassword} onChange={onChange} minLength={5} />
                    </div>

                    <button type="submit" className="btn btn-primary" onClick={handleClick}>Signup</button>
                </form>
            </div>
        </div>
    )
}

export default Signup
