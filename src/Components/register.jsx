import { useState } from "react";
import Input from "./Form/input";
import InputPassword from "./Form/inputPassword"

function Register(){
    const [user, setUser] = useState({})

    const changeInput = (event) => {
        let clonedUser = { ...user};
        clonedUser[event.target.name] = event.target.value;
        setUser(clonedUser);
    }

    const submit = (event) =>{
        event.preventDefault();
        event.stopPropagation();
        let alertMessage = "Los datos del formulario son:";
        for(let attr of Object.keys(user)){
            alertMessage += `\n${attr}: ${user[attr]}` 
        }
        alert(alertMessage);
        return false;
    }

    return (
        <>
            <h2>Registrate</h2>
            <form onSubmit={submit}>
                <Input inputName="firstname" id="firstname" translation={"Nombre"} onChange={changeInput} value={user?.firstname}/>
                <Input inputName="lastname" id="lastname" translation={"Apellido"} onChange={changeInput} value={user?.lastname}/>
                <Input inputName="email" id="email" translation={"E-mail"} onChange={changeInput} value={user?.email}/>
                <Input inputName="phone" id="phone" translation={"Teléfono"} onChange={changeInput} value={user?.phone}/>
                <InputPassword inputName="password" id="password" translation={"Contraseña"} onChange={changeInput} value={user?.password}/>
                <InputPassword inputName="confirmPassword" id="confirmPassword" translation={"Confirmar contraseña"} onChange={changeInput} value={user?.confirmPassword}/>
                <input type="submit"/>
            </form>
        </>
    )
}

export default Register