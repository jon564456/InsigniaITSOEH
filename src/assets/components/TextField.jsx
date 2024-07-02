import React, { useState } from 'react'
//componente personalizado de textfield
function TextField(props) {

  //hook para obtener el texto del input, se inicializa en blanco el campo
  const [text, setText] = useState('');
  const [mouseOver, setMouseOver] = useState(false);
  //cambiamos el estado del hook 
  function handleText(value) {
    setText(value)
  }
  //cambiamos el estado del hook
  const handleMouseOver = () => {
    setMouseOver(!mouseOver)
  }

  return (
    <div className='flex flex-col '
    >
      <label className='text-primary text-sm p-2'>
        {mouseOver && mouseOver ? "" : props.etiqueta}
      </label>
      <input className='p-2'
        type={props.type ? props.type : "text"}
        placeholder={mouseOver && mouseOver ? props.etiqueta : ""}
        onChange={handleText}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOver}
        value={props.value}
      />
    </div>
  )
}

export default TextField