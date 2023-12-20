import { createContext, useState } from "react";

export const cartContext = createContext({
    products: [],
    addProduct: () => { }
});

export default function CartContextProvider({ children }) {
    const [cart, setCart] = useState([])
    const addProduct = (item) => {
        const itemIndex = cart.findIndex(product => product.sareeCode == item.sareeCode);
        if (itemIndex != -1) { //if item exist then increase the quantity by 1 and replace the item at existing index
            const cartCopy = [...cart];
            const item = cartCopy.at(itemIndex);
            item.quantity = item.quantity + 1;
            cartCopy[itemIndex] = item
            setCart(cartCopy);
        } else {
            item.quantity = item.quantity + 1;
            setCart(prevCart => [...prevCart, item])
        }
    }
    const ctxValue = {
        products: cart,
        addProduct: addProduct
    }

    return <cartContext.Provider value={ctxValue}>
        {children}
    </cartContext.Provider>
}