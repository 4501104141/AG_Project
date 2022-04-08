import React from "react";
import { IoStorefront } from "react-icons/io5";
import { MdDeliveryDining } from "react-icons/md";
import Button from "../../../components/Button";
export default function ShipMethod() {
    return (
        <div className="">
            <h1 className="pb-5 text-xl">Ship Method</h1>
            <div className="flex-center-y justify-around px-8">
                <div className="text-center">
                    <MdDeliveryDining className="mx-auto mb-5 text-7xl" />
                    <Button name="Delivery" className="bg-secondary-500" />
                </div>
                <div className="">
                    <IoStorefront className="mx-auto mb-5 text-7xl" />
                    <Button name="Local Pickup" className="bg-secondary-500" />
                </div>
            </div>
        </div>
    );
}
