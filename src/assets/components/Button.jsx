import React from 'react'

//Componente personalizado de un boton

function Button(props) {
    return (
        <button
            className=' bg-primary p-4 rounded-lg text-white'
            onClick={props.onClick}
            type={props.type ? props.type : "button"}>
            {props.value}
        </button>
    )
}

export default Button