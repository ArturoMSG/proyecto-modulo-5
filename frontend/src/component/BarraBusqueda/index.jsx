import './index.css'

function BarraBusqueda({FunDatosT}) {
//recValoT funcion recibida como props, poner llave {} dentro de parentesis en props

    const handleForm = (event) => {
        event.preventDefault();

        //console.log(event); rgresa todo elevento completo
        //console.log(event.target);regresa el evento del formulario

        const formElemento = event.target;
        const formDatos = new FormData(formElemento); //form data recibe un elemento formulario, DatosFormulario es el objeto formulario

        const contactoNombre = formDatos.get('Contacto-nombre');   // DatosFormulario.get trae el valor del formulario si le pongo el "name" (checar puede ser ID) del campo del imput 
      
       
       console.log ('barra variable contactoNombre = formData.get(Contacto-nombre)', contactoNombre ) // solo para saber si tengo el valor dentro de esta funcion.

       //ejecucion de valor para regresar parametros en este caso es el valor de la variable "contactoNombre", si son varios parametros puedo crear un objeto poniendo dentro del parectesis {valor1, valor2}
       FunDatosT({contactoNombre});

    }





    return (
       

        <>
       
        <div className='container-form'>
            <form id='search-form' className='form-element' onSubmit={handleForm}>

                <h2>Nombre del Contacto: </h2>
                <input type="text" id="Contacto-nombre" name="Contacto-nombre" placeholder='Nombre del contacto a buscar' />
                               <input type="submit" className="button-default" value="Buscar" />

            </form>
        </div>
    </>
    )
}

export { BarraBusqueda };