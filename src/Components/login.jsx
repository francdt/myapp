import { useState } from "react";
import { NavLink } from "react-router-dom";
import Input from "./Form/input";
import InputPassword from "./Form/inputPassword"
import Title from "./Title";

function Login(){
    const [user, setUser] = useState({})
    const title = Title

    const changeInput = (event) => {
        let clonedUser = { ...user};
        clonedUser[event.target.name] = event.target.value;
        setUser(clonedUser);
    }

    const fetchAccount = () => {
        if (user.email && user.password){
            fetch("/usuarios.json").then( (res) =>{ if(res.ok){
                res.json()
                .then( data => {
                    let registeredUser = data.find( ele => (ele.password == user.password && ele.email == user.email));
                    if (registeredUser){
                        alert("Hacer el login para el usuario");
                    } else {
                        alert("Datos invalidos");
                    }
                })
                .catch((err) => { 
                    console.error(err);
                })
            }}).catch((err) => { 
                console.error(err) ; 
            })
        }
    }

    const submit = (event) =>{
        event.preventDefault();
        event.stopPropagation();
        let alertMessage = "Los datos para ingreas son:";
        if (Object.keys(user).length) {
           fetchAccount();
        } else {
            alertMessage = "No se ingresaron e-mail, ni contraseña."
        }
        alert(alertMessage);
        return false;
    }

    title("Iniciar sesión");

    return (
        <>
            <h2>Ingresar</h2>
            <form onSubmit={submit}>
                <Input inputName="email" id="email" translation={"E-mail"} onChange={changeInput} value={user?.email}/>
                <InputPassword inputName="password" id="password" translation={"Contraseña"} onChange={changeInput} value={user?.password}/>
                <input type="submit"/>
            </form>
            <p>o <NavLink to={"/register"}>registrarse</NavLink></p>
        </>
    )
}

export default Login