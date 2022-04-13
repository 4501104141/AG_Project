import img1 from "../../assets/images/mocha.png";
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { compareLocation } from "utils";
import Button from "../../components/Button";
export default function Cart() {
    const location = useLocation();
    const myCart = [
        {
            id: 1,
            img: img1,
            Name: "Coffee Big",
            Size: "M",
            Sweetness: 20,
            Milk: 20,
            Price: 6.4,
        },
    ];

    const [Amount, setAmount] = useState(1);
    const handleMinus = () => {
        Amount <= 1 ? setAmount(Amount) : setAmount(Amount - 1);
    };

    const handleAdd = () => {
        setAmount(Amount + 1);
    };
    return (
        <section className="container bg-quaternary-500 px-2 pt-10 md:pt-32 min-h-[700px]">
            <div className="bg-secondary-500  rounded-xl ">
                <div className="text-white divide-y-4  divide-black">
                    <div className="p-5">
                        <div className="flex-center-y sm:px-0 md:px-5 px-10 font-bold tracking-wide justify-between">
                            <h1 className="">Products</h1>
                            <div className="flex space-x-20 md:space-x-5">
                                <h1>Unit Price</h1>
                                <h1>Amount</h1>
                                <h1>Total Price</h1>
                            </div>
                        </div>
                    </div>

                    {myCart.map((item) => (
                        <div
                            key={item.id}
                            className="flex-center-y sm:flex-col text-white p-10 md:p-5 sm:p-2 justify-between"
                        >
                            <div className="flex md:flex-col">
                                <div className="flex-center-x">
                                    <img
                                        src={item.img}
                                        alt="product"
                                        className="md:w-full object-cover rounded-2xl"
                                    />
                                </div>
                                <div className="flex-center lg:px-5 px-10 md:px-0 md:py-5">
                                    <div className="flex flex-col space-y-2 md:px-4 text-right pr-2">
                                        <span>Name:</span>
                                        <span>Size:</span>
                                        <span>Sweetness:</span>
                                        <span>Milk:</span>
                                    </div>
                                    <div className="flex flex-col space-y-2">
                                        <span>{item.Name}</span>
                                        <span>{item.Size}</span>
                                        <span>{item.Sweetness} %</span>
                                        <span>{item.Milk} %</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex px-8 md:px-0 space-x-16 md:space-x-1">
                                <h1 className="text-white">{item.Price} $</h1>
                                <div className="flex-center-y px-5 space-x-9 md:space-x-5">
                                    <AiOutlineMinus
                                        className="text-white"
                                        onClick={handleMinus}
                                    />
                                    <h1 className="text-white">{Amount}</h1>
                                    <AiOutlinePlus
                                        className="text-white"
                                        onClick={handleAdd}
                                    />
                                </div>
                                <h1 className="text-white md:px-3 md:pr-10 sm:px-0">
                                    {item.Price} $
                                </h1>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex px-10 py-10 float-right sm:space-x-1 space-x-10 text-white">
                    <div className="px-5 flex-center-y rounded-md bg-primary-500 ">
                        <span className="pr-3">Total:</span>
                        10.000 USD
                    </div>
                    <Button
                        name="Check out"
                        className="py-3"
                        link
                        href="/cart/payment"
                        active={compareLocation(
                            location.pathname,
                            "/cart/payment"
                        )}
                    />
                </div>
            </div>
        </section>
    );
}
