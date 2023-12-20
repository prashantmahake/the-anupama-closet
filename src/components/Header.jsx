import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Header.module.css'
import { APP_TITLE } from '../Utils/Constants'
import { Badge, Button, IconButton } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AlertDialogSlide from './Cart'

function Header() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <header className={classes.headerWrapper}>
            <div className={classes.applogo}>
                <img src='' alt='Logo'></img>
            </div>
            <div className={classes.appName}>
                {APP_TITLE}
            </div>
            <div className={classes.headerButtons}>
                <NavLink to='/' className={({ isActive }) => isActive ? classes.active : undefined}>Home</NavLink>
                <NavLink to="/designer-dresses" className={({ isActive }) => isActive ? classes.active : undefined}>Designer Dresses</NavLink>
                <NavLink to="/designer-dresses">Handmade Jwellery</NavLink>
                <NavLink to="/designer-dresses">Oxidized Jwellery</NavLink>
                <NavLink to="/designer-dresses">Sarees</NavLink>
                <IconButton onClick={handleClickOpen}>
                    <Badge color="secondary" badgeContent={5}>
                        <ShoppingCartIcon sx={{ color: 'black' }} />{" "}
                    </Badge>
                </IconButton>
            </div>
            {open && <AlertDialogSlide open={open} handleClose={handleClose} />}
        </header >
    )
}

export default Header
