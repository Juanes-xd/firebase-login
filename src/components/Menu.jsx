import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {auth} from '../firebaseconfig';

const Menu = () => {

    const [usuario, setUsuario] = useState(null);

    useEffect(()=>{
        auth.onAuthStateChanged((user)=>{
            if(user){
                setUsuario(user.email)
            }
        })
    },[])


    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark  bg-dark">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item'">
                    <Link className="nav-link" to='/'>Inicio</Link>
                </li>
                <li>
                <Link  className="nav-link" to='/login'>Login</Link>
                </li>
                <li>
                <Link  className="nav-link" to='/admin'>Admin</Link>
                </li>
            </ul>
            {
                usuario ? (<button type='button' className='btn btn-danger'>Cerrar sesion</button>) : (<span></span>)
            }
            </nav>
        </div>
    )
}

export default Menu
