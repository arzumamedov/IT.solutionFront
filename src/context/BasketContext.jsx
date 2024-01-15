import React, { createContext, useState } from 'react'
export const BasketContext = createContext()

function BasketProvider({ children }) {
    const [basket, setBasket] = useState([])

    function addBasket(item) {
        const index = basket.findIndex((x) => x._id === item._id)
        if (index === -1) {
            return setBasket([...basket, { ...item, count: 1 }])
            
        }
        basket[index].count++
        setBasket([...basket])
    }

    return (
        <>
            <BasketContext.Provider value={{ basket, addBasket }}>{children}</BasketContext.Provider>
        </>
    )
}

export default BasketProvider