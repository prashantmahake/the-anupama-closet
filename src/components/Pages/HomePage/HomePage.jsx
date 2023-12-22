import React from 'react'
import classes from './HomePage.module.css'
import ProductCategory from '../../Product/ProductCategory'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import { IconButton } from '@mui/material';
import { ROUTE_DEFINATION } from '../../../Utils/Constants';

function HomePage() {
    const PRODUCT_CATEGORIES = [
        { title: 'Oxidized Jwellery', image: 'oxidizedJwellery', routeURL: ROUTE_DEFINATION.OXIDIZED_JWELLERY },
        { title: 'Handloom Sarees', image: 'handloomSaree', routeURL: ROUTE_DEFINATION.HANDLOOM_SAREES },
        { title: 'Designer Outfits', image: 'designerOutfit', routeURL: ROUTE_DEFINATION.DESIGNER_OUTFITS },
        { title: 'Handmade Jwellery', image: 'handMadeJwellery', routeURL: ROUTE_DEFINATION.HANDMADE_JWELLERY },
    ];

    return (
        <div className={classes.homePageWrapper}>
            <div className={classes.coverImage}>
                <div className={classes.imageText}>
                    The Anupama Closet is a creative space where we craft everything with love.<br /><br />
                    It's a place to get all you need for a perfect closet.<br /><br /><br />
                    We offer Designer dresses with handpicked fabrics, Handmade Jewellery with unique designs, Handmade Sarees to give you some exclusive look and Oxidized Jewellery with unique designs and details to make you look perfect.
                </div>
            </div>

            <div className={classes.homePageProductsContainer}>
                {
                    PRODUCT_CATEGORIES.map((productCategory) =>
                        <ProductCategory
                            key={productCategory.image}
                            categoryTitle={productCategory.title}
                            image={productCategory.image}
                            routeURL={productCategory.routeURL}
                        />)
                }

            </div>
            <div className={classes.contactUsWrapper}>
                <IconButton><InstagramIcon /></IconButton>
                <IconButton><FacebookIcon /></IconButton>
                <IconButton><EmailIcon /></IconButton>
            </div>
        </div>
    )
}

export default HomePage
