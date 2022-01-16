import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import {auth} from '../firebaseconfig';


const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msgerror, setMsgerror] = useState(null);

    const register = async (e) =>{
        e.preventDefault();

        try {
          await  auth.createUserWithEmailAndPassword(email,password)
              .then(r => alert('Usuario registrado'))
        } catch (e) {
            
            if(e.code == 'auth/invalid-email'){
                setMsgerror('Formato de Email incorrecto')
            }
            if(e.code == 'auth/weak-password'){
                setMsgerror('La contraseña debe tener minimo 6 caracteres')
            }
        }
    }

    return (
        <div className='row mt-5'>
            <div className='col'></div>
            <div className='col'>
                <form onSubmit={register} className='form-group'>

                    <input onChange={(e)=>{setEmail(e.target.value)}} 
                    className='form-control' placeholder='Introduce el email' type="email" />

                    <input onChange={(e)=>{setPassword(e.target.value)}}
                     className='form-control mt-4' placeholder='Password' type="password" />

             <center><input className='btn btn-dark btn-block mt-4' value='Registrar usuario' type="submit" /></center>
                </form>
                {
                    msgerror ? ( <div>{msgerror}</div>) : ( <span></span> )
                }
            </div>
            <div className='col'></div>
        </div>
    )
}

export default Login
