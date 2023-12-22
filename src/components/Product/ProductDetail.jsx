import React from 'react'
import { useParams } from 'react-router-dom'

function ProductDetail() {
    const params = useParams();
    return (
        <div>
            product detail; {params.productID}
        </div>
    )
}

export default ProductDetail
