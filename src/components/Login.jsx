import React from 'react'
import {Link} from 'react-router-dom';


const Login = () => {
    return (
        <div className='row mt-5'>
            <div className='col'></div>
            <div className='col'>
                <form className='form-group'>
                    <input className='form-control' placeholder='Introduce el email' type="text" />
                    <input className='form-control mt-4' placeholder='Password' type="text" />
                    <input value='Registrar usuario' type="submit" />
                </form>
            </div>
            <div className='col'></div>
        </div>
    )
}

export default Login
