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
                                    `${active
                                        ? "ring-2 ring-offset-2 ring-offset-sky-300 ring-white ring-opacity-60"
                                        : ""
                                    }
<<<<<<< HEAD
                                     ${checked
                                        ? "bg-primary-500 font-bold bg-opacity-75 text-white"
                                        : "bg-secondary-500 text-2xl font-bold"
                                    }
                                 relative rounded-lg shadow-md px-5 py-4 cursor-pointer flex focus:outline-none`
=======
                  ${
                      checked
                          ? "bg-primary-500 bg-opacity-75 text-white"
                          : "bg-secondary-500 text-2xl"
                  }
                    relative rounded-lg shadow-md px-5 py-4 cursor-pointer flex focus:outline-none`
>>>>>>> ee52b4ddd9c538395140a5e0e37c9825533248fd
                                }
                            >
                                {({ active, checked }) => (
                                    <>
                                        <div className="flex items-center justify-between w-full">
                                            <div className="flex items-center">
                                                <div className="text-sm">
                                                    <RadioGroup.Label
                                                        as="p"
<<<<<<< HEAD
                                                        className={`font-medium  ${checked
                                                            ? "text-white"
                                                            : "text-gray-900"
                                                            }`}
                                                    >
                                                        {plan.name}
                                                    </RadioGroup.Label>
                                                    <RadioGroup.Description
                                                        as="span"
                                                        className={`inline ${checked
                                                            ? "text-sky-100"
                                                            : "text-gray-500"
                                                            }`}
                                                    ></RadioGroup.Description>
=======
                                                        className={`  ${
                                                            checked
                                                                ? "text-white font-bold"
                                                                : "text-white"
                                                        }`}
                                                    >
                                                        {plan.name}
                                                    </RadioGroup.Label>
>>>>>>> ee52b4ddd9c538395140a5e0e37c9825533248fd
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
