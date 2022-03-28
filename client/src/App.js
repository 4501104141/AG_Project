import PublicLayout from "layouts/PublicLayout";
import Cart from "pages/Cart";
import Details from "pages/Detail";
import Drinks from "pages/Drinks";
import Example from "pages/Example";
import Home from "pages/Home";
import About from "pages/About";

import { useRoutes } from "react-router-dom";

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
                    path: "example",
                    element: <Example />,
                },
            ],
        },
    ]);
}
