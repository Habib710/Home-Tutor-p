import React from 'react';
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser,faLock,faKey,faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { Form } from 'react-bootstrap';

const Login = () => {
    return (
        <div className='root-div'>
            <div className='form-div'>
               <h3 className='text-center pt-4'>Login</h3>
             
         <form className='form-css '>
             <div className='d-flex  align-items-center p-3'>
             <label htmlFor="Name"><FontAwesomeIcon icon={faEnvelope}/></label>
             
             
             <input  type="email" placeholder= ' Your Email' /></div>
            
             <div className='d-flex  align-items-center p-3'>
             <label htmlFor="Password"><FontAwesomeIcon icon={faLock}/></label>
             <br />
             <input type="password" placeholder='Your Password'/>
             
             
             
             </div>
             <div  >
             <p  className='text-left'>New to our website?  <Link to='/singup'>Sing up now</Link></p>
             </div>
            
             
             
             <button className='btn-css  '><FontAwesomeIcon icon={faKey}/> Login</button>
             <br />
             
             
         </form>
         <div className='d-flex align-items-center ps-4'>
             <div className='custom-or'></div>

             <p className='px-2 mt-2'>or</p>
             <div className='custom-or'></div>
         </div>

         <div>
         <button className='btn-google'>Google singin</button>
         <br /><br />
         <button className='btn-google mb-4'>GitHub singin</button>
         
         </div>
        
         </div>
         
         
        </div>
    );
};

export default Login;