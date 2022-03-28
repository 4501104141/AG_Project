import { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { AiOutlineCheck } from "react-icons/ai";

const plans = [
    {
        name: "S",
    },
    {
        name: "M",
    },
    {
        name: "L",
    },
];
export default function Size() {
    const [selected, setSelected] = useState(plans[0]);
    return (
        <div className="w-full">
            <div className="w-full max-w-md mx-auto ">
                <RadioGroup value={selected} onChange={setSelected}>
                    <div className="flex justify-between md:pl-0 text-xl sm:pl-0 pl-24 py-2 sm:space-x-2.5 space-x-6 rounded-2xl">
                        {plans.map((plan) => (
                            <RadioGroup.Option
                                key={plan.name}
                                value={plan}
                                className={({ active, checked }) =>
                                    `${
                                        active
                                            ? "ring-2 ring-offset-2 ring-offset-sky-300 ring-white ring-opacity-60"
                                            : ""
                                    }
                  ${
                      checked
                          ? "bg-primary-500 bg-opacity-75 text-white"
                          : "bg-secondary-500 text-2xl"
                  }
                    relative rounded-lg shadow-md px-5 py-4 cursor-pointer flex focus:outline-none`
                                }
                            >
                                {({ active, checked }) => (
                                    <>
                                        <div className="flex items-center justify-between w-full">
                                            <div className="flex items-center">
                                                <div className="text-sm">
                                                    <RadioGroup.Label
                                                        as="p"
                                                        className={`  ${
                                                            checked
                                                                ? "text-white font-bold"
                                                                : "text-white"
                                                        }`}
                                                    >
                                                        {plan.name}
                                                    </RadioGroup.Label>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </RadioGroup.Option>
                        ))}
                    </div>
                </RadioGroup>
            </div>
        </div>
    );
}
