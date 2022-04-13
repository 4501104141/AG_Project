import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import Button from "../../components/Button";
import RateAbout from "./components/RateAbout";
import { useLocation } from "react-router-dom";
import { compareLocation } from "utils";

export default function Feedback() {
    const location = useLocation();
    return (
        <section className="container px-2 md:pt-32 min-h-[700px] bg-quaternary-500">
            <div className="py-10 md:pt-0">
                {/* <div className="flex-center-y text-2xl sm:px-6 sm:text-xl md:pt-10 lg:pl-11 pb-4 lg:pb-0 tracking-wide">
                    <Link to="/cart" className="font-bold ">
                        Cart
                    </Link>
                    <BsArrowRight className="text-black text-5xl mx-5" />
                    <p>Checkout</p>
                </div> */}
                <div className="text-white tracking-wide ">
                    <div className="bg-primary-500 p-5 rounded-xl">
                        <div className="p-5">
                            <h1 className="font-bold text-2xl">Feedback</h1>
                            <div className="flex sm:flex-col space-x-5 sm:space-x-0 pt-5 pl-3">
                                <h3>Lv1 Very Bad</h3>
                                <h3>Lv2: Bad</h3>
                                <h3>Lv3: Normal</h3>
                                <h3>Lv4: Great</h3>
                                <h3>Lv5: Very Great</h3>
                            </div>
                            <div className="p-10 sm:p-0 flex lg:flex-col justify-between font-bold">
                                <div className="p-10 space-y-10 lg:px-20 sm:px-0">
                                    <RateAbout name="Drink Quality" />
                                    <RateAbout name="Price" />
                                    <RateAbout name="Packages" />
                                    <RateAbout name="Service" />
                                </div>
                                <div className="px-20 sm:px-0">
                                    <h1 className="tracking-widest pb-5">
                                        About
                                    </h1>
                                    <textarea
                                        placeholder="Your message"
                                        className="h-52 w-[540px] md:w-96 sm:w-72 p-6 border-none outline-none bg-secondary-500 rounded-xl"
                                    ></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="flex-center py-5 space-x-10">
                            <Button
                                name="Cancel"
                                className="bg-secondary-500"
                                link
                                href="/"
                            />
                            <Button
                                name="submit"
                                className="bg-secondary-500"
                                onclick={() => alert("Thank you")}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
