
import { useState, useEffect } from "react";
import { useParams} from "react-router-dom";
import ProductDetail from "./ProductDetail";
import Title from "../Title";
import { getProductById } from "../../firebase/Products";
function ProductDetailView(){
    const [product, setProduct] = useState(null);
    const params = useParams();
    const title = Title

    useEffect( () => {
        loadProduct();
    } , [])

    const buyProduct = () => {
        let confirmBuyProduct = confirm(`Estas seguro que quieres comprar el producto ${product.name}`);
        if (confirmBuyProduct){
            alert("Producto comprado")
        }
    }

    const loadProduct = () => {
        // Simulando como si no se hubiesen encontrado productos
        setProduct(null);
        setTimeout(function (){

            getProductById(params.productId)
            .then( data => {
                console.log(data);
                let filteredProduct = data === undefined ? {} : data
                setProduct(filteredProduct)
            })
            .catch((err) => { 
                console.error(err);
                setProduct({}) 
            })
        }, 1000 )
    }

    let productTitle = product && product.id ? `Producto - ${product.name} - #${product.id}` : `Producto - `;  
    title(productTitle);

    return (<>
        <h2>Detalles del producto</h2><button onClick={loadProduct}>Recargar producto</button>
        { !product ?
            ( <p> Cargando detalles del producto</p> ) 
            : ( !product.id ? 
                ( <p>No se encontro el producto </p> ):
                    <ProductDetail  product={product}  buyProduct={buyProduct} />
            )
        }
    </>)
}

export default ProductDetailView;