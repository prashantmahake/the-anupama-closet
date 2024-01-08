import React, { useContext, useEffect, useState } from 'react'
import classes from './Product.module.css'
import { formatter } from '../../Utils/Helpers'
import { Button, IconButton, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { cartContext } from '../../store/cart-context';
import { NavLink } from 'react-router-dom';
import { ROUTE_DEFINATION } from '../../Utils/Constants';
function Product({ image, productName, productCode, price, soldOut, quantity }) {
  const cartCtx = useContext(cartContext);
  const [productCount, setProductCount] = useState(0);

  const addToCart = (product) => {
    cartCtx.addProduct(product)
  }

  const incrementProductCount = () => {
    setProductCount(prevCount => prevCount + 1);
  }

  const decrementProductCount = () => {
    setProductCount(prevCount => prevCount - 1);
  }

  const changeProductQuantity = () => {
    return (
      <>
        <IconButton
          aria-label="increment"
          onClick={incrementProductCount}
        >
          <AddIcon />
        </IconButton>
        <input className={classes.productQuantity} value={productCount}></input>
        <IconButton
          aria-label="decrement"
          onClick={decrementProductCount}
        >
          <RemoveIcon />
        </IconButton>
      </>
    )
  }


  return (
    <div className={classes.product}>
      {/* <NavLink to={`/${ROUTE_DEFINATION.PRODUCT_DETAIL}/${productCode}`}> */}
      <img src={image} alt='saree-image' />
      {/* </NavLink> */}
      <div className={classes.productDescription}>
        <span className={classes.productTitle}>{productName}</span><br />
        <small className={soldOut ? classes.soldOut : undefined}>Price: {formatter.format(price)} (All Inclusive)</small>
        {soldOut && <small style={{ marginLeft: ' 1%' }}>Sold Out</small>}
      </div>
      {!soldOut &&
        <div className={classes.addToCartButton}>
          {
            <Button
              variant='text'
              onClick={() => { addToCart({ productName, productCode, price, quantity, image }) }}
              style={{ color: 'black' }}
            >
              Add to Cart
            </Button>
          }
        </div>}
    </div >
  )
}

export default Product;
