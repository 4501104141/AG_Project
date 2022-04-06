import React from "react";
import Line from "../components/Line";
import Button from "../../../components/Button";

export default function Addresses() {
    const myAddresses = [
        {
            id: 1,
            Fullname: "Peter Parker",
            Phone: "0916030512",
            Address:
                "338/1/7 , đường An Dương Vương, phường 4, quận 5, tp. HCM",
        },
        {
            id: 2,
            Fullname: "Peter Parker",
            Phone: "0916030512",
            Address:
                "338/1/7 , đường An Dương Vương, phường 4, quận 5, tp. HCM",
        },
    ];
    return (
        <div className="center bg-secondary-500 rounded-xl divide-y-4 divide-black">
            <div className="flex-center-y justify-between px-10 pt-8 pb-10">
                <p className="text-white tracking-wider text-center">
                    Addresses
                </p>
                <Button name="+ Add New Addresses" />
            </div>
            <div className="space-y-5 divide-y-4 divide-black">
                {myAddresses.map((address) => (
                    <div className="text-white sm:px-4 px-10 relative flex-center-y justify-between tracking-wide p-4">
                        <div className="flex">
                            <div className="flex flex-col text-tertiary-500 text-right sm:text-sm sm:px-5 px-10">
                                <p className="py-2 md:w-20">Full name:</p>
                                <p className="py-2">Phone:</p>
                                <p className="py-2">Address:</p>
                            </div>
                            <div className="flex flex-col">
                                <p className="py-2">{address.Fullname}</p>
                                <p className="py-2">{address.Phone}</p>
                                <p className="py-2">{address.Address}</p>
                            </div>
                        </div>

                        <div className="flex flex-col space-y-10">
                            <Button name="Edit" />
                            <Button name="Delete" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
