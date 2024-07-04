import { children, createContext, useState } from "react";
import PropTypes from "prop-types"

export const StockContext = createContext({})

StockContextProvider.propTypes ={
    children: PropTypes.node
}

// Item
// {name, description, quantify, price, category, createdAt}
export function StockContextProvider({children}) {
    const [items, setItems] = useState(() => {
        const storedItems = localStorage.getItem('obc-react-stock')
        if(!storedItems) return [] 
        const items = JSON.parse(storedItems)
        items.forEach((item) => {
            item.createdAt = new Date(item.createdAt)
            
        });
        return items
    })

    const addItem = (item) => {
        setItems(currentState => {
            const updateItems = [item, ...currentState]
            localStorage.setItem('obc-react-stock', JSON.stringify(updateItems))
            return updateItems
        })
    }

    const deleteItem = (itemId) => {
        setItems(currentState => {
        const updateItems = currentState.filter(item => item.id !== itemId)
        localStorage.setItem('obc-react-stock' , JSON.stringify(updateItems))
        return updateItems
        })
    }

    const stock = {
        items,
        addItem,
        deleteItem
    }

    return (
        <StockContext.Provider value={stock}>
            {children}
        </StockContext.Provider>
    )
}