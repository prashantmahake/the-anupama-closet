import React from 'react'
import Product from '../../Product/Product'
import cottonSaree from '../../../cotton.jpeg'
import classes from './DesignerDresses.module.css'
import { DUMMY_PRODUCTS } from '../../../Dummy_data'

const products = DUMMY_PRODUCTS;

function DesignerDresses() {
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

export default DesignerDresses
