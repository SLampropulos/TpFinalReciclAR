import Card from "react-bootstrap/Card";


function ItemNoticias (){

    return(
        <Card className="shadow px-3 py-2 mx-auto text-start" backgroundColor="grey" style={{width:"30rem"}}>
            <Card.Title >
                TITULO
            </Card.Title>
            <Card.Text style={{fontSize:"12px"}}>
                TEXTO DE LA NOTICIA O NOVEDADES.
            </Card.Text>
        </Card>
    )


}





export default ItemNoticias