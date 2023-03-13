import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
import foto from "../../Recursos/cuadrado.png";


function ItemCatalogo(props){

    let direccion = props.texto.replace(' ', '')


    return(
        <Card style={{ width: '16rem', height:'17rem'}} className="shadow  mx-auto " border="dark">
            <Card.Img variant="top" src={foto}  alt="imagen" style={{height:'10rem'}}/>
            <Card.Body className="pb-1">
                <Link to={`/${direccion}`} className="">
                    <Button style={estiloBotonDireccion} className="btn btn-primary m-0" size="lg">
                        {props.texto}
                    </Button>    
                </Link>
            </Card.Body>
            
        </Card>
    )

}

/* OPCION CARD CON TEXTO
        <Card style={{ width: '16rem', height:'24rem'}} className="shadow" border="dark">
            <Card.Img variant="top" src={foto}  alt="imagen" style={{height:'10rem'}}/>
            <Card.Body className="pb-1">
                <Card.Text style={{ width: '14rem', height:'6rem'}}>
                    prueba esto es una prueba
                </Card.Text>
                <Link to={`/${direccion}`} className="">
                    <Button style={estiloBotonDireccion} className="btn btn-primary m-0" size="lg">
                        {props.texto}
                    </Button>    
                </Link>
            </Card.Body>
            
        </Card>
*/

let estiloBotonDireccion = {
    backgroundColor : "grey",
    borderColor : "black",
    width: '14rem', 
    height:'5rem'
}




export default ItemCatalogo