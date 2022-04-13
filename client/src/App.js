import PublicLayout from "layouts/PublicLayout";
import Cart from "pages/Cart";
import Details from "pages/Detail";
import Drinks from "pages/Drinks";
import Home from "pages/Home";
import About from "pages/About";
import Payment from "pages/Payment";
import { useRoutes } from "react-router-dom";
import Account from "pages/Account";
import Address from "pages/Account/components/Address";
import Purchase from "pages/Account/components/Purchase";

export default function App() {
    return useRoutes([
        {
            path: "/",
            element: <PublicLayout />,
            children: [
                {
                    index: true,
                    element: <Home />,
                },
                {
                    path: "cart",
                    element: <Cart />,
                },
                {
                    path: "account-settings",
                    element: <Account />,
                    children: [
                        {
                            index: true,
                            element: <Address />,
                        },
                        {
                            path: "purchase",
                            element: <Purchase />,
                        },
                        {
                            path: "address",
                            element: <Address />,
                        },
                    ],
                },
                {
                    path: "about-us",
                    element: <About />,
                },
                {
                    path: "drinks",
                    children: [
                        {
                            index: true,
                            element: <Drinks />,
                        },
                        {
                            path: "/drinks/:id",
                            element: <Details />,
                        },
                    ],
                },
                {
                    path: "payment",
                    element: <Payment />,
                },
            ],
        },
    ]);
}
