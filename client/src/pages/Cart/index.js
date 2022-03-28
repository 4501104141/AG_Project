import { Link } from "react-router-dom";
import img1 from "../../assets/images/mocha.png";
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";
import Button from "../../components/Button";
export default function Cart() {
    const [quality, setQuality] = useState(1);
    const handleMinus = () => {
        setQuality(quality - 1);
    };
    const handleAdd = () => {
        setQuality(quality + 1);
    };
    return (
        <section className="">
            <div className="container bg-quaternary-500">
                <div
                    className="min-h-[720px] bg-cart-bg bg-cover bg-center bg-fixed 
                    bg-no-repeat flex-center flex-col gap-y-4 relative"
                >
                    <div className=" py-16">
                        <div className="w-[1200px] h-24 bg-secondary-500 rounded-xl mx-auto">
                            <div className="">
                                <div className="flex py-8 px-10 text-white text-lg font-bold tracking-widest justify-between">
                                    <h1 className="px-10 ">Products</h1>
                                    <div className="flex">
                                        <h1 className="px-12">Unit Price</h1>
                                        <h1 className=" px-12">Quantity</h1>
                                        <h1 className="px-12 ">Total Price</h1>
                                    </div>
                                </div>
                                <div className="w-[1200px] flex-center-y mt-10 h-48 bg-secondary-500 rounded-xl mx-auto">
                                    <div className=" flex pl-10 text-white  tracking-widest">
                                        <h1 className="flex px-6">
                                            <img
                                                src={img1}
                                                alt=""
                                                className=" w-8/12 rounded-xl h-40 object-cover"
                                            />
                                        </h1>
                                        <div className="px-16 flex-center-x flex-col">
                                            <h1 className="text-lg font-bold">
                                                Mocha
                                            </h1>
                                            <div className="pl-2">
                                                <p>Size: S</p>
                                                <p>20% Sweetness</p>
                                                <p>20% Milk</p>
                                            </div>
                                        </div>
                                        <div className="flex-center pl-10 text-lg font-bold">
                                            <h1 className="px-4">$6.40 </h1>
                                            <div className="flex px-20 text-white">
                                                <button
                                                    className=""
                                                    onClick={handleMinus}
                                                >
                                                    <AiOutlineMinus size={30} />
                                                </button>
                                                <p className="text-center px-6">
                                                    {quality}
                                                </p>
                                                <button
                                                    className=""
                                                    onClick={handleAdd}
                                                >
                                                    <AiOutlinePlus size={30} />
                                                </button>
                                            </div>
                                            <h1 className="pl-5">$6.40 </h1>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex px-10 py-10 tracking-widest text-white">
                                    <div className="text-white pr-5">
                                        <input
                                            type="text"
                                            placeholder="Coupon Code"
                                            maxLength={15}
                                            className="text-base bg-primary-500 rounded-md px-5 py-3"
                                        />
                                    </div>
                                    <Button name="Apply" className="px-8" />
                                </div>
                                <div className="flex px-10 py-10 float-right tracking-widest text-white">
                                    <div className="px-5 flex-center-y h-12 text-left rounded-md bg-primary-500 ">
                                        <span className="text-lg font-bold pr-3">
                                            Total:
                                        </span>
                                        10.000 USD
                                    </div>
                                    <div className="px-5"></div>
                                    <Button name="Check Out" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
