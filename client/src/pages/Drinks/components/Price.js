import { Combobox, Transition } from "@headlessui/react";
import { HiSelector } from "react-icons/hi";
import { AiOutlineCheck } from "react-icons/ai";
import { useState, Fragment } from "react";

export default function Price() {
    const price = [
        { id: 1, name: "Low to high" },
        { id: 2, name: "High to low" },
    ];
    const [selected, setSelected] = useState(price[0]);
    const [query, setQuery] = useState("");

    const filteredPrice =
        query === ""
            ? price
            : price.filter((person) =>
                  person.name
                      .toLowerCase()
                      .replace(/\s+/g, "")
                      .includes(query.toLowerCase().replace(/\s+/g, ""))
              );
    return (
        <div className="relative flex-row cursor-pointer px-5">
            <Combobox value={selected} onChange={setSelected}>
                <div className="relative mt-1 ">
                    <div className="sm:mx-2h-14 hover:text-white relative w-full text-left cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-teal-300 focus-visible:ring-offset-2 sm:text-sm overflow-hidden">
                        <Combobox.Input
                            className="w-full bg-primary-500 outline-none tracking-widest font-medium rounded-2xl border-none focus:ring-0 py-4 pl-5 pr-12 text-sm leading-5 text-white"
                            displayValue={(person) => person.name}
                            onChange={(event) => setQuery(event.target.value)}
                        />
                        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-4">
                            <HiSelector
                                className="w-5 h-5 text-white"
                                aria-hidden="true"
                            />
                        </Combobox.Button>
                    </div>
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                        afterLeave={() => setQuery("")}
                    >
                        <Combobox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-secondary-500 rounded-2xl max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {filteredPrice.length === 0 && query !== "" ? (
                                <div className="cursor-default select-none relative py-2 px-4 text-gray-700">
                                    Nothing found.
                                </div>
                            ) : (
                                filteredPrice.map((person) => (
                                    <Combobox.Option
                                        key={person.id}
                                        className={({ active }) =>
                                            `cursor-default select-none relative py-2 pl-10 pr-4 ${
                                                active
                                                    ? "text-white bg-primary-500"
                                                    : "text-gray-900"
                                            }`
                                        }
                                        value={person}
                                    >
                                        {({ selected, active }) => (
                                            <>
                                                <span
                                                    className={`block truncate tracking-wide ${
                                                        selected
                                                            ? "font-medium"
                                                            : "font-medium"
                                                    }`}
                                                >
                                                    {person.name}
                                                </span>
                                                {selected ? (
                                                    <span
                                                        className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                                            active
                                                                ? "text-white"
                                                                : "text-black"
                                                        }`}
                                                    >
                                                        <AiOutlineCheck
                                                            className="w-5 h-5"
                                                            aria-hidden="true"
                                                        />
                                                    </span>
                                                ) : null}
                                            </>
                                        )}
                                    </Combobox.Option>
                                ))
                            )}
                        </Combobox.Options>
                    </Transition>
                </div>
            </Combobox>
        </div>
    );
}
