import { useEffect, useState } from 'react';
import { BarraBusqueda } from '../../component/BarraBusqueda';
import { ListaTarjeta } from '../../component/ListaTarjeta';
import { TarjetaContactos } from '../../component/TarjetaContactos';
import './index.css'
import { getUsers } from '../../services/users';

function BusquedaContactos() {

    const [users, setUsers] = useState([]);

    const getData = async () => {
        const newUsers = await getUsers()
        setUsers(newUsers);
    };
   
    //funcion para recupera datos de un complemento secundario a este, los valores recibido  es el valor de la variable "contactoNombre", si son varios parametros puedo crear un objeto poniendo dentro del parectesis {valor1, valor2}

    const FunDatos = ({contactoNombre}) => {
        //console.log (' page variable contactoNombre = formData.get(Contacto-nombre)', contactoNombre ) //solo para saber si tengo el valor dentro de esta funcion.
    }


    //para la forma de recuperar datos, continua o solo cuando se inicia o cuando cambia el parametro
    useEffect(() => {
            getData();
    }, []);


  //nota: para recupera los valores de la barra de busqueda, tengo que crear la funcion recValor (nombrede prop ) = recValorT (nombre de funcion), y tasmitida como prop a barra busqueda
    return (
        <>   
            <BarraBusqueda FunDatosT={FunDatos} />
            <ListaTarjeta>
            {
                    users.map ((user, index) => {
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

export { BusquedaContactos };