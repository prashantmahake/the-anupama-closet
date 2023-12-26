import React, { useContext } from 'react';
import classes from './CartItem.module.css'
import { IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { cartContext } from '../../store/cart-context';
import { formatter } from '../../Utils/Helpers';
function CartItem({ item }) {
    const cartCtx = useContext(cartContext);
    const increaseQuantity = () => {
        cartCtx.addProduct(item)
    }
    const decreaseQuantity = () => {
        cartCtx.removeProduct(item)
    }
    return (
        <div className={classes.cartItem}>
            <div className={classes.cartItemDetails}>
                <span className={classes.productName}>{item.productName}</span><br />
                <span>Price: {formatter.format(item.price)}</span>
            </div>
            <div className={classes.cartItemQuantity}>
                <IconButton
                    aria-label="increment"
                    onClick={increaseQuantity}
                >
                    <AddIcon />
                </IconButton>
                <input className={classes.productQuantity} value={item.quantity} readOnly></input>
                <IconButton
                    aria-label="decrement"
                    onClick={decreaseQuantity}
                >
                    <RemoveIcon />
                </IconButton>
            </div>
        </div>
    )
}

export default CartItem
