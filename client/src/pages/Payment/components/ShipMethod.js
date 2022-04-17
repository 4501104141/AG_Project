import React, { useEffect } from "react";
import { IoStorefront } from "react-icons/io5";
import { MdDeliveryDining } from "react-icons/md";
import { useState } from "react";
import { RadioGroup } from "@headlessui/react";
export default function ShipMethod({ value, onChange, require, price }) {
    let [plan, setPlan] = useState("Pick up");
    useEffect(() => {
        onChange(plan);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [plan]);
    return (
        <div>
            <h1 className="pb-5 text-xl">Ship Method</h1>
            <div className="py-10">
                {!(price >= require) && <p className="text-white font-bold">Sub total 5$ to unlock Delivery</p>}
                <RadioGroup
                    value={value}
                    onChange={setPlan}
                    className="px-5 py-8 md:p-2 md:pt-5 flex-center-y text-center px-18 justify-around"
                >
                    <RadioGroup.Option value="Pick up">
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
                    {price >= require && (
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
                                    </button>
                                </div>
                            )}
                        </RadioGroup.Option>
                    )}
                </RadioGroup>
            </div>
        </div>
    );
}
