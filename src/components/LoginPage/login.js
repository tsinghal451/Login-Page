import React, { useState } from 'react'
import styles from './login.module.css'
import { Link, useNavigate } from 'react-router-dom';
import InputControl from '../InputControl/InputControl';
import { signInWithEmailAndPassword} from 'firebase/auth';
import { auth } from '../../firebase';
function Login() {
  const navigate = useNavigate();
    const [values, setValues] = useState({
        
        email:"",
        password:"",

    });
    const[errorMsg, setErrorMsg] = useState("");
    const[submitButtonDisabled, SetSubmitButtonDisabled] = useState(false);
    

    const handleSubmission=()=>{

        if( !values.email || !values.password){
            setErrorMsg("Fill All Field Plzz");
            return;
        }
        setErrorMsg("");
        SetSubmitButtonDisabled(true);

        signInWithEmailAndPassword(auth,values.email,values.password).then(async(res)=>{
            SetSubmitButtonDisabled(false);
           
            
            navigate('/');

           
        })

        .catch((err)=>{  SetSubmitButtonDisabled(false);
            setErrorMsg(err.message)
        });
      
       
    };
  return (
    <div className={styles.container}>
    <div className={styles.innerBox}>
        <h1 className={styles.heading}>Login</h1>

        <InputControl label="Email" placeholder="Enter a Email"
        onChange ={(event) => 
        setValues((prev)=> ({...prev,email:event.target.value}))
        } />
        <InputControl label="Password" placeholder="Enter a Password"
        onChange ={(event) => 
        setValues((prev)=> ({...prev,password:event.target.value}))
        } />

        <div className={styles.footer}>
        <b className={styles.error}>{errorMsg}</b>
            <button onClick={handleSubmission}
             disabled ={submitButtonDisabled}>Login</button>
            <p>Already have an account?  &nbsp;
            <span>  
            <Link to = "/signup">SignUp</Link>
            </span>
            </p>
        </div>
    </div>

    </div>
    
  );
}

export default Login