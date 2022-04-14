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
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { userApi } from "apis/userApi";
import { login } from "reducers/userSlice";
import Loading from "components/Loading";

export default function App() {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    // const getCurrentUser 
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        async function getCurrentUser() {
            if (localStorage.getItem("token")) {
                try {
                    setLoading(true);
                    const response = await userApi.currentUser();
                    dispatch(login(response.data));
                    setLoading(false);

                } catch (error) {
                    localStorage.removeItem("token");
                    setLoading(false);
                }
            }
        }
        getCurrentUser();
    }, [dispatch]);
    if (loading) return <Loading />;
    // eslint-disable-next-line react-hooks/rules-of-hooks
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
                    path: "about-us",
                    element: <About />,
                },
                {
                    path: "test-gg-map",
                    element: <TestGGMap />,
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
                user.isLogin && {
                    path: "",
                    children: [
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
                        }, {
                            path: "feedback",
                            element: <Feedback />,
                        }
                    ]

                },

            ],
        },
    ]);
}
