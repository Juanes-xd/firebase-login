import React, {useEffect, useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {auth} from '../firebaseconfig';

const Menu = () => {
    const historial = useNavigate();
    const [usuario, setUsuario] = useState(null);

    useEffect(()=>{
        auth.onAuthStateChanged((user)=>{
            if(user){
                setUsuario(user.email)
            }
        })
    },[])


    const cerrarSesion = () =>{
        auth.signOut()
        setUsuario(null)
        {historial('/')}
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark  bg-dark">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item'">
                    <Link className="nav-link" to='/'>Inicio</Link>
                </li>
                <li>
                {
                    !usuario ? ( <Link  className="nav-link" to='/login'>Login</Link>) : (<span></span>)
                }
               
                </li>
                <li>
                {
                    !usuario ? ( <Link  className="nav-link" to='/admin'>Admin</Link>) : (<span></span>)
                }
                </li>
            </ul>
            {
                usuario ? (<button onClick={cerrarSesion} type='button' className='btn btn-danger mr-sm-2'>Cerrar sesion</button>) : (<span></span>)
            }
            </nav>
        </div>
    )
}

export default Menu
