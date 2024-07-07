import { NavLink } from "react-router-dom"
function NoMatch(){
    return (<>
        <p>No se encontro lo buscado</p>
        <NavLink to="/dashboard">Principal</NavLink>
    </>)
}

export default NoMatch