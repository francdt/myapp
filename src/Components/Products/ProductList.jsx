import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import Title from "../Title";
function ProductList(){
    const [products, setProducts] = useState(null);
    const title = Title;
    useEffect( () => {
        reloadProducts();
    } ,[])

    const reloadProducts = () => {
        setTimeout(function(){
            // Simulando como si no se hubiesen encontrado productos
            setProducts([])
            setTimeout(function (){
                setProducts(null)
                fetch("/products.json").then( (res) =>{ if(res.ok){
                    res.json()
                    .then( data => {
                        setProducts(data);
                    })
                    .catch(console.error);
                } } ).catch(console.error)
            }, 1000)
        }, 500)
    }

    title("Ver productos");

    return (<>
        <h2>Productos principales</h2><button onClick={reloadProducts}>Recargar productos</button>
        { !products ?
            ( <p> Cargando productos</p> ) 
            : ( !products.length ? 
                ( <p>No se encontraron productos</p> ):
                ( products.map( product => {
                    return <ProductCard key={product.id} {...product} />
                }))
            )
        }
    </>)
}

export default ProductList;