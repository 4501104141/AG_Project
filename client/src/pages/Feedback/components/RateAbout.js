import React from "react";
import RateRangerPicker from "./RateRangerPicker";
export default function RateAbout({ name, className }) {
    return (
        <div className="flex-center-y">
            <div className="tracking-widest md:mb-0 w-36 pr-5">
                <h3 className="">{name}</h3>
            </div>

            <div className="w-[400px] bg-white md:w-6/12 h-1 relative">
                <RateRangerPicker />
            </div>
        </div>
    );
}
