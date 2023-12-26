import React, { useCallback, forwardRef } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import { cartContext } from '../../store/cart-context';
import CartItem from './CartItem';
import classes from './Cart.module.css'
import { formatter } from '../../Utils/Helpers';

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide({ open, handleClose }) {
    const cartCtx = React.useContext(cartContext);

    const emptyCart = useCallback(() => {
        return <div className={classes.emptyCart}>
            <span>You currently do not have any items in the cart</span>
        </div>
    }, [])

    const getcartTotal = () => {
        const cartItems = cartCtx.products;
        const cartTotal = cartItems.reduce((sum, product) => sum + product.price * product.quantity, 0);
        return cartTotal;
    }

    return (
        <React.Fragment>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
                fullWidth
            >
                <DialogTitle >
                    <span className={classes.cartTitle}>Cart</span>
                    <IconButton
                        aria-label="close"
                        onClick={handleClose}
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent>
                    {
                        cartCtx.products.length === 0 ? emptyCart() :
                            (cartCtx.products.map((product) => <CartItem key={product.sareeCode} item={product} />))
                    }

                    {cartCtx.products.length !== 0 && <div className={classes.cartTotal}>
                        <b> Cart Total:<span>{formatter.format(getcartTotal())}</span></b>
                    </div>}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
