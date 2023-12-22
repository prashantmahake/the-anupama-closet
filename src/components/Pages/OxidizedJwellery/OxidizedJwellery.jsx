import React from 'react'
import { DUMMY_OXIDIZED_JWELLERY } from '../../../Dummy_data'
import Product from '../../Product/Product';
import classes from './OxidizedJwellery.module.css'

const products = DUMMY_OXIDIZED_JWELLERY;

function OxidizedJwellery() {
    return (
        <div className={classes.designerDressesWrapper}>
            {
                products.map(product =>
                    <Product
                        key={product.sareeCode}
                        image={product.img}
                        productName={product.productName}
                        sareeCode={product.sareeCode}
                        price={product.price}
                        soldOut={product.soldOut}
                        quantity={product.quantity}
                    />
                )
            }
        </div>
    )
}

export default OxidizedJwellery
