import React from "react";
import Button from "../../../components/Button";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import ModalCreditCard from "pages/Payment/components/ModalCreditCard";
export default function Address() {
    let [isOpen, setIsOpen] = useState(false);
    const [currentAddressEditIndex, setCurrentAddressEditIndex] = useState(-1);
    function closeModal() {
        setIsOpen(false);
    }

    function openModal() {
        setIsOpen(true);
    }
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [addresses, setAddresses] = useState([
        {
            id: 1,
            name: "Peter Parker",
            phone: "0916030512",
            address:
                "338/1/7 , đường An Dương Vương, phường 4, quận 5, tp. HCM",
        },
    ]);

    const handleSubmit = () => {
        if (currentAddressEditIndex !== -1) {
            let newAddress = [...addresses].map((item) =>
                item.id === currentAddressEditIndex
                    ? { id: item.id, name, phone, address }
                    : item
            );
            setAddresses(newAddress);
            resetState();
            return;
        }
        if (!name || !phone || !address) {
            alert("Nhap du thong tin di!");
            return;
        }
        const newAddress = {
            id: addresses.length + 1,
            name,
            phone,
            address,
        };
        console.log("cho Linh");
        setAddresses([...addresses, newAddress]);
        resetState();
    };

    const handleDelete = (person) => {
        setAddresses((prev) =>
            prev.filter((addresses) => addresses.id !== person.id)
        );
    };
    const handleEdit = (person) => {
        setCurrentAddressEditIndex(person.id);
        setName(person.name);
        setPhone(person.phone);
        setAddress(person.address);
        setIsOpen(true);
    };
    const resetState = () => {
        setName("");
        setPhone("");
        setAddress("");
        closeModal();
        setCurrentAddressEditIndex(-1);
    };
    return (
        <div className="center bg-primary-500 rounded-xl divide-y-4 divide-black">
            <div className="flex-center-y justify-between px-10 pt-8 pb-10">
                <p className="text-white text-3xl tracking-wider font-black text-center italic">
                    ADDRESS
                </p>
                <Button
                    name="New address"
                    className="bg-secondary-500"
                    onclick={openModal}
                />
                <Transition appear show={isOpen} as={Fragment}>
                    <Dialog
                        as="div"
                        className="fixed inset-0 z-10 overflow-y-auto"
                        onClose={closeModal}
                    >
                        <div className="min-h-screen px-4 text-center">
                            <Dialog.Overlay className="fixed inset-0" />
                            <span
                                className="inline-block h-screen align-middle"
                                aria-hidden="true"
                            >
                                &#8203;
                            </span>
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium pb-4 leading-6 text-gray-900"
                                    >
                                        New Address
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <form action="">
                                            <input
                                                value={name}
                                                onChange={(e) =>
                                                    setName(e.target.value)
                                                }
                                                type="text"
                                                placeholder="What's your name?"
                                                className="w-full pl-5 pr-32 py-5 focus:outline-black focus:rounded-xl"
                                            />
                                            <input
                                                value={address}
                                                onChange={(e) =>
                                                    setAddress(e.target.value)
                                                }
                                                type="text"
                                                placeholder="What is your address?"
                                                className="w-full pl-5 pr-32 py-5 my-3 focus:outline-black focus:rounded-xl"
                                            />
                                            <input
                                                value={phone}
                                                onChange={(e) =>
                                                    setPhone(e.target.value)
                                                }
                                                type="text"
                                                placeholder="Your phone number"
                                                className="w-full pl-5 pr-32 py-5 focus:outline-black focus:rounded-xl"
                                            />
                                        </form>
                                    </div>
                                    <div className="mt-4">
                                        <Button
                                            onclick={handleSubmit}
                                            type="button"
                                            name="Submit"
                                            className="mt-5 float-right inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                        />
                                    </div>
                                </div>
                            </Transition.Child>
                        </div>
                    </Dialog>
                </Transition>
            </div>
            <div className="space-y-5 divide-y-4 divide-black">
                {addresses.map((person) => (
                    <div
                        key={person.id}
                        className="text-white sm:px-4 px-10 relative flex-center-y justify-between tracking-wide p-4"
                    >
                        <div className="flex">
                            <div className="flex flex-col text-right sm:text-sm sm:px-5 px-10">
                                <p className="py-2 md:w-20">Full name:</p>
                                <p className="py-2">Phone:</p>
                                <p className="py-2">Address:</p>
                            </div>
                            <div className="flex flex-col">
                                <p className="py-2">{person.name}</p>
                                <p className="py-2">{person.phone}</p>
                                <p className="py-2">{person.address}</p>
                            </div>
                        </div>

                        <div className="flex flex-col space-y-10">
                            <Button
                                name="Edit"
                                onclick={() => handleEdit(person)}
                                className="bg-secondary-500"
                            />
                            <Button
                                name="Delete"
                                onclick={() => handleDelete(person)}
                                className="bg-secondary-500"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
