import './index.css'

function ListaTarjeta({ children }) {
    return (
        <>
            <div className='container-list'>

                {children}

            </div>
        </>
    );
}

export { ListaTarjeta };