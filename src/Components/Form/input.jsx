/* eslint-disable react/prop-types */

function Input({inputName, id, translation, onChange, value = ""}){
    return (
        <div>
            <label htmlFor={id}>{translation || inputName }</label>
            <input type="text" name={inputName} id={id} onChange={onChange} value={value}/>
        </div>
    );
}

export default Input;