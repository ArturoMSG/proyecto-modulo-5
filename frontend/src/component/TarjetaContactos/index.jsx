import './index.css'
import fotoVacia from '../../assets/imagenes/FotoVacia.jpeg'



function TarjetaContactos({nombreT, apellidoT, fotoT, telefonoT, tipoT, emailT}) {

    

    return (
        <>
            <div className ='container-tarjeta'>
                <div className="imagen-foto">
                    <img src= { fotoVacia} alt="Foto sin imagen" />
                </div>
                <div className='tarjeta-content'>
                    <h2 className='nombre'> {fotoT} </h2>
                    <h2 className='nombre'> {nombreT} </h2>
                    <h2 className='nombre'>{apellidoT} </h2>
                    <h2 className='nombre'>{telefonoT} </h2>
                    <h2 className='nombre'>{emailT} </h2>
                    <h2 className='nombre'>{tipoT }</h2>
               

                </div>
                <h1>Tajetas de contactos </h1>
            </div>
           
        </>
        
    )
};

export { TarjetaContactos };