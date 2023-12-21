import React from 'react'
import classes from './HomePage.module.css'

function HomePage() {
    return (
        <div className={classes.homePageWrapper}>
            <div className={classes.coverImage}>

            </div>

            <div className={classes.homePageProductsContainer}>
                <div className={classes.homePageProductWrapper}>
                    <div className={classes.homePageProductImageWrapper}>
                        <div className={`${classes.homePageProduct} ${classes.handloomSaree}`} />
                    </div>
                    <div className={classes.homePageProductName}>
                        <p >Handloom Sarees</p>
                    </div>
                </div>

                <div className={classes.homePageProductWrapper}>
                    <div className={classes.homePageProductImageWrapper}>
                        <div className={`${classes.homePageProduct} ${classes.designerOutfit}`} />
                    </div>
                    <div className={classes.homePageProductName}>
                        <p >Designer Outfits</p>
                    </div>
                </div>

                <div className={classes.homePageProductWrapper}>
                    <div className={classes.homePageProductImageWrapper}>
                        <div className={`${classes.homePageProduct} ${classes.handMadeJwellery}`} />
                    </div>
                    <div className={classes.homePageProductName}>
                        <p >Handmade Jwellery</p>
                    </div>
                </div>

                <div className={classes.homePageProductWrapper}>
                    <div className={classes.homePageProductImageWrapper}>
                        <div className={`${classes.homePageProduct} ${classes.oxidizedJwellery}`} />
                    </div>
                    <div className={classes.homePageProductName}>
                        <p >Oxidized Jwellery</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage
