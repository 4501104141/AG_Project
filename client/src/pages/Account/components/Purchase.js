import React from "react";
import Line from "../components/Line";
import products1 from "../../../assets/images/cappacino.png";
import Button from "../../../components/Button";

export default function Purchase() {
    const myPurchase = [
        {
            id: 1,
            img: products1,
            Name: "Coffee Big",
            Size: "M",
            Sweetness: "20%",
            Milk: "20%",
            Price: "6.40$",
        },
    ];
    return (
        <div className="center bg-secondary-500 rounded-xl">
            <div className="flex-center-y justify-between px-10 pt-8 pb-10">
                <p className="text-white text-3xl tracking-wider font-black text-center italic">
                    Purchase
                </p>
                <Button name="Completed" />
            </div>
            <div className="">
                {myPurchase.map((Purchase) => (
                    <div className="py-5">
                        <div className="text-white px-10 relative mb-5 flex items-center tracking-wide justify-between p-4">
                            <Line />
                            <div className="flex">
                                <img
                                    src={Purchase.img}
                                    alt={Purchase.name}
                                    className="w-2/5 object-cover rounded-2xl"
                                />
                                <div className="flex">
                                    <div className="flex flex-col text-right px-10">
                                        <span className="py-2 ">Name:</span>
                                        <span className="py-2 ">Size:</span>
                                        <span className="py-2 ">
                                            Sweetness:
                                        </span>
                                        <span className="py-2 ">Milk:</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="py-2">
                                            {Purchase.Name}
                                        </span>
                                        <span className="py-2">
                                            {Purchase.Size}
                                        </span>
                                        <span className="py-2">
                                            {Purchase.Sweetness}
                                        </span>
                                        <span className="py-2">
                                            {Purchase.Milk}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="px-10 text-xl">
                                <span className="">{Purchase.Price}</span>
                            </div>
                            <div className="absolute bg-black w-full md:w-6/12 h-1 -bottom-3 left-0 object-center"></div>
                        </div>
                        <div className="flex justify-end pt-5 px-10 space-x-5 tracking-widest text-white">
                            <Button name="Buy Again" />
                            <Button name="Buy Again" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
