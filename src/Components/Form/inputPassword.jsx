/* eslint-disable react/prop-types */
import { useState } from "react";

function InputPassword({inputName, id, translation, onChange, value = ""}){
    let [type, setType] = useState("password")
    return (
        <div>
            <label htmlFor={id}>{translation || inputName }</label>
            <input style={ {marginBottom:"0"} }  type={type} name={inputName} id={id} onChange={onChange} value={value}/>
            <span style={ {fontSize:"0.75rem",marginBottom:"1rem"} } onClick={()=> setType(type==="password" ? "text" : "password")}>
                {type === "password" ? "Mostrar"  : "Ocultar"} {(translation || inputName).toLowerCase()}
            </span>
        </div>
    );
}

export default InputPassword;