import BotonDireccionador from "../Botones/BotonDireccionador";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ItemCatalogo from "./ItemCatalogo";
import ItemNoticias from "./ItemNoticias";




function InicioContainer(){

    let botones = [
        "Puntos Verdes",
        "Como Reciclar",
        "ONG y Asociaciones",
        "Compost",
        "Formas de reutilizacion"
    ]

    let noticias = [
        "noticia1",
        "noticia2"
    ]

    return(
        <>
        <h2 className="text-start mx-5 my-4">
            Inicio
        </h2>

        <Row  className=" justify-content-around center m-2 p-0">
            {botones.map(boton =>
            <Col className="col-12 col-md-5  col-xl-2 my-3 start p-0">
                <ItemCatalogo texto={boton} />
            </Col>  
            )}
        </Row>
        
        <h3 className="my-5">
            Noticias
        </h3>
        <Row  className=" justify-content-md-center m-2 p-0 mx-auto">
            {noticias.map(noticia =>
            <Col className="col-12 col-md-6 col-xl-4 my-3 p-0">
                <ItemNoticias texto={noticia} />
            </Col>  
            )}
        </Row>
        

        </>
    );

}



export default InicioContainer