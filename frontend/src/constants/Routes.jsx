import { useRoutes } from 'react-router-dom';
import { BusquedaContactos } from '../pages/BusquedaContactos';
import { NuevoContacto } from '../pages/NuevoContacto';
import { ErrorPagina } from '../pages/ErrorPagina';
import { Home } from '../pages/Home';


function Routes() {
    const routes =useRoutes ([
        {
            path: '/',
            element: <Home/>   
        },
        {
            path: '/lista-contactos',
            element: <BusquedaContactos/>   
        },
        {
            path: '/nuevo-contacto',
            element: <NuevoContacto/>   
        },
       
        {
            path: '*',
            element: <ErrorPagina/>   
        },


    ]);

    return routes;
}

export { Routes };