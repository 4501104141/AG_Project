import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import Size from "./components/Size";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useEffect, useState } from "react";
import Button from "../../components/Button";
import RangePicker from "./components/RangePicker";
import { productApi } from "apis/productApi";
import { useDispatch } from "react-redux";
import { add } from "reducers/cartSlice";
export default function Details() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [data, setData] = useState();
    const [option, setOption] = useState({
        size: "S",
        milk: 100,
        sweetness: 100,
        amount: 1,
    });
    const { id } = useParams();
    const handleChangeAmount = (type) => {
        switch (type) {
            case 1:
                setOption({ ...option, amount: option.amount + 1 });
                break;
            case 0:
                option.amount > 1 && setOption({ ...option, amount: option.amount - 1 });
                break;
            default:
                break;
        }
    };
    const handleChangeValue = (type, value) => {
        setOption({ ...option, [type]: value });
    };
    const handleAddToCart = () => {
        dispatch(add({
            _id: data._id,
            name: data.name,
            image: data.image,
            option,
            priceBefore: option.size === "S" ? data.price : option.size === "M" ? data.price + 1 : data.price + 2,
            priceAfter: option.size === "S" ? option.amount * data.price : option.size === "M" ? option.amount * data.price + 1 : option.amount * data.price + 2,
        }));
    };
    useEffect(() => {
        async function fetchProduct() {
            const response = await productApi.getProduct(id);
            setData(response.data);
        }
        fetchProduct();
        return () => {
            setData([]);
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
                        <p>{data?.name}</p>
                    </div>
                    <div className="w-full grid grid-cols-2 mx-auto lg:gap-10 gap-20 px-2 max-w-6xl lg:grid-cols-1">
                        <div className="flex-center flex-col lg:pt-5 space-y-10">
                            <img
                                src={data?.image}
                                alt={data?._id}
                                className="w-full lg:w-3/6 sm:w-4/6 h-96 object-center object-cover rounded-md"
                            />
                            <div className="text-center lg:px-40 md:px-32 sm:px-10 px-10">
                                <p className="md:text-lg sm:text-base">
                                    {
                                        data?.description
                                    }
                                </p>
                            </div>
                        </div>
                        <div>
                            <h1 className="text-4xl lg:text-3xl md:text-2xl sm:text-xl font-bold tracking-wide">
                                {data?.name}
                            </h1>
                            <div className="px-4 tracking-widest text-xl md:text-lg sm:text-base">
                                <div className="py-2 flex-center-y justify-between">
                                    <h3 className=" md:pr-14 pr-8 font-bold">
                                        Size
                                    </h3>
                                    <Size setValue={handleChangeValue} />
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
                                            {option.amount}
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
                                        <RangePicker name="milk" onChange={handleChangeValue} />
                                    </div>
                                </div>
                                <div className="font-bold">
                                    <h3 className="md:mb-0 mb-5">
                                        Sweetness
                                    </h3>
                                    <div className="bg-primary-500 w-full h-1 relative mb-4 mt-2">
                                        <RangePicker name="sweetness" onChange={handleChangeValue} />
                                    </div>
                                </div>
                                <div className="py-4 flex justify-between pb-8 font-bold">
                                    <h3 className="pr-8">Price</h3>
                                    <h3 className="pr-8">{option.size === "S" ? option.amount * data?.price : option.size === "M" ? option.amount * data?.price + 1 : option.amount * data?.price + 2}$</h3>
                                </div>
                            </div>
                            <div className="flex px-10 lg:justify-end lg:space-x-10 md:px-4 sm:px-0 justify-around">
                                <Button name="Order now" className="sm:px-3" onclick={() => {
                                    navigate('/cart');
                                }} />
                                <Button
                                    name="Add to cart"
                                    onClick="handleAddToCart"
                                    className="sm:px-3"
                                    onclick={handleAddToCart}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}
