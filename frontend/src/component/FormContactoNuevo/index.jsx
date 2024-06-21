import './index.css'

function FormContactoNuevo({FunDatosT}) {
//recValoT funcion recibida como props, poner llave {} dentro de parentesis en props

    const handleForm = (event) => {
        event.preventDefault();

        const formElemento = event.target;
        const formDatos = new FormData(formElemento); //form data recibe un elemento formulario, DatosFormulario es el objeto formulario

        // obtiene los valores de cada linea del input
        const contactoNombre = formDatos.get('Contacto-nombre');
        const contactoApellido = formDatos.get('Contacto-nombre');
        const contactoEmail = formDatos.get('Contacto-nombre');
        const contactoTelefono = formDatos.get('Contacto-nombre');
        const contactoTipo = formDatos.get('Contacto-nombre');
        const contactoFoto = formDatos.get('Contacto-nombre');
        const contactoId = formDatos.get('Contacto-nombre');
      
       
       
       //ejecucion de valor para regresar parametros en este caso es el valor de la variable "contactoNombre", si son varios parametros puedo crear un objeto poniendo dentro del parectesis {valor1, valor2}
       FunDatosT({contactoNombre, contactoApellido, contactoEmail, contactoTelefono, contactoTipo, contactoFoto, contactoId});

    }

    console.log('pagina nuevo contacto');



    return (
       

        <>
       
        <div className='container-form'>
            <form id='search-form' className='form-element' onSubmit={handleForm}>

                <h2>Nombre:</h2>
                <input
                    type="text" 
                    name="Contacto-nombre" 
                    placeholder='Nombre del nuevo contacto'
                />
                <h2>Apellido:</h2>
                <input
                    type="text" 
                    name="Contacto-apellido" 
                    placeholder='Apellido del nuevo contacto'
                />
                  <h2>Email:</h2>
                <input
                    type="text" 
                    name="Contacto-email" 
                    placeholder='Email del nuevo contacto'
                />
                  <h2>Telefono:</h2>
                <input
                    type="text" 
                    name="Contacto-telefono" 
                    placeholder='Telefono del nuevo contacto'
                />
                  <h2>Tipo:</h2>
                <input
                    type="text" 
                    name="Contacto-tipo" 
                    placeholder='Tipo del nuevo contacto'
                />
                  <h2>Foto:</h2>
                <input
                    type="text" 
                    name="Contacto-foto" 
                    placeholder='Foto del nuevo contacto'
                />
                  <h2>Id:</h2>
                <input
                    type="text" 
                    name="Contacto-id" 
                    placeholder='Id del nuevo contacto'
                />
                
                <input 
                    type="submit" 
                    className="button-default" 
                    value="ENVIAR" 
                />

            </form>
        </div>
    </>
    )
}

export { FormContactoNuevo };