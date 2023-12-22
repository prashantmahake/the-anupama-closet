import React from 'react'
import classes from './ProductCategory.module.css'
import { NavLink } from 'react-router-dom'

function ProductCategory({ categoryTitle, image, routeURL }) {
    return (
        <div className={classes.homePageProductWrapper}>
            <div className={classes.homePageProductImageWrapper}>
                <NavLink to={`/${routeURL}`}>
                    <div className={`${classes.homePageProduct} ${classes[image]}`} />
                </NavLink>
            </div>
            <div className={classes.homePageProductName}>
                <p >{categoryTitle}</p>
            </div>
        </div>
    )
}

export default ProductCategory
