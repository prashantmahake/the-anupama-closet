import React from 'react'
import Product from '../../Product/Product'
import cottonSaree from '../../../cotton.jpeg'
import classes from './DesignerDresses.module.css'
import { DUMMY_PRODUCTS } from '../../../Dummy_data'
import { useLoaderData, useNavigate, useNavigation } from 'react-router-dom'


function DesignerDresses() {
    const nav = useNavigation();
    const API_response = useLoaderData();
    const products = JSON.parse(API_response).data;
    if (nav.state === 'loading') {
        return <span>Loading...</span>
    }
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

export default DesignerDresses;

export function dressLoader() { // Assuming data is coming from API
    const response = new Response(JSON.stringify({ data: DUMMY_PRODUCTS }));
    return response;
}
