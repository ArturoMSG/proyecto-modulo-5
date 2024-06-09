import { useEffect, useState } from 'react';
import { MenuSuperior } from '../../component/MenuSuperior';
import { getUsers } from '../../services/users';
import './index.css'
import { BarraBusqueda } from '../../component/BarraBusqueda';
import { TarjetaContactos } from '../../component/TarjetaContactos';
import {ListaTarjeta} from '../../component/ListaTarjeta' ;
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

    const users1 = [
        {
            id : 1,
            email : "amasalazarg1@gmail.com",
            nombres : "Arturo",
            apellido : "Salazar",
            foto : "foto1",
            telefono : "5512007406",
            tipo : "Familiar"
        },
        {
            id : 2,
            email : "amasalazarg3@gmail.com",
            nombres : "Miguel",
            apellido : "Salazar",
            foto : "foto2",
            telefono : "5571880113",
            tipo : "Trabajo"
        },
        {
            id : 1,
            email : "amasalazarg1@gmail.com",
            nombres : "Arturo",
            apellido : "Salazar",
            foto : "foto1",
            telefono : "5512007406",
            tipo : "Familiar"
        },
        {
            id : 2,
            email : "amasalazarg3@gmail.com",
            nombres : "Miguel",
            apellido : "Salazar",
            foto : "foto2",
            telefono : "5571880113",
            tipo : "Trabajo"
        },
        
    ];


    return (
        <>
            <BarraBusqueda /> 
           
                <ListaTarjeta>    
                    
                    {
                        users1.map ((user, index) => {
                            return (
                                <TarjetaContactos
                                    key={user.index}
                                    nombreT = {user.nombres}
                                    apellidoT = {user.apellido}
                                    fotoT = {user.foto}
                                    telefonoT = {user.telefono}
                                    tipoT = {user.tipo}
                                    emailT = {user.email}
                                                                        
                                />

                             )

                        } )
                        
                    }
                
           
                </ListaTarjeta> 
            
            
        </>

    )
    
}

export { Home };