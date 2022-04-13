import React from "react";
import { IoStorefront } from "react-icons/io5";
import { MdDeliveryDining } from "react-icons/md";
import { useState } from "react";
import { Link } from "react-router-dom";
import { RadioGroup } from "@headlessui/react";
import TestGGMap from "./TestGGMap";
export default function ShipMethod() {
    let [plan, setPlan] = useState("startup");
    return (
        <div>
            <h1 className="pb-5 text-xl">Ship Method</h1>
            <div className="py-10">
                <RadioGroup
                    value={plan}
                    onChange={setPlan}
                    className="px-5 py-8 md:p-2 md:pt-5 flex-center-y text-center px-18 justify-around"
                >
                    <RadioGroup.Option value="Delivery">
                        {({ checked }) => (
                            <div className="">
                                <MdDeliveryDining className="mx-auto mb-5 text-7xl" />
                                <button
                                    className={
                                        checked
                                            ? "bg-quaternary-500 py-2 px-5 font-bold outline-none border-none rounded-md block text-black"
                                            : "bg-secondary-500 py-2 px-5 shadow-md font-bold transition-all rounded-md hover:bg-quaternary-500 hover:text-black"
                                    }
                                >
                                    Delivery
                                    {/* <Link
                                        to="/TestGGMap"
                                        className="flex-center font-bold italic text-2xl "
                                    >
                                        Delivery
                                    </Link> */}
                                </button>
                            </div>
                        )}
                    </RadioGroup.Option>
                    <RadioGroup.Option value="Local Pickup">
                        {({ checked }) => (
                            <div className="">
                                <IoStorefront className="mx-auto mb-5 text-7xl" />
                                <button
                                    className={
                                        checked
                                            ? "bg-quaternary-500 py-2 px-5 font-bold  outline-none border-none rounded-md block text-black"
                                            : "bg-secondary-500 py-2 px-5 shadow-md font-bold transition-all rounded-md hover:bg-quaternary-500 hover:text-black"
                                    }
                                >
                                    Local Pickup
                                </button>
                            </div>
                        )}
                    </RadioGroup.Option>
                </RadioGroup>
            </div>
        </div>
    );
}
