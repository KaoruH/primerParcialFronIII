import React from 'react'

const Card = ({formValues}) => {
    return (
        <div className='ard'>
            <h2>Pedido</h2>
            <h4>Nombre: {formValues.userName}</h4>
            <h4>Email: {formValues.userEmail}</h4>
            <h4>Moño: {formValues.bowName}</h4>
            <h4>Tamaño: {formValues.bowSize}</h4>
            <h4>Color: {formValues.bowColor}</h4>
        </div>
    )
}

export default Card