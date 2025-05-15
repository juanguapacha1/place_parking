// src/components/RutaProtegida.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';

const RutaProtegida = ({ proteger: ComponenteProtegido, ...rest }) => {
    const token = localStorage.getItem('token');
    console.log("RutaProtegida: Verificando token. Token encontrado:", token); // LOG

    if (!token) {
        console.log("RutaProtegida: No hay token, redirigiendo a /"); // LOG
        return <Navigate to="/" replace />;
    }

    console.log("RutaProtegida: Token existe. Renderizando componente protegido."); // LOG
    return <ComponenteProtegido {...rest} />;
};

export default RutaProtegida;