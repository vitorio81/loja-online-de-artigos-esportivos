import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Home from "./pages/Home";
import Tennis from "./pages/categorys/Tennis";
import Tshirts from "./pages/categorys/Tshirts";
import Shorts from "./pages/categorys/Shorts";
import Product from "./pages/Produto";
import OtherAcessories from "./pages/categorys/OtherAccessories"
import Cart from "./pages/Cart";
import Favorites from "./pages/Favorites";
import AdminHome from "./pages/admin/AdminHome";
import Products from "./pages/categorys/Products";
import AdminRegister from "./pages/admin/AdminRegister";

const router = createBrowserRouter([
    {
        path : "/",
        element: <RootLayout/>,
        children: [{
            index: "true",
            element: <Home/>
        }, {
            path: "/otheracessories",
            element: <OtherAcessories />
        }, {
            path: "/products",
            element: <Products />
        }, {
             path:"/tennis",
            element: <Tennis />
        }, {
            path: "/tshirts",
            element: <Tshirts />
        }, {
            path: "/shorts",
            element: <Shorts />
        }, {
            path: "/product",
            element: <Product/>
        }, {
            path: "/favorites",
            element: <Favorites/>
        }, {
            path: "/cart",
            element: <Cart/>
        }]
    } , {
        path: "/admin",
        element: <AdminHome/>
    } , {
        path: "/adminregister",
        element: <AdminRegister/>
    }
])

export default router