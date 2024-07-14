import { db } from "./firebaseconfig";
import { addDoc, collection, getDocs, limit, query, where, doc, getDoc } from "firebase/firestore/lite";
const collectionName = "products";
const useCollectionRef = collection(db, collectionName);

const addProduct = (product) => {
    return addDoc( useCollectionRef, {...product});
}

const getProducts = async () => {
    let productsQuery = query(useCollectionRef, limit(10))
    const productsSnapshot = await getDocs(productsQuery);
    return productsSnapshot.docs.map((doc) => ({  id:doc.id, ...doc.data()}) );
} 

const getProductById = async ( id ) => {
    let productQuery = doc(db,collectionName, id)
    const productSnapshot = await getDoc(productQuery);
    console.log(productSnapshot, id);
    return ({ id:productSnapshot.id, ...productSnapshot.data()});
}

const addProducts = async () => {
    let products =[
        {
            "name": "Smartphone XYZ",
            "description": "Un smartphone de última generación con pantalla AMOLED y batería de larga duración.",
            "price": 699.99,
            "caracteristics": [
                {"id": 1, "name": "Pantalla AMOLED"},
                {"id": 2, "name": "Batería 5000mAh"},
                {"id": 3, "name": "Cámara de 108MP"}
            ],
            "category": "Electrónica",
            "sku": "asopodgn"
        },
        {
            "name": "Auriculares Bluetooth",
            "description": "Auriculares inalámbricos con cancelación de ruido y sonido de alta calidad.",
            "price": 199.99,
            "caracteristics": [
                {"id": 4, "name": "Cancelación de ruido"},
                {"id": 5, "name": "Conexión Bluetooth 5.0"},
                {"id": 6, "name": "Autonomía de 20 horas"}
            ],
            "category": "Audio",
            "sku": "mreormgnw"
        },
        {
            "name": "Laptop UltraSlim",
            "description": "Una laptop ligera y potente con procesador Intel i7 y 16GB de RAM.",
            "price": 1299.99,
            "caracteristics": [
                {"id": 7, "name": "Procesador Intel i7"},
                {"id": 8, "name": "16GB RAM"},
                {"id": 9, "name": "SSD de 512GB"}
            ],
            "category": "Computadoras",
            "sku": "mainigmoiweng"
        },
        {
            "name": "Smart TV 55\"",
            "description": "Televisor inteligente 4K UHD con soporte para HDR y aplicaciones integradas.",
            "price": 599.99,
            "caracteristics": [
                {"id": 10, "name": "Resolución 4K UHD"},
                {"id": 11, "name": "Soporte HDR"},
                {"id": 12, "name": "Aplicaciones integradas"}
            ],
            "category": "Electrónica",
            "sku": "ansidgn2313"
        },
        {
            "name": "Tablet Pro",
            "description": "Tablet de alto rendimiento con pantalla de 11 pulgadas y lápiz óptico incluido.",
            "price": 499.99,
            "caracteristics": [
                {"id": 13, "name": "Pantalla de 11 pulgadas"},
                {"id": 14, "name": "Lápiz óptico incluido"},
                {"id": 15, "name": "128GB de almacenamiento"}
            ],
            "category": "Tablets",
            "sku": "manirng214"
        },
        {
            "name": "Smartwatch Fitness",
            "description": "Reloj inteligente con seguimiento de actividad física y monitorización del sueño.",
            "price": 149.99,
            "caracteristics": [
                {"id": 16, "name": "Seguimiento de actividad"},
                {"id": 17, "name": "Monitorización del sueño"},
                {"id": 18, "name": "Resistente al agua"}
            ],
            "category": "Accesorios",
            "sku": "gioarneg65d"
        },
        {
            "name": "Cámara Reflex",
            "description": "Cámara digital de alta resolución con lente intercambiable y grabación en 4K.",
            "price": 899.99,
            "caracteristics": [
                {"id": 19, "name": "Lente intercambiable"},
                {"id": 20, "name": "Grabación en 4K"},
                {"id": 21, "name": "24MP de resolución"}
            ],
            "category": "Fotografía",
            "sku": "anign21"
        },
        {
            "name": "Consola de Videojuegos",
            "description": "Consola de última generación con gráficos 4K y amplio catálogo de juegos.",
            "price": 499.99,
            "caracteristics": [
                {"id": 10, "name": "Gráficos 4K"},
                {"id": 22, "name": "Catálogo de juegos amplio"},
                {"id": 23, "name": "Almacenamiento de 1TB"}
            ],
            "category": "Videojuegos",
            "sku": "omtnng2"
        },
        {
            "name": "Bicicleta Eléctrica",
            "description": "Bicicleta con asistencia eléctrica, ideal para desplazamientos urbanos.",
            "price": 1099.99,
            "caracteristics": [
                {"id": 24, "name": "Asistencia eléctrica"},
                {"id": 25, "name": "Autonomía de 50 km"},
                {"id": 26, "name": "Frenos de disco"}
            ],
            "category": "Deportes",
            "sku": "gnieorngob23"
        },
        {
            "name": "Cafetera Automática",
            "description": "Cafetera con molinillo integrado y diferentes opciones de preparación.",
            "price": 299.99,
            "caracteristics": [
                {"id": 27, "name": "Molinillo integrado"},
                {"id": 28, "name": "Preparación automática"},
                {"id": 29, "name": "Depósito de agua de 1.5L"}
            ],
            "category": "Hogar",
            "sku": "nairong24"
        }
    ]
    
    products.forEach(async (ele) => {
        console.log(ele)
       await addDoc(useCollectionRef, {...ele}).then(console.log).catch(err => console.log("Error al agregar los productos", err));
    })
    return "done";
}

export {
    addProduct,
    getProducts,
    getProductById,
    addProducts
}
