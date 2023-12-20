import React from 'react'
import classes from './Product.module.css'
import { formatter } from '../../Utils/Helpers'

function Product({ image, productName, sareeCode, price, soldOut }) {
  return (
    <div className={classes.product}>
      <img src={image} alt='saree-image' />
      <div className={classes.productDescription}>
        <span className={classes.productTitle}>{productName}</span><br />
        <small className={soldOut ? classes.soldOut : undefined}>Price: {formatter.format(price)} (All Inclusive)</small>
        {soldOut && <small style={{ marginLeft: ' 1%' }}>Sold Out</small>}
      </div>
    </div >
  )
}

export default Product;
