import './index.css'

function BarraBusqueda() {


    const handleForm = (event) => {
        event.preventDefault();

        const formElement = event.target;
        const formData = new FormData(formElement);

        const contactoNombre = formData.get('Contacto-name');
      

        handleParams({ contactoNombre});

    }





    return (
       

        <>
       
        <div className='container-form'>
            <form id='search-form' className='form-element' onSubmit={handleForm}>

                <h2>Nombre del Contacto: </h2>
                <input type="text" id="Contacto-name" name="Contacto-name" placeholder='Nombre del contacto a buscar' />
                               <input type="submit" className="button-default" value="Buscar" />

            </form>
        </div>
    </>
    )
}

export { BarraBusqueda };