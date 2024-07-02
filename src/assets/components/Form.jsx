import React from 'react'

//Componente personalizado de formulario
function Form({children}, props) {
  return (
        <form action={props.action} method={props.method}>
            {children}
        </form>
  )
}

export default Form