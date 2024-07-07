import {  NavLink } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../Context/userContext";
function Header (){
    const { user } = useContext(UserContext);
    return (<header>
        <nav>
            <ul>
                {!user ?  withoutSession() : withSession() }
            </ul>
        </nav>
    </header>)
}

function withSession(){
    return (
        <>
            {dashboard()}
            <li className="float-right"><NavLink to="/logout">Cerrar sesión</NavLink></li>
        </>
    )
}

function withoutSession(){
    return (
        <>
            {dashboard()}
            {location.pathname !== "/login" ? 
                (<li className="float-right"><NavLink to="/login">Iniciar sesión</NavLink></li>):
            ""}
        </>
    )
}

function dashboard(){
    return <li><NavLink to="/products">Principal</NavLink></li>
}

export default Header;