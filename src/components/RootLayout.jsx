import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import CartContextProvider from '../store/cart-context'

function RootLayout() {
    return (
        <CartContextProvider>
            <div style={{ height: '100%', overflow: 'hidden' }}>
                <Header />
                <Outlet />
            </div>
        </CartContextProvider>

    )
}

export default RootLayout
