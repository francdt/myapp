import ProductList from "./Products/ProductList";
import { UserContext } from "../Context/userContext";
import { useContext } from "react";
const Home = () => {
    const { user } = useContext(UserContext);
    return (
        <>
        { user ? 
            <h2>Bienvenido {user.firstname} {user.lastname}</h2>
        : ""}
        <ProductList></ProductList>
    </>)
}

export default Home;