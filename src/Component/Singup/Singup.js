import { faEnvelope,  faLock, faPenNib, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Singup.css';
import auth from '../../firebase.init';


const Singup = () => {

    const [email,setemail]=useState([]);
    const [password,setpassword]=useState([]);

    
    const [password2,setpassword2]=useState([]);
    const [error,seterror]=useState([]);

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        
      ] = useCreateUserWithEmailAndPassword(auth);

      const naviget=useNavigate();


    const hendlemai=(event)=>{
        const inputemail=event.target.value;
        setemail(inputemail);

    }
    const hendlepassword1=event=>{
        const pass1=event.target.value;
        setpassword(pass1);
    }
    const hendlepassword2=event=>{
        const pass2=event.target.value;
       setpassword2(pass2);
    }

    const fromsubmit=event=>{
        event.preventDefault()
        if(password!==password2){
            return seterror("Tow password didn't match")

        }
        if(password.length<6){
            return seterror("Your password is less then 6 number") 

        }
        
        createUserWithEmailAndPassword(email, password);


    }


    if(user){
        naviget('/blog')
    }
    

   

    return (
        <div className='maine-css mb-5'>

            <div className='form-div new-css'>
               <h3 className='text-center pt-4'>Sing up</h3>
             
         <form  className='form-css '>
             <div className='d-flex  align-items-center p-3'>
             <label htmlFor="Name"><FontAwesomeIcon icon={faPenNib}/></label>
             <input  type="text" placeholder= ' Your Name' />
             </div>
             <div className='d-flex  align-items-center p-3'>
             <label htmlFor="email"><FontAwesomeIcon icon={faEnvelope}/></label>
             <input onBlur={hendlemai} type="email" placeholder= ' Your Email' />
             </div>

            
             <div className='d-flex  align-items-center p-3'>
             <label htmlFor="Password"><FontAwesomeIcon icon={faLock}/></label>
             <br />
             <input onBlur={hendlepassword1} type="password" placeholder='Set Password'/>
             </div>
             <div className='d-flex  align-items-center p-3'>
             <label htmlFor="Password"><FontAwesomeIcon icon={faLock}/></label>
             <br />
             <input onBlur={hendlepassword2} type="password" placeholder='Confirm Password'/>
             
             
             </div>
             {
                 loading? <p>loading..........</p>:''
             }
             {
                 error? <p style={{color:'red'}}>{error}</p> :''
             }

             <div  >
             <p  className='text-left'>Have a Account ?  <Link to='/login'>Log in now</Link></p>
             </div>
            
             
             
             <button onClick={fromsubmit} className='btn-css  '><FontAwesomeIcon icon={faUserPlus}/> Sing up</button>
             <br />
             
             
         </form>
         <div className='d-flex align-items-center  justify-content-center '>
             <div className='custom-or'></div>

             <p className='px-2 mt-2'>or</p>
             <div className='custom-or'></div>
         </div>

         <div className=''>
         <button className='btn-google mb-4'>Google singin</button>
        
         
         </div>
        
         </div>
         
            
        </div>
    );
};

export default Singup;