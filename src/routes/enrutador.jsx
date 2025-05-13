import RutaProtegida from '../components/RutaProtegida.jsx';
import Login from '../pages/Login.jsx';
import PanelControl from '../PanelControl.jsx';

export let enrutador = [
    {
        path: '/',
        element: <Login />,
    },
    {
        path: '/home',
        element: <RutaProtegida proteger={ PanelControl }/>,
    }
]