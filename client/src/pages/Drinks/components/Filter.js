import { Combobox, Transition } from "@headlessui/react";
import { HiSelector } from "react-icons/hi";
import { AiOutlineCheck } from "react-icons/ai";
import { useState, Fragment } from "react";

export default function Filter() {
    const filter = [
        { id: 1, name: "Hot" },
        { id: 2, name: "New" },
    ];
    const [selected, setSelected] = useState(filter[0]);
    const [query, setQuery] = useState("");

    const filteredfilter =
        query === ""
            ? filter
            : filter.filter((person) =>
                person.name
                    .toLowerCase()
                    .replace(/\s+/g, "")
                    .includes(query.toLowerCase().replace(/\s+/g, ""))
            );
    return (
        <div className="relative flex-row cursor-pointer hidden sm:block h-full">
            <Combobox value={selected} onChange={setSelected}>
                <div className="relative h-full">
                    <div className="h-full hover:text-white relative w-full text-left cursor-default sm:text-sm overflow-hidden">
                        <Combobox.Input
                            className="w-[100px] h-full bg-primary-500 outline-none tracking-widest font-medium rounded-md border-none focus:ring-0 py-4 pl-5 text-sm leading-5 text-white"
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
                            {filteredfilter.length === 0 && query !== "" ? (
                                <div className="cursor-default select-none relative py-2 px-4 text-gray-700">
                                    Nothing found.
                                </div>
                            ) : (
                                filteredfilter.map((person) => (
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