import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import {auth} from '../firebaseconfig';


const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const register = (e) =>{
        e.preventDefault();

        try {
            auth.createUserWithEmailAndPassword(email,password)
            alert('Usuario registrado')
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div className='row mt-5'>
            <div className='col'></div>
            <div className='col'>
                <form onSubmit={register} className='form-group'>

                    <input onChange={(e)=>{setEmail(e.target.value)}} 
                    className='form-control' placeholder='Introduce el email' type="text" />

                    <input onChange={(e)=>{setPassword(e.target.value)}}
                     className='form-control mt-4' placeholder='Password' type="password" />

             <center><input className='btn btn-dark btn-block mt-4' value='Registrar usuario' type="submit" /></center>
                </form>
            </div>
            <div className='col'></div>
        </div>
    )
}

export default Login
