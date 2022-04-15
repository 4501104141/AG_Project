import React from "react";
import { useState } from "react";
import products1 from "../../../assets/images/cappacino.png";
import Button from "../../../components/Button";
import { useLocation } from "react-router-dom";
import { compareLocation } from "utils";
export default function Purchase() {
    const [isShow, setIsShow] = useState(false);
    const location = useLocation();
    const Purchase = [
        {
            id: 1,
            img: products1,
            Name: "Coffee Big",
            Size: "M",
            Sweetness: "20%",
            Milk: "20%",
            Price: 6,
        },
        {
            id: 2,
            img: products1,
            Name: "Coffee Big",
            Size: "M",
            Sweetness: "20%",
            Milk: "20%",
            Price: 8,
        },
    ];
    let Total = Purchase.reduce((Price, i) => {
        return (Price += i.Price);
    }, 0);
    const myPurchase = [
        {
            id: 1,
            Items: "2 items purchased",
            ShippingFee: 1,
            Total: Total + 1,
        },
    ];
    return (
        <div className="bg-secondary-500 text-white rounded-xl divide-y-4 divide-black">
            <div className="flex-center-y justify-between px-10 sm:px-5 pt-8 pb-10">
                <p className="text-3xl tracking-wider font-black italic">
                    Purchase
                </p>
                <Button name="Completed" />
            </div>
            <div className="p-5">
                <div className="flex justify-between text-lg px-10 sm:px-3 ">
                    <div className="space-y-5">
                        <p>Items:</p>
                        <p>Shipping fee:</p>
                        <p>Total:</p>
                    </div>
                    {myPurchase.map((i) => {
                        return (
                            <div key={i} className="space-y-5 text-right">
                                <p>{i.Items}</p>
                                <p>{i.ShippingFee}$</p>
                                <p>{i.Total}$</p>
                            </div>
                        );
                    })}
                </div>
                <div className="flex justify-end sm:justify-center pt-5 px-10 space-x-5 sm:text-sm sm:px-0 sm:space-x-3 text-white">
                    <Button
                        name="Feed Back"
                        link
                        href="/feedback"
                        active={compareLocation(location.pathname, "/feedback")}
                    />
                    <Button
                        onclick={() => alert("Buy again thanh cong")}
                        name="Buy Again"
                    />
                    <Button
                        onclick={() => setIsShow((pre) => !pre)}
                        name="More Info"
                    />
                </div>
            </div>
            {isShow ? (
                <div className="">
                    <div className="px-10 sm:px-5 pt-5">
                        <h1 className="font-bold text-xl pb-5">
                            Shipping Detail
                        </h1>
                        <div className="px-3 sm:px-0 flex text-lg sm:text-base justify-between">
                            <div className="space-y-3">
                                <p className="">Method of payment:</p>
                                <p className="">Product:</p>
                            </div>
                            <p className="">Credit Card</p>
                        </div>
                    </div>

                    {Purchase.map((Purchase) => (
                        <div className="py-5">
                            <div className="text-white px-10 md:px-5 sm:px-3 tracking-wide">
                                <div className="flex justify-between">
                                    <div className="flex items-center">
                                        <img
                                            src={Purchase.img}
                                            alt={Purchase.name}
                                            className="md:w-3/6 sm:w-2/5 object-cover pr-10 md:pr-5 sm:pr-0 rounded-2xl"
                                        />
                                        <div className="flex-center sm:text-sm">
                                            <div className="flex flex-col space-y-3 pr-3 md:px-4 text-right">
                                                <span className="">Name:</span>
                                                <span className="">Size:</span>
                                                <span className="">
                                                    Sweetness:
                                                </span>
                                                <span className="">Milk:</span>
                                            </div>
                                            <div className="flex flex-col space-y-3">
                                                <span className="">
                                                    {Purchase.Name}
                                                </span>
                                                <span className="">
                                                    {Purchase.Size}
                                                </span>
                                                <span className="">
                                                    {Purchase.Sweetness}
                                                </span>
                                                <span className="">
                                                    {Purchase.Milk}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex-center-y sm:pt-5 text-xl text-right">
                                        <span className="">
                                            {Purchase.Price}$
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : null}
        </div>
    );
}
