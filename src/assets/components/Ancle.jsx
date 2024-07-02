import React from 'react'


//Componente personalizado de ancla
function Ancle({ children, href }) {
    return (
        <a className='px-4 text-primary text-lg flex' href={href}>
            {children}
        </a>
    )
}

export default Ancle