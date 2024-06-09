import './index.css'
import fotoVacia from '../../assets/imagenes/FotoVacia.jpeg'



function TarjetaContactos(foto, nombres) {

    

    return (
        <>
            <div className ='container-tarjeta'>
                <div className="imagen-foto">
                    <img src= { foto } alt="Foto sin imagen" />
                </div>
                <div className='tarjeta-content'>
                <div className='tarjeta-content'>
                <div className='tarjeta-content'>
                    <h2 className='nombre'>nombres </h2>
                    <h2 className='nombre'>apellidos </h2>
                    <h2 className='nombre'>Telefono </h2>
                    <h2 className='nombre'>email </h2>
                    <h2 className='nombre'>tipo </h2>
                </div>   

                </div>

                </div>
                <h1>Tajetas de contactos </h1>
            </div>
           
        </>
        
    )
};

export { TarjetaContactos };