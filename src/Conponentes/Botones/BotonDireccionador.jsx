import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";


function BotonDireccionador(props){

    let direccion = props.texto.replace(' ', '')



    return(
        <div className="">
            
            <Link to={`/${direccion}`} className="">
                <Button style={estiloBotonDireccion}>
                    {props.texto}
                </Button>    
            </Link>
        </div>
        
    )

    
}


let estiloBotonDireccion = {
    backgroundColor : "grey",
    borderColor : "black"
}


export default BotonDireccionador