import React from "react";

export default function ModalCreditCard() {
    return (
        <div
            id="modal"
            className="text-xl p-4 bg-secondary-500 rounded-xl flex-center-y text-center px-18 justify-around"
        >
            <form action="" className="space-y-5 text-black">
                <div className="flex  space-x-10">
                    <input
                        type="text"
                        placeholder="Card number"
                        className="w-full px-5 py-2 rounded-lg"
                    />
                    <input
                        type="text"
                        placeholder="CCV"
                        className="w-28 px-5 py-2 rounded-lg"
                    />
                </div>
                <input
                    type="text"
                    placeholder="Card holder name"
                    className="w-full px-5 py-2 rounded-lg"
                />
                <input
                    type="text"
                    placeholder="Experition Date"
                    className="w-full px-5 py-2 rounded-lg"
                />
            </form>
        </div>
    );
}
