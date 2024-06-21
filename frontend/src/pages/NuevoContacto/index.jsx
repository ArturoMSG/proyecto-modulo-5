import { useEffect , useState } from 'react';
import { FormContactoNuevo } from '../../component/FormContactoNuevo';
import './index.css'
import { getUsers } from '../../services/users';

function NuevoContacto() {

    const [users, setUsers] = useState([]);
    const [datos, setDatos] = useState({});

    const getData = async (datos) => {
        const newUsers = await getUsers(datos)
        setUsers(newUsers);
    };
      
    const FunDatos = ({contactoNombre, contactoApellido, contactoEmail, contactoTelefono, contactoTipo, contactoFoto, contactoId}) => { 

        const nuevosDatos ={contactoNombre, contactoApellido, contactoEmail, contactoTelefono, contactoTipo, contactoFoto, contactoId}
        setDatos(nuevosDatos)

        //console.log('pagina nuevo contacto', contactoNombre, contactoApellido, contactoEmail, contactoTelefono, contactoTipo, contactoFoto, contactoId) para ver que estoy recibiendo los datos
    }

   // const FunDatos = ({}) => {       }


    //para la forma de recuperar datos, continua o solo cuando se inicia o cuando cambia el parametro
    useEffect(() => {
            getData(datos);
    }, [datos]);

  

    return (

        <>
            <h1>Pagina NuevoContacto</h1>
            <FormContactoNuevo FunDatosT={FunDatos}/>
        </>
    )
}

export { NuevoContacto };