import React from "react";
import Button from "../../../components/Button";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import { userApi } from "apis/userApi";
export default function Address() {
    const user = useSelector(state => state.user);
    const [isOpen, setIsOpen] = useState(false);
    const [currentAddressId, setCurrentAddressId] = useState(null);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [isDefault, setIsDefault] = useState(false);
    const [addresses, setAddresses] = useState(user.data.addresses);
    const handleSubmit = async () => {
        if (!name || !phone || !address) {
            alert("Please fill all fields");
            return;
        }
        if (currentAddressId) {
            try {
                let newAddress = [...addresses].map((item) =>
                    item._id === currentAddressId
                        ? { ...item, name, phone, address, isDefault }
                        : { ...item, isDefault: isDefault ? false : item.isDefault }
                );
                let response = await userApi.updateUser({ addresses: newAddress });
                setAddresses(response.data.user.addresses);
                resetState();
                return;
            } catch (error) {
                alert(error.response.data.message);
                return;
            }
        }
        try {
            const newAddress = {
                name,
                phone,
                address,
                isDefault: addresses.length === 0,
            };
            const response = await userApi.updateUser({ addresses: [...addresses, newAddress] });
            setAddresses(response.data.user.addresses);
            resetState();
        } catch (error) {
            alert(error.response.data.message);
        }

    };
    const handleDelete = async (item) => {
        try {
            let newAddress = [...addresses].filter((address) => address._id !== item._id);
            const response = await userApi.updateUser({ addresses: newAddress });
            setAddresses(response.data.user.addresses);
        } catch (error) {
            console.log("error: ", error);
            alert(error.response.data.message);
        }

    };
    const handleEdit = (item) => {
        setCurrentAddressId(item._id);
        setName(item.name);
        setPhone(item.phone);
        setAddress(item.address);
        setIsOpen(true);
    };
    const resetState = () => {
        setName("");
        setPhone("");
        setAddress("");
        setIsDefault(false);
        setIsOpen(false);
        setCurrentAddressId(null);
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
                    onclick={() => setIsOpen(pre => !pre)}
                />
                <Transition appear show={isOpen} as={Fragment}>
                    <Dialog
                        as="div"
                        className="fixed inset-0 z-10 overflow-y-auto"
                        onClose={() => setIsOpen(pre => !pre)}
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
                                        {
                                            currentAddressId ? "Edit" : "New"
                                        }
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <form action="" className="space-y-4">
                                            <input
                                                value={name}
                                                onChange={(e) =>
                                                    setName(e.target.value)
                                                }
                                                type="text"
                                                placeholder="What's your name?"
                                                className="w-full py-2 px-4 border outline-none"
                                            />
                                            <input
                                                value={address}
                                                onChange={(e) =>
                                                    setAddress(e.target.value)
                                                }
                                                type="text"
                                                placeholder="What is your address?"
                                                className="w-full py-2 px-4 border outline-none"
                                            />
                                            <input
                                                value={phone}
                                                onChange={(e) =>
                                                    setPhone(e.target.value)
                                                }
                                                type="text"
                                                placeholder="Your phone number"
                                                className="w-full py-2 px-4 border outline-none"
                                            />
                                            {
                                                currentAddressId && <input
                                                    checked={isDefault}
                                                    onChange={() =>
                                                        setIsDefault(pre => !pre)
                                                    }
                                                    type="checkbox"
                                                    placeholder="Your phone number"
                                                    className="w-4 h-4 mx-auto mt-4"
                                                />
                                            }

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
            <div className="divide-y-4 divide-black">
                {addresses.map((item) => (
                    <div
                        key={item._id}
                        className={`${item.isDefault ? "bg-primary-700" : ""} text-white sm:px-4 px-10 relative flex-center-y justify-between tracking-wide p-4`}
                    >
                        <div className="flex-center">
                            <div className="flex flex-col text-right sm:text-sm sm:px-5 px-10">
                                <p className="py-2 md:w-20">Full name:</p>
                                <p className="py-2">Phone:</p>
                                <p className="py-2">Address:</p>
                            </div>
                            <div className="flex flex-col">
                                <p className="py-2">{item.name}</p>
                                <p className="py-2">{item.phone}</p>
                                <p className="py-2">{item.address}</p>
                            </div>
                        </div>

                        <div className="flex flex-col space-y-10">
                            <Button
                                name="Edit"
                                onclick={() => handleEdit(item)}
                                className="bg-secondary-500"
                            />
                            <Button
                                name="Delete"
                                onclick={() => handleDelete(item)}
                                className="bg-secondary-500"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
