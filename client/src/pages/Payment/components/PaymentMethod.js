import React from "react";
// import Button from "../../../components/Button";
import ModalCreditCard from "../components/ModalCreditCard";
import { useState } from "react";
import { RadioGroup } from "@headlessui/react";

export default function PaymentMethod() {
    const [isOpen, setIsOpen] = useState(false);
    let [plan, setPlan] = useState("startup");

    return (
        <div>
            <div className="py-10">
                <h1 className="text-xl">Payment</h1>
                <RadioGroup
                    value={plan}
                    onChange={setPlan}
                    className="p-8 flex-center-y text-center px-18 justify-around"
                >
                    <RadioGroup.Option value="Cash">
                        {({ checked }) => (
                            <button
                                className={
                                    checked
                                        ? "bg-quaternary-500 py-2 px-5 font-bold outline-none border-none rounded-md block text-black"
                                        : "bg-secondary-500 py-2 px-5 shadow-md font-bold transition-all rounded-md hover:bg-quaternary-500 hover:text-black"
                                }
                                onClick={() => setIsOpen(false)}
                            >
                                Cash
                            </button>
                        )}
                    </RadioGroup.Option>
                    <RadioGroup.Option value="Credit Card">
                        {({ checked }) => (
                            <button
                                className={
                                    checked
                                        ? "bg-quaternary-500 py-2 px-5 font-bold outline-none border-none rounded-md block text-black"
                                        : "bg-secondary-500 py-2 px-5 shadow-md font-bold transition-all rounded-md hover:bg-quaternary-500 hover:text-black"
                                }
                                onClick={() => setIsOpen((pre) => !pre)}
                            >
                                Credit Card
                            </button>
                        )}
                    </RadioGroup.Option>
                    <RadioGroup.Option value="Momo">
                        {({ checked }) => (
                            <button
                                className={
                                    checked
                                        ? "bg-quaternary-500 py-2 px-5 font-bold  outline-none border-none rounded-md block text-black"
                                        : "bg-secondary-500 py-2 px-5 shadow-md font-bold transition-all rounded-md hover:bg-quaternary-500 hover:text-black"
                                }
                                onClick={() =>
                                    alert("Momo Coming Soon!") ||
                                    setIsOpen(false)
                                }
                            >
                                Momo
                            </button>
                        )}
                    </RadioGroup.Option>
                </RadioGroup>
                {isOpen ? <ModalCreditCard /> : null}
            </div>
        </div>
    );
}
