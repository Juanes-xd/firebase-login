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

    const loginUser = async () =>{

        try {
          await  auth.signInWithEmailAndPassword(email,password)
          .then(r => alert('Se a iniciado sesion'))
        } catch (error) {
            if(error.code == 'auth/wrong-password'){
                setMsgerror('Contraseña incorrecta')
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
              <center>< button onClick={loginUser} className='btn btn-success btn-block mt-3' >Iniciar sesion</button></center>
                {
                    msgerror ? ( <div>{msgerror}</div>) : ( <span></span> )
                }
            </div>
            <div className='col'></div>
        </div>
    )
}

export default Login
