import React from 'react'
import { DUMMY_OXIDIZED_JWELLERY } from '../../../Dummy_data'
import Product from '../../Product/Product';
import classes from './OxidizedJwellery.module.css'
import { useLoaderData } from 'react-router-dom';


function OxidizedJwellery() {
    const API_response = useLoaderData();
    const products = JSON.parse(API_response).data;
    return (
        <div className={classes.designerDressesWrapper}>
            {
                products.map(product =>
                    <Product
                        key={product.productCode}
                        image={product.img}
                        productName={product.productName}
                        productCode={product.productCode}
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

export function oxidozedJwelleryLoader() {
    const products = new Response(JSON.stringify({ data: DUMMY_OXIDIZED_JWELLERY }));
    return products;
}
