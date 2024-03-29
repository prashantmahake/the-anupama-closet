import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from "./components/RootLayout"
import HomePage from "./components/Pages/HomePage/HomePage"
import DesignerDresses, { dressLoader } from "./components/Pages/DesignerDresses/DesignerDresses"
import HandmadeJwellery from './components/Pages/HandmadeJwellery/HandmadeJwellery'
import OxidizedJwellery, { oxidozedJwelleryLoader } from './components/Pages/OxidizedJwellery/OxidizedJwellery'
import Saree from './components/Pages/Saree/Saree'
import { ROUTE_DEFINATION } from './Utils/Constants'
import ProductDetail from './components/Product/ProductDetail'
import ErrorPage from './components/Pages/ErrorPage'
const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            { path: '/', element: <HomePage /> },
            { path: `/${ROUTE_DEFINATION.HANDLOOM_SAREES}`, element: <Saree /> },
            {
                path: `/${ROUTE_DEFINATION.DESIGNER_OUTFITS}`,
                element: <DesignerDresses />,
                loader: dressLoader
            },
            { path: `/${ROUTE_DEFINATION.HANDMADE_JWELLERY}`, element: <HandmadeJwellery /> },
            {
                path: `/${ROUTE_DEFINATION.OXIDIZED_JWELLERY}`,
                element: <OxidizedJwellery />,
                loader: oxidozedJwelleryLoader
            },
            { path: `/${ROUTE_DEFINATION.PRODUCT_DETAIL}/:productID`, element: <ProductDetail /> }
        ]
    }

])

function App() {
    return <RouterProvider router={router} />
}

export default App