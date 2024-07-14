/* eslint-disable react/prop-types */

function ProductDetail({product, buyProduct = ()=>{}}){
    return (<div className={"card detail"} id={product.id}>
        <p> <strong>{product.name}</strong> <small>#{product.id}</small></p>
        <p>{product.category}</p>
        <p>Descripción: {product.description}</p>
        { (product.caracteristics.length > 0 ? 
            (<>
                <h4>Caracteristicas:</h4>
                <ul>
                { product.caracteristics.map( caracteristic => {
                    return ( <li key={caracteristic.id}>{caracteristic.name}</li> )
                })}
                </ul> 
            </>)
        : <p>Sin caracteristicas escenciales</p>) }
        <p>Precio: ${product.price}</p>
        <p>SKU: {product.sku}</p>
        <p><button onClick={buyProduct}>Comprar</button></p>
    </div>)
}

export default ProductDetail