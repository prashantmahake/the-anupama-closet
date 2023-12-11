import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from "./components/RootLayout"
import HomePage from "./components/Pages/HomePage"
import DesignerDresses from "./components/Pages/DesignerDresses"
const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            { path: '/', element: <HomePage /> },
            { path: '/designer-dresses', element: <DesignerDresses /> }
        ]
    }

])

function App() {
    return <RouterProvider router={router} />
}

export default App