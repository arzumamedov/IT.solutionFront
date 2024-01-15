import React, { useContext } from 'react'
import { BasketContext } from '../../context/BasketContext'

function Basketpage() {
    const { basket } = useContext(BasketContext)
    return (
        <>
            <div className='main'>
                {basket.map((item) => (
                    <div className='basket'>
                        <div><img src={item.img} alt="" /></div>
                        <div>{item.name}</div>
                        <div>{item.category}</div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Basketpage