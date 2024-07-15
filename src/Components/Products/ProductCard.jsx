/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"

function ProductCard({id, name, description, price}){
    return (<div className={"card info"}>
        <p>{name} <small>#{id} (<Link to={`/products/${id}`}>Ver detalles</Link>)</small></p>
        <p>Descripción: {description}</p>
        <p>Precio: ${price}</p>
    </div>)
}

export default ProductCard