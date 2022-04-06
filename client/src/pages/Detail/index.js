import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import Size from "./components/Size";
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { useEffect, useState } from "react";
import products1 from "../../assets/images/cappacino.png";
import Button from "../../components/Button";
// import Reviews from "./components/Reviews";
import RangePicker from "./components/RangePicker";
import { axiosClient } from "apis/axiosClient";
import { userApi } from "apis/userApi";
export default function Details() {
    const products = [
        {
            id: 1,
            name: "Cappacino",
            img: products1,
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa, fermentum id id vitae, integer fermentum tellus. In vitae id nisl quis ornare diam commodo in vel dolor.",
            price: "6.40",
        },
    ];
    const { id } = useParams();
    const [quantity, setquantity] = useState(1);
    const handleMinus = () => {
        quantity <= 1 ? setquantity(quantity) : setquantity(quantity - 1);
    };
    const handleAdd = () => {
        setquantity(quantity + 1);
    };
    return (
        <section>
            <div className="container bg-quaternary-500">
                <div className="flex-center gap-y-4"></div>
                <div className="w-full py-20">
                    <div className="flex-center-y text-2xl pl-60 sm:px-6 sm:text-xl lg:pl-11 pb-4 lg:pb-0 tracking-wide">
                        <Link to="/drinks" className="font-bold ">
                            Drinks
                        </Link>
                        <BsArrowRight className="text-black text-5xl mx-5" />
                        <p>{id}</p>
                    </div>
                    <div className="w-full grid grid-cols-2 mx-auto lg:gap-10 gap-20 px-2 max-w-6xl lg:grid-cols-1">
                        <div className="flex-center flex-col lg:pt-5 space-y-10">
                            <img
                                src={products[0].img}
                                alt={products[0].id}
                                className="w-full lg:w-3/6 sm:w-4/6 object-cover rounded-md"
                            />
                            <div className="text-center lg:px-40 md:px-32 sm:px-10 px-10">
                                <p className="md:text-lg sm:text-base">
                                    "Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Massa, fermentum id id
                                    vitae, integer fermentum tellus. In vitae id
                                    nisl quis ornare diam commodo in vel dolor."
                                </p>
                            </div>
                        </div>
                        <div className="lg:pl-5">
                            <h1 className="text-4xl lg:text-3xl md:text-2xl sm:text-xl font-bold tracking-wide">
                                {id}
                            </h1>
                            <div className="px-4 text-xl md:text-lg sm:text-base">
                                <div className="py-2 flex-center-y justify-between">
                                    <h3 className="tracking-widest md:pr-14 pr-8 font-bold">
                                        Size
                                    </h3>
                                    <Size />
                                </div>
                                <div className="py-4 flex-center-y font-bold justify-between">
                                    <h3 className="pr-11 md:pr-6 tracking-widest">
                                        Quantity
                                    </h3>
                                    <div className="flex-center-y justify-between text-white py-2 bg-secondary-500 rounded-2xl">
                                        <button
                                            className="relative w-1/3 flex-center-x sm:px-5 px-7"
                                            onClick={handleMinus}
                                        >
                                            <AiOutlineMinus size={30} />
                                            <div className="absolute bg-white h-full w-1 top-0 right-0"></div>
                                        </button>
                                        <p className="text-center sm:px-5 px-8">
                                            {quantity}
                                        </p>
                                        <button
                                            className="relative px-7 sm:px-5 flex-center-x"
                                            onClick={handleAdd}
                                        >
                                            <AiOutlinePlus size={30} />
                                            <div className="absolute bg-white h-full w-1 top-0 left-0"></div>
                                        </button>
                                    </div>
                                </div>
                                <div className="py-4 md:flex-center-y font-bold justify-between">
                                    <h3 className="tracking-widest pr-8 md:mb-0 mb-5">
                                        Milk
                                    </h3>
                                    <div className="bg-primary-500 w-[400px] md:w-6/12 h-1 relative">
                                        <RangePicker />
                                    </div>
                                </div>
                                <div className="py-4 md:flex-center-y font-bold justify-between">
                                    <h3 className="tracking-widest pr-8 md:mb-0 mb-5">
                                        Sweetness
                                    </h3>
                                    <div className="bg-primary-500 w-[400px] md:w-6/12 h-1 relative">
                                        <RangePicker />
                                    </div>
                                </div>
                                <div className="py-4 flex justify-between pb-8 font-bold">
                                    <h3 className="tracking-widest pr-8">
                                        Price
                                    </h3>
                                    <h3 className="tracking-widest pr-8">
                                        6.40$
                                    </h3>
                                </div>
                            </div>
                            <div className="flex px-10 lg:justify-end lg:space-x-10 md:px-4 sm:px-0 justify-around">
                                <Button name="Order now" className="sm:px-3" />
                                <Button
                                    name="Add to cart"
                                    onClick="handleAddToCart"
                                    className="sm:px-3"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
