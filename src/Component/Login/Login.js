import React, { useState } from 'react';
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLock,faKey,faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const Login = () => {
    const [email,setemail]=useState([]);
    const [password,setpassword]=useState([]);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);



    const naviget=useNavigate();


    const hendlemai=(event)=>{
        const inputemail=event.target.value;
        setemail(inputemail);

    }
    const hendlepassword1=event=>{
        const pass1=event.target.value;
        setpassword(pass1);
    }

    const login=event=>{
        event.preventDefault()

        signInWithEmailAndPassword(email, password)
    }


    if(user){
        naviget('/checkout');
    }
    return (
        <div className='root-div'>
            <div className='form-div'>
               <h3 className='text-center pt-4'>Login</h3>
             
         <form className='form-css '>
             <div className='d-flex  align-items-center p-3'>
             <label htmlFor="Name"><FontAwesomeIcon icon={faEnvelope}/></label>
             
             
             <input onBlur={hendlemai}  type="email" placeholder= ' Your Email' required/></div>
            
             <div className='d-flex  align-items-center p-3'>
             <label htmlFor="Password"><FontAwesomeIcon icon={faLock}/></label>
             <br />
             <input onBlur={hendlepassword1} type="password" placeholder='Your Password' required/>
             
             
             
             </div>
               {
                     error? <p style={{color:'red'}}>{error.message}</p>:''
                 }
             <br />
            
             
             
             <button onClick={login} className='btn-css mb-2 '><FontAwesomeIcon icon={faKey}/> Login</button>
             <br />
             <div  >
                 
             <p  className='text-left'>New to our website?  <Link to='/singup'>Sing up now</Link></p>
             </div>
             
             
         </form>
         <div className='d-flex align-items-center justify-content-center '>
             <div className='custom-or'></div>

             <p className='px-2 mt-2'>or</p>
             <div className='custom-or'></div>
         </div>

         <div >
         <button className='btn-google mb-5 mt-2'>Google singin</button>
         <br />
         
         
         </div>
        
         </div>
         
         
        </div>
    );
};

export default Login;