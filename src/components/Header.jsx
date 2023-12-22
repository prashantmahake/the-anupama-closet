import React, { useContext, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Header.module.css'
import { APP_TITLE, ROUTE_DEFINATION } from '../Utils/Constants'
import { Badge, Button, IconButton } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AlertDialogSlide from './Cart'
import { cartContext } from '../store/cart-context'
import logo from '../closetLogo.jpeg'

function Header() {
    const cartCtx = useContext(cartContext)
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const getCartQuantity = () => {
        const cartQuantity = cartCtx.products.reduce((sum, product) => sum + product.quantity, 0);
        return cartQuantity;
    }

    return (
        <header className={classes.headerWrapper}>
            <div className={classes.applogo}>
                <img src={logo} alt='Logo' height={'90%'}></img>
            </div>
            <div className={classes.appName}>
                {APP_TITLE}
            </div>
            <div className={classes.headerButtons}>
                <NavLink to='/' className={({ isActive }) => isActive ? classes.active : undefined}>Home</NavLink>
                <NavLink to={`/${ROUTE_DEFINATION.OXIDIZED_JWELLERY}`} className={({ isActive }) => isActive ? classes.active : undefined}>Oxidized Jwellery</NavLink>
                <NavLink to={`/${ROUTE_DEFINATION.HANDLOOM_SAREES}`} className={({ isActive }) => isActive ? classes.active : undefined}>Sarees</NavLink>
                <NavLink to={`/${ROUTE_DEFINATION.DESIGNER_OUTFITS}`} className={({ isActive }) => isActive ? classes.active : undefined}>Designer Outfits</NavLink>
                <NavLink to={`/${ROUTE_DEFINATION.HANDMADE_JWELLERY}`} className={({ isActive }) => isActive ? classes.active : undefined}>Handmade Jwellery</NavLink>
                <IconButton onClick={handleClickOpen}>
                    <Badge color="secondary" badgeContent={getCartQuantity()}>
                        <ShoppingCartIcon sx={{ color: 'black' }} />{" "}
                    </Badge>
                </IconButton>
            </div>
            {open && <AlertDialogSlide open={open} handleClose={handleClose} />}
        </header >
    )
}

export default Header
