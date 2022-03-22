import { Link } from "react-router-dom";
import products1 from "../assets/images/cappacino.png";
import products2 from "../assets/images/mocha.png";
import products3 from "../assets/images/latte.png";
import products4 from "../assets/images/cold java.png";
import Button from "./Button";

const products = [
    {
        id: 1,
        name: "Cappacino",
        img: products1,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa, fermentum id id vitae, integer fermentum tellus. In vitae id nisl quis ornare diam commodo in vel dolor.",
        price: "6.40",
    },
    {
        id: 2,
        name: "Mocha",
        img: products2,
        description: "Ngon hơn khi uống",
        price: "6.40",
    },
    {
        id: 3,
        name: "Latte",
        img: products3,
        description: "Ngon hơn khi uống",
        price: "6.40",
    },
    {
        id: 4,
        name: "Cold Java",
        img: products4,
        description: "Ngon hơn khi uống",
        price: "6.40",
    },
    {
        id: 5,
        name: "Cappacino",
        img: products1,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa, fermentum id id vitae, integer fermentum tellus. In vitae id nisl quis ornare diam commodo in vel dolor.",
        price: "6.40",
    },
    {
        id: 6,
        name: "Mocha",
        img: products2,
        description: "Ngon hơn khi uống",
        price: "6.40",
    },
    {
        id: 7,
        name: "Latte",
        img: products3,
        description: "Ngon hơn khi uống",
        price: "6.0",
    },
    {
        id: 8,
        name: "Cold Java",
        img: products4,
        description: "Ngon hơn khi uống",
        price: "6.40",
    },
];
export default function Products() {
    return (
        <div className="grid grid-cols-4 mx-auto lg:px-5 md:px-5 pb-10 max-w-[1200px] gap-5 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1">
            {products.map((product) => (
                <Link key={product.id} to={`/drinks/${product.name}`}>
                    <div
                        key={product.id}
                        className="my-0 bg-secondary-500 rounded-2xl relative h-[460px] sm:h-full"
                    >
                        <div className=" h-full bg-no-repeat bg-center w-full p-4 flex flex-col">
                            <div className="flex-center flex-col">
                                <img
                                    src={product.img}
                                    alt={product.name}
                                    className="w-full h-[150px] lg:h-full md:h-full object-cover rounded-md"
                                />
                            </div>
                            <div className="text-left text-white flex flex-col h-full">
                                <h1 className="my-2 font-bold text-3xl ">
                                    {product.name}
                                </h1>
                                <p className="font-light text-base line-clamp-5">
                                    {product.description}
                                </p>
                                <div className="relative justify-between mt-auto flex-center-y flex-row">
                                    <h1 className="my-2 font-bold text-3xl ">
                                        {product.price}
                                    </h1>
                                    <Button name="Order now" />
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}
