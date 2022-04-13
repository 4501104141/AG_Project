import PublicLayout from "layouts/PublicLayout";
import Cart from "pages/Cart";
import Details from "pages/Detail";
import Drinks from "pages/Drinks";
import Home from "pages/Home";
import About from "pages/About";
import Payment from "pages/Payment";
import Feedback from "pages/Feedback";
import Account from "pages/Account";
import Address from "pages/Account/components/Address";
import Purchase from "pages/Account/components/Purchase";
import { useRoutes } from "react-router-dom";
import TestGGMap from "pages/Payment/components/TestGGMap";

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
                    children: [
                        {
                            index: true,
                            element: <Cart />,
                        },
                        {
                            path: "payment",
                            element: <Payment />,
                        },
                    ],
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
                    path: "test-gg-map",
                    element: <TestGGMap />,
                },
                {
                    path: "feedback",
                    element: <Feedback />,
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
            ],
        },
    ]);
}
