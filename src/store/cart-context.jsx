import { createContext, useEffect, useState } from "react";
import { DUMMY_PRODUCTS } from "../Dummy_data";

export const cartContext = createContext({
    products: [],
    addProduct: () => { },
    removeProduct: () => { }
});

export default function CartContextProvider({ children }) {
    const existingItems = sessionStorage.getItem('cart');
    const [cart, setCart] = useState(existingItems ? JSON.parse(existingItems).cart : []);
    useEffect(() => {
        sessionStorage.setItem('cart', JSON.stringify({ cart }));
    }, [cart]);

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
    const removeProduct = (item) => {
        const itemIndex = cart.findIndex(product => product.sareeCode == item.sareeCode);
        if (itemIndex != -1) { //if item exist then decrease the quantity by 1 and replace the item at existing index
            const cartCopy = [...cart];
            const item = cartCopy.at(itemIndex);
            if (item.quantity > 1) {
                item.quantity = item.quantity - 1;
                cartCopy[itemIndex] = item
            } else {
                cartCopy.splice(itemIndex, 1);
            }
            setCart(cartCopy);
        }

    }

    const ctxValue = {
        products: cart,
        addProduct: addProduct,
        removeProduct: removeProduct
    }

    return <cartContext.Provider value={ctxValue}>
        {children}
    </cartContext.Provider>
}