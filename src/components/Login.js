import React,{useRef} from "react";
import {useNavigate} from "react-router-dom";
function Login(){
    const navigate = useNavigate();

    const user_email = useRef("");
    const user_password = useRef("");

    const login = () =>{
        console.log(user_email.current.value);
        console.log(user_password.current.value);
        if(user_email.current.value === "akash9753@gmail.com" && user_password.current.value === "akash123"){
            navigate("/dashboard")
        }else{
            navigate("/error")
        }
    }

    return(
        <React.Fragment>
            
            <div>
                <label>Email</label>
                <input ref={user_email} type="email"></input> 
            </div>
            <br></br><br></br>
            <div>
            <label>Password</label>
                <input ref={user_password} type="password"></input> 
            </div>
            <br></br><br></br>

            <div>
                <button onClick={login}>Login</button>
            </div>
        </React.Fragment>
    )
}
export default Login;