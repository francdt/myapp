/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"

function ProductCard({id, name, description, price}){
    return (<div className={"card info"}>
        <p>{name} <small>#{id}</small></p>
        <p>Descripción: {description}</p>
        <p>Precio: ${price}</p>
        <Link to={`/products/${id}`}>Ver detalles</Link>
    </div>)
}

export default ProductCard