import './index.css'
import Imagen from '../../assets/imagenes/IconoAgenda.png';
import { Link } from 'react-router-dom';

function MenuSuperior() {

    return (
        <nav>
            <div>
                <img src={Imagen} alt="Imagen de Agenda" className='Imagen' />
            </div>
            
            <ul className='nav-items'>

                <Link to="/" className='nav-link'>
                    Inicio
                </Link>

                <Link to="/nuevo-contacto" className='nav-link'>
                    Agregar Contacto
                </Link>

                <Link to="/lista-contactos" lassName='nav-link'>
                    Busqueda de Contactos
                
                </Link>
            </ul>
        </nav>
    )
}

export { MenuSuperior };