import { addProducts } from "../../firebase/Products";

const AddDefaultProducts = () => {
    addProducts()
    return (
        <div>Agregando los productos</div>
    )
}

export { 
    AddDefaultProducts
}