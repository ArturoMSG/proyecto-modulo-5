import { Button } from 'react-bootstrap';
import './index.css'

function BotonSuperior({ titulo }) {
    return (
    <>
        <Button
            variant="contained" 
            color="primary">
            {titulo}
        </Button>
    </>   
    )
}

export { BotonSuperior };