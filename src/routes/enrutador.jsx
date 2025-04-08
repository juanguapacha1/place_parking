import Login from '../pages/login.jsx';
import PanelControl from '../PanelControl.jsx';

export let enrutador = [
    {
        path: '/',
        element: <Login />,
    },
    {
        path: '/home',
        element: <PanelControl />,
    }
]