import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./Layout";
import About from "./pages/About";
import EverworldStories from "./pages/EverworldStories";
import Product from "./molecules/Product";
import ProductDetail from "./molecules/ProductDetail";
import Stores from "./pages/Stores";


export const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [{
            path: "/",
            element: <Home />
        },
        {
            path: "/about",
            element: <About />
        },
        {
            path: "/men",
            element: <Product category="Men's Clothing" title="Men" />
        },
        {
            path: "/women",
            element: <Product category="Women's Clothing" title="Women" />
        },
        {
            path: "/jewelery",
            element: <Product category="Jewelery" title="Women" />
        },
        {
            path: "/electronics",
            element: <Product category="Electronics" title="Women" />
        },
        {
            path: "/everworld-stories",
            element: <EverworldStories />
        },
        {
            path: "/products/:productId",
            element: <ProductDetail />
        },
        {
            path: "/stores",
            element: (
                <Stores />
            ),
        },
        ]
    }
])