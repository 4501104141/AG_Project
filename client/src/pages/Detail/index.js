import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import Size from "./components/Size";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useEffect, useState } from "react";
import Button from "../../components/Button";
import RangePicker from "./components/RangePicker";
import { productApi } from "apis/productApi";
export default function Details() {
    const [product, setProduct] = useState();
    const { id } = useParams();
    const [amount, setAmount] = useState(1);
    const handleChangeAmount = (type) => {
        switch (type) {
            case 1:
                setAmount(amount + 1);
                break;
            case 0:
                amount > 1 && setAmount(amount - 1);
                break;
            default:
                break;
        }
    };
    useEffect(() => {
        async function fetchProduct() {
            const response = await productApi.getProduct(id);
            console.log("response: ", response);
            setProduct(response.data);
        }
        fetchProduct();
        return () => {
            setProduct([]);
        };
    }, [id]);
    return (
        <section>
            <div className="container bg-quaternary-500">
                <div className="flex-center gap-y-4"></div>
                <div className="w-full py-14">
                    <div className="flex-center-y text-2xl pl-48 sm:px-6 sm:text-xl md:pt-5 lg:pl-11 pb-4 lg:pb-0 tracking-wide">
                        <Link to="/drinks" className="font-bold ">
                            Drinks
                        </Link>
                        <BsArrowRight className="text-black text-5xl mx-5" />
                        <p>{product?.name}</p>
                    </div>
                    <div className="w-full grid grid-cols-2 mx-auto lg:gap-10 gap-20 px-2 max-w-6xl lg:grid-cols-1">
                        <div className="flex-center flex-col lg:pt-5 space-y-10">
                            <img
                                src={product?.image}
                                alt={product?._id}
                                className="w-full lg:w-3/6 sm:w-4/6 h-96 object-center object-cover rounded-md"
                            />
                            <div className="text-center lg:px-40 md:px-32 sm:px-10 px-10">
                                <p className="md:text-lg sm:text-base">
                                    {
                                        product?.description
                                    }
                                </p>
                            </div>
                        </div>
                        <div>
                            <h1 className="text-4xl lg:text-3xl md:text-2xl sm:text-xl font-bold tracking-wide">
                                {product?.name}
                            </h1>
                            <div className="px-4 tracking-widest text-xl md:text-lg sm:text-base">
                                <div className="py-2 flex-center-y justify-between">
                                    <h3 className=" md:pr-14 pr-8 font-bold">
                                        Size
                                    </h3>
                                    <Size />
                                </div>
                                <div className="py-4 flex-center-y font-bold justify-between">
                                    <h3 className="pr-11 md:pr-6">Amount</h3>
                                    <div className="flex-center justify-between text-white py-2 bg-secondary-500 rounded-2xl">
                                        <button
                                            className="relative w-1/3 flex-center-x sm:px-5 px-7"
                                            onClick={() => handleChangeAmount(0)}
                                        >
                                            <AiOutlineMinus size={30} />
                                            <div className="absolute bg-white h-full w-1 top-0 right-0"></div>
                                        </button>
                                        <p className="text-center sm:px-5 px-8">
                                            {amount}
                                        </p>
                                        <button
                                            className="relative px-7 sm:px-5 flex-center-x"
                                            onClick={() => handleChangeAmount(1)}
                                        >
                                            <AiOutlinePlus size={30} />
                                            <div className="absolute bg-white h-full w-1 top-0 left-0"></div>
                                        </button>
                                    </div>
                                </div>
                                <div className="font-bold">
                                    <h3 className="md:mb-0 mb-5">Milk</h3>
                                    <div className="bg-primary-500 w-full h-1 relative mb-4 mt-2">
                                        <RangePicker />
                                    </div>
                                </div>
                                <div className="font-bold">
                                    <h3 className="md:mb-0 mb-5">
                                        Sweetness
                                    </h3>
                                    <div className="bg-primary-500 w-full h-1 relative mb-4 mt-2">
                                        <RangePicker />
                                    </div>
                                </div>
                                <div className="py-4 flex justify-between pb-8 font-bold">
                                    <h3 className="pr-8">Price</h3>
                                    <h3 className="pr-8">{product?.price}$</h3>
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
        </section >
    );
}
