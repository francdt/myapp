
import { useState, useEffect } from "react";
import { useParams} from "react-router-dom";
import ProductDetail from "./ProductDetail";
function ProductDetailView(){
    const [product, setProduct] = useState(null);
    const params = useParams();

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

            fetch("/products.json").then( (res) =>{ if(res.ok){
                res.json()
                .then( data => {
                    let productId = Number(params.productId);
                    console.log(productId, params);
                    let filteredProduct = null;
                    if (productId){
                        filteredProduct = data.find( ele => { return  (Number(ele?.id || -1) === productId) });
                        filteredProduct = filteredProduct === undefined ? {} : filteredProduct
                    } 
                    setProduct(filteredProduct)
                })
                .catch((err) => { 
                    console.error(err);
                    setProduct({}) 
                })
            }}).catch((err) => { 
                console.error(err) ; 
                setProduct({})  
            })
        }, 1000)
    }

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