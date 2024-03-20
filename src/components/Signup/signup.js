import React, { useState } from 'react'
import styles from './signup.module.css'
import { Link, useNavigate } from 'react-router-dom';
import InputControl from '../InputControl/InputControl';
import {createUserWithEmailAndPassword, updateProfile} from 'firebase/auth';
import { auth } from '../../firebase';
function Signup() {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        name:"",
        email:"",
        password:"",

    });
    const[errorMsg, setErrorMsg] = useState("");
    const[submitButtonDisabled, SetSubmitButtonDisabled] = useState(false);
    

    const handleSubmission=()=>{

        if(!values.name || !values.email || !values.password){
            setErrorMsg("Fill All Field Plzz");
            return;
        }
        setErrorMsg("");
        SetSubmitButtonDisabled(true);

        createUserWithEmailAndPassword(auth,values.email,values.password).then(async(res)=>{
            SetSubmitButtonDisabled(false);
            const user = res.user;
            await updateProfile(user,{
                displayName:values.name,
            });
            navigate('/');

           
        })

        .catch((err)=>{  SetSubmitButtonDisabled(false);
            setErrorMsg(err.message)
        });
      
       
    };
  return (
    <div className={styles.container}>
    <div className={styles.innerBox}>
        <h1 className={styles.heading}>Signup</h1>

        <InputControl 
        label="Name" 
        placeholder="Enter a Full Name"
        onChange ={(event) => 
        setValues((prev)=> ({...prev,name:event.target.value}))
        }
        
         />
        <InputControl label="Email" placeholder="Enter a Email"
        onChange ={(event) => 
        setValues((prev)=> ({...prev,email:event.target.value}))
        }
        
         />
        <InputControl label="Password" placeholder="Enter a Password" 
            onChange ={(event) => 
        setValues((prev)=> ({...prev,password:event.target.value}))
        }
        />

        <div className={styles.footer}>
        <b className={styles.error}>{errorMsg}</b>
            <button onClick={handleSubmission}
            disabled ={submitButtonDisabled}
            
            >Signup</button>
            <p>Already have an account?{" "}
            <span>  
            <Link to = "/login">Login</Link>
            </span>
            </p>
        </div>
    </div>

    </div>
    
  );
}

export default Signup