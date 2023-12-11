import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Header.module.css'

function Header() {
    return (
        <header className={classes.headerWrapper}>
            <div className={classes.applogo}>
                <img src='' alt='Logo'></img>
            </div>
            <div className={classes.appName}>
                The Anupama Closet
            </div>
            <div className={classes.headerButtons}>
                <NavLink to='/'>Home</NavLink>
                <NavLink to="/designer-dresses">Designer Dresses</NavLink>
                <NavLink to="/designer-dresses">Handmade Jwellery</NavLink>
                <NavLink to="/designer-dresses">Oxidized Jwellery</NavLink>
                <NavLink to="/designer-dresses">Sarees</NavLink>

            </div>
        </header >
    )
}

export default Header
