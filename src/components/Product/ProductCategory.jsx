import React from 'react'
import classes from './ProductCategory.module.css'

function ProductCategory({ categoryTitle, image }) {
    return (
        <div className={classes.homePageProductWrapper}>
            <div className={classes.homePageProductImageWrapper}>
                <div className={`${classes.homePageProduct} ${classes[image]}`} />
            </div>
            <div className={classes.homePageProductName}>
                <p >{categoryTitle}</p>
            </div>
        </div>
    )
}

export default ProductCategory
