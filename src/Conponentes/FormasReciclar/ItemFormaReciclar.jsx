import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/esm/Button";


import foto from "../../Recursos/cuadrado.png";

function ItemFormaReciclar(){

    return(
        <Card style={{ width: 'auto', height:'20rem'}} className=" m-2 mx-auto shadow" >
            <Card.Img variant="top" src={foto}  alt="imagen" style={{height:'10rem'}}/>
            <Card.Body>
                <Card.Text style={cardText} className="justify-text-start" >
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi laudantium necessitatibus ad ducimus nobis blanditiis
                </Card.Text>

                <Button 
                style={botonLink}
                onMouseEnter={{}} 
                onMouseLeave={botonLink}>
                    Mas Info

                </Button>

            </Card.Body>
        </Card>
    )
}

let cardText={
    fontWeight: "300",
    fontSize: "14px"

}
let botonLink = {
    backgroundColor : "grey",
    borderColor : "black",
    width: '10rem', 
    height:'3rem'
}



export default ItemFormaReciclar