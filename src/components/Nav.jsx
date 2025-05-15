import logo from '../assets/logo.jpg'
import Boton from './Boton'
import React from 'react';
import { useNavigate } from 'react-router-dom'; 
function Nav() {
    const navigate = useNavigate(); // Hook para la navegación

    const handleCerrarSesion = () => {
        console.log("Cerrando sesión...");
        // 1. Remover el token y cualquier otro dato de sesión de localStorage
        localStorage.removeItem('token');
        localStorage.removeItem('usuario'); // Si también guardas el nombre de usuario

        // 2. Redirigir al login
        // Puedes mostrar una alerta antes si quieres
        // alert('Has cerrado sesión exitosamente.');
        navigate('/'); // Redirige a la ruta raíz (tu página de Login)
        console.log("Redirigido a /login");
    };
    return (
        <nav className="nav">
            <div className="barra-navegacion">
                <img src={logo} alt="logo" />
                <p className='logo'>PLACE PARKING</p>
            </div>
            <div className='boton'>
                <Boton onClick={handleCerrarSesion} text={"Cerrar Sesión"} />
            </div>
        </nav>
    )
}

export default Nav