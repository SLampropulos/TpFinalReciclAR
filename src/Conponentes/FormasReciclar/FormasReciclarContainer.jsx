import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

import ItemFormaReciclar from "./ItemFormaReciclar";

function FormasReciclarContainer(){

    let formasAUX=[1,2,3,4,5];


    return(
        <>
            <h2 className="text-start mx-5 my-4">
                Formas de reciclar
            </h2>    
            <Row className="justify-content-around mx-5 px-5">
                {formasAUX.map(forma=>
                    <Col className="col-12 col-md-5  col-xl-4 mx-auto">
                        <ItemFormaReciclar titulo={forma} resumen=""/>
                    </Col>    
                )}

            </Row>
            
        </>
    )



}







export default FormasReciclarContainer;