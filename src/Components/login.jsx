import { NavLink, useNavigate} from "react-router-dom";
import { useState } from "react"; 
import Input from "./Form/input";
import InputPassword from "./Form/inputPassword"
import Title from "./Title";
import { auth } from "../firebase/firebaseconfig";
import { signInWithEmailAndPassword } from "firebase/auth";

function Login(){
    const [loginUser, setUser] = useState({})
    const title = Title
    const navigate = useNavigate();

    const changeInput = (event) => {
        let clonedUser = { ...loginUser};
        clonedUser[event.target.name] = event.target.value;
        setUser(clonedUser);
    }

    const fetchAccount = () => {
        if (loginUser.email && loginUser.password){
            signInWithEmailAndPassword(auth, loginUser.email, loginUser.password).then(
                (data)=> {
                    console.log("datos correctos", data);
                    
                    navigate("/");
                }
            ).catch(err => {
                console.log("Erro al querer iniciar sessión: ", err);
                alert(err.message);
            })
        }
    }

    const submit = (event) =>{
        event.preventDefault();
        event.stopPropagation();
        if (Object.keys(loginUser).length) {
           fetchAccount();
        } else {
            alert( "No se ingresaron e-mail, ni contraseña.")
        }
        return false;
    }

    title("Iniciar sesión");

    return (
        <>
            <h2>Ingresar</h2>
            <form onSubmit={submit}>
                <Input inputName="email" id="email" translation={"E-mail"} onChange={changeInput} value={loginUser?.email}/>
                <InputPassword inputName="password" id="password" translation={"Contraseña"} onChange={changeInput} value={loginUser?.password}/>
                <input type="submit"/>
            </form>
            <p>o <NavLink to={"/register"}>registrarse</NavLink></p>
        </>
    )
}

export default Login