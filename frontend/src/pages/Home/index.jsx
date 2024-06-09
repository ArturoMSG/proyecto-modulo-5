import { useEffect, useState } from 'react';
import { MenuSuperior } from '../../component/MenuSuperior';
import { getUsers } from '../../services/users';
import './index.css'
import { BarraBusqueda } from '../../component/BarraBusqueda';
import { TarjetaContactos } from '../../component/TarjetaContactos';
import fotoVacia from '../../assets/imagenes/FotoVacia.jpeg'

function Home() {


    

    const [users, setUsers] = useState([]);

    const getData = async () => {
        const newUsers = await getUsers()
        setUsers(newUsers);
    };
   
    useEffect(() => {
            getData();
    }, []);

    return (
        <>
            <BarraBusqueda /> 
            <TarjetaContactos 
            foto = {users.foto}
            nombres = {users.nombres}
             />
            <h1>Pagina Home</h1>

        </>

    )
}

export { Home };