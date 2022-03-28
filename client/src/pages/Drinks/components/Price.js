import { Combobox, Transition } from "@headlessui/react";
import { HiSelector } from "react-icons/hi";
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
        <div className="relative flex-row cursor-pointer px-5 h-full">
            <Combobox value={selected} onChange={setSelected}>
                <div className="relative h-full">
                    <div className="sm:mx-2 relative w-full outline-none sm:text-sm overflow-hidden h-full">
                        <Combobox.Input
                            className="bg-primary-500 outline-none font-medium rounded-md border-none pl-4 pr-12 text-sm leading-5 text-white h-full"
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
                        <Combobox.Options className="absolute w-full mt-1 bg-secondary-500 rounded-md sm:text-sm overflow-hidden shadow-popup">
                            {filteredPrice.length === 0 && query !== "" ? (
                                <div className="cursor-default select-none relative py-2 px-4 text-white">
                                    Nothing found.
                                </div>
                            ) : (
                                filteredPrice.map((person) => (
                                    <Combobox.Option
                                        key={person.id}
                                        className={({ active }) =>
                                            `cursor-pointer relative text-left py-2 px-4 text-white ${active && "bg-primary-500"}`}
                                        value={person}
                                    >
                                        <span
                                        >
                                            {person.name}
                                        </span>
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