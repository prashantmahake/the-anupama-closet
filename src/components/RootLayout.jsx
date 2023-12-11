import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'

function RootLayout() {
    return (
        <div style={{ height: '100%' }}>
            <Header />
            <Outlet />
        </div>
    )
}

export default RootLayout
